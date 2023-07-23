---
title: js
tags:
  - js
  - node
categories:
  - JavaScript学习
date: 2023-07-12 21:36:17
---

## 踩坑

### 网页gbk乱码处理

> 使用 axios 请求 gbk 编码的网站，将会出现乱码，原因很简单，node 默认字符编码为 utf8，如果要正常显示 gbk 数据的话就需要将 gbk 转 utf8 格式。

```js
import axios from 'axios'
import * as iconv from 'iconv-lite'

axios
  .get(`https://www.ip138.com/`, {
    responseType: 'arraybuffer',
    transformResponse: [
      function (data) {
        return iconv.decode(data, 'gbk')
      },
    ],
  })
  .then((res) => {
    console.log(res.data)
  })

 // 或者使用async 和 await
 async function request(url) {
    let result = await axios
        .get(url, {
            responseType: 'arraybuffer',
            transformResponse: [
                function (data) {
                    return iconv.decode(data, 'gbk')
                },
            ],
        })

    return result.data
}
```

或者不使用`transformResponse`，在响应结束后使用`iconv.decode(res.data, 'gbk')`，使用`transformResponse`相对优雅一点。

如果返回的是 json 格式的话，可以直接JSON.parse转为 json 对象（前提得确保是 json 格式，不然解析报错）

`return JSON.parse(iconv.decode(data, 'gbk'))`

[原文链接](https://kuizuo.cn/docs/axios-request-gbk-page-encoding-solution/)