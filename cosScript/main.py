#!/usr/bin/python
# -*- coding:utf-8 -*-
# @author  : 盧瞳
# @time    : 2023/7/23 18:03
# @function: the script is used to do something.
# @version : V1
import hashlib
import json
import time

from qcloud_cos import CosConfig
from qcloud_cos import CosS3Client
import sys
import os
import logging
from dotenv import load_dotenv
from qcloud_cos.cos_threadpool import SimpleThreadPool
from rich import print
from rich.console import Console

console = Console()


class CosScript:
    cosObj = []  # cos中对象列表
    blogObj = []  # blog中对象列表
    noteObj = []  # note中对象列表
    hashDict_new = {}  # 文件对象新的hash值记录
    hashDict_old = {}  # 文件对象旧的hash值记录

    def __init__(self, envfile=None, debug=False):
        self.debug = debug
        if debug:
            # 正常情况日志级别使用 INFO，需要定位时可以修改为 DEBUG，此时 SDK 会打印和服务端的通信信息
            logging.basicConfig(level=logging.DEBUG, filename="qcloud_cos.log",
                                format="%(asctime)s-%(name)s-%(levelname)s-%(message)s")
        else:
            logging.basicConfig(level=logging.INFO, filename="qcloud_cos.log",
                                format="%(levelname)s - %(asctime)s - %(name)s - %(message)s")

        # 载入环境变量
        if envfile is None:
            load_dotenv()
        # 1. 设置用户属性, 包括 secret_id, secret_key, region等。Appid 已在 CosConfig 中移除，请在参数 Bucket 中带上 Appid。Bucket 由 BucketName-Appid 组成
        secret_id = os.environ['COS_SECRET_ID']
        # 用户的 SecretId，建议使用子账号密钥，授权遵循最小权限指引，降低使用风险。子账号密钥获取可参见 https://cloud.tencent.com/document/product/598/37140
        secret_key = os.environ['COS_SECRET_KEY']
        # 用户的 SecretKey，建议使用子账号密钥，授权遵循最小权限指引，降低使用风险。子账号密钥获取可参见 https://cloud.tencent.com/document/product/598/37140
        region = 'ap-singapore'
        # 替换为用户的 region，已创建桶归属的 region 可以在控制台查看，https://console.cloud.tencent.com/cos5/bucket
        # COS 支持的所有 region 列表参见 https://cloud.tencent.com/document/product/436/6224
        token = None
        # 如果使用永久密钥不需要填入 token，如果使用临时密钥需要填入，临时密钥生成和使用指引参见 https://cloud.tencent.com/document/product/436/14048
        scheme = 'https'  # 指定使用 http/https 协议来访问 COS，默认为 https，可不填

        self.bucket = "blog-1303709080"

        config = CosConfig(Region=region, SecretId=secret_id, SecretKey=secret_key, Token=token, Scheme=scheme)
        self.client = CosS3Client(config)

        if os.path.isfile("hash.json"):
            with open("hash.json", 'r', encoding='utf-8') as f:
                self.hashDict_old = json.loads(f.read())

    def listCosObj(self):
        response = self.client.list_objects(Bucket=self.bucket)
        if 'Contents' in response:
            self.cosObj = response['Contents']

        if self.debug:
            print("cosObj", self.cosObj)

    def listBlogObj(self):
        path = os.getenv("BLOG_PATH")
        for root, dirs, files in os.walk(path):
            if files:
                for file in files:
                    # 转换 \ 为 / 是 为了和cos统一
                    self.blogObj.append(os.path.join(root, file).replace(path, "").replace("\\", "/")[1:])

        if self.debug:
            print("blogObj", self.blogObj)

    def listNoteObj(self):
        path = os.getenv("NOTE_PATH")
        for root, dirs, files in os.walk(path):
            if files:
                for file in files:
                    # 转换 \ 为 / 是 为了和cos统一
                    self.noteObj.append(os.path.join(root, file).replace(path, "").replace("\\", "/")[1:])

        if self.debug:
            print("noteObj", self.noteObj)

    # 计算hash值
    @staticmethod
    def gethash(file):
        md5_hash = hashlib.md5()
        with open(file, "rb") as f:
            # Read and update hash in chunks of 4K
            for byte_block in iter(lambda: f.read(4096), b""):
                md5_hash.update(byte_block)
            return md5_hash.hexdigest()

    def clearExtraFiles(self):
        pool = SimpleThreadPool()
        # 删除cos中多余对象
        for item in self.cosObj:
            name = item['Key']
            # 是笔记
            if name.startswith("note/"):
                # 本地不存在, 请求cos删除文件
                # name_ = name.replace("note/", "", 1)  # 必须限定只替换一次, 避免替换内容的其他部分
                # 或者直接截取字符串
                name_ = name[5:]
                if name_ not in self.noteObj:
                    pool.add_task(self.client.delete_object, self.bucket, name)
                    print("[red]删除多余文件[/red] [blue][bold]%s[/bold][blue]" % name)
            else:
                if name not in self.blogObj:
                    pool.add_task(self.client.delete_object, self.bucket, name)
                    print("[red]删除多余文件[/red] [blue][bold]%s[/bold][blue]" % name)
        pool.wait_completion()
        result = pool.get_result()
        if not result['success_all']:
            print("Not all files delete sucessed. you should retry")

    def checkExist(self, name):
        # 计算hash
        hash = self.gethash(name)
        # 保存新值
        self.hashDict_new[name] = hash
        # 判断是否有旧值, 是否相等
        if name in self.hashDict_old.keys():
            if hash == self.hashDict_old[name]:
                return True

        return False

    def upload(self):
        # 创建上传的线程池
        pool = SimpleThreadPool()
        # 上传博客文件
        for name in self.blogObj:
            path = os.path.join(os.getenv("BLOG_PATH"), name)
            if not self.checkExist(path):
                pool.add_task(self.client.upload_file, self.bucket, name, LocalFilePath=path)
                print("[yellow]上传[/yellow] [blue][bold]%s[bold][/blue]" % name)
        for name in self.noteObj:
            path = os.path.join(os.getenv("NOTE_PATH"), name)
            if not self.checkExist(path):
                pool.add_task(self.client.upload_file, self.bucket, "note/" + name,
                              LocalFilePath=path)
                print("[yellow]上传[/yellow] [blue][bold]%s[bold][/blue]" % ("note/" + name))

        pool.wait_completion()
        result = pool.get_result()
        if not result['success_all']:
            print("[red]Not all files upload sucessed. you should retry[/red]")

    def saveNewHash(self):
        with open("hash.json", "w+", encoding="utf-8") as f:
            f.write(json.dumps(self.hashDict_new))

    def test(self):
        response = self.client.upload_file(
            Bucket=self.bucket,
            Key='test',
            LocalFilePath=r'D:\software\mySite\blog\public\atom.xml',
            EnableMD5=False,
            progress_callback=None
        )
        print(response)
        '''
        {'Content-Length': '0', 'Connection': 'keep-alive', 'Date': 'Sun, 23 Jul 2023 11:43:20 GMT', 'ETag': '"568f80c0abda5c6cce6ebb169b1706cf"', 'Server': 'tencent-cos', 'x-cos-hash-crc64ecma': '17596863511247222882', 'x-cos-request-id': 'NjRiZDEyNTVfZmRlZjc4MGJfMWFjNmVfZjAzODg4YQ==', 'x-cos-storage-class': 'STANDARD'}
        '''


def deploy():
    global console

    time_start = time.time()
    # 初始化文件列表
    cosScript = CosScript(debug=False)
    cosScript.listNoteObj()
    cosScript.listBlogObj()
    cosScript.listCosObj()

    # 清除cos中多余文件
    cosScript.clearExtraFiles()
    # 上传
    cosScript.upload()
    # 保存新的hash文件
    cosScript.saveNewHash()

    console.print("[green]上传完毕  操作总耗时:[bold] %s [/bold]s[/green]" % (time.time() - time_start))


if __name__ == '__main__':
    deploy()
