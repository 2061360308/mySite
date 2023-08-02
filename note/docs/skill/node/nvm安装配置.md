---
id: nvm-install-config
slug: /nvm-install-config
title: nvm安装配置
date: 2023-08-2
authors: kuizuo
tags: [node, nvm]
keywords: [node, nvm]
---

node版本管理器nvm的配置和安装

<!-- truncate -->

## node卸载

1. 软件向导卸载
2. 删除node的安装目录
3. 查找.npmrc文件是否存在，有就删除(默认路径`C:\User\用户名`)
4. 逐一查看一下文件是否存在，存在就删除
   - C:\Program Files (x86)\Nodejs
   - C:\Program Files\Nodejs
   - C:\Users\用户名\AppData\Roaming\npm
   - C:\Users\用户名\AppData\Roaming\npm-cache
5. 打开系统设置，检查系统环境变量，将node相关的配置都删掉

## nvm

### 下载安装nvm

地址：https://github.com/coreybutler/nvm-windows/releases
注意1：安装路径不要有空格和中文，会出现问题。
注意2：记下本地安装node的版本，卸载node后再安装nvm，以避免冲突。

### 安装node

安装后的nvm默认没有node，我们要手动安装

```
# 采用淘宝镜像地址
nvm npm_mirror https://npm.taobao.org/mirrors/npm/

# 安装node版本
nvm install 14.17.1
```

### 指定当前node版本

安装node版本后，默认未指定nodejs版本，需要手动指定当前版本

```
# 查看已安装的nodejs版本
nvm list

# 使用某一版本的nodejs
nvm use <version> 

# 查看当前nodejs版本
nvm current
```

> 操作以上步骤后发现可以执行npm install XXXX，但无法执行XXXX指令，这是由于nodejs依赖包还是原来位置，需要重新设置，还需再配置全局依赖的环境变量。

### npm的配置

```
# 查看npm配置
npm config ls
```

我们发现依赖包的位置还是原来路径，需要重新设置

执行以下两个指令，根据上面nvm安装Symlink路径（Symlink代表是当前nodejs版本路径，实际是一个快捷方式文件）

```
npm config set prefix "D:\tools\nvm\nodejs\node_modules\node_global"
npm config set cache  "D:\tools\nvm\nodejs\node_modules\node_cache"
```

配置全局依赖的环境变量

> 在系统环境变量下面的 PATH 里面创建一个新的环境变量，使用node_global的路径

## 参考

[CSDN-让梦想疯狂-window下安装node版本管理器nvm](https://blog.csdn.net/qq_21275565/article/details/127488438)

[脚本之家-Node卸载超详细步骤(附图文讲解!)](https://www.jb51.net/article/274141.htm)
