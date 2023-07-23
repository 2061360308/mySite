---
title: v-mode详解
date: '2023/7/2 20:46:25'
tags:
  - vue
  - 前端
categories:
  - vue学习
---

# v-model详解

## 用法示例

`v-model`指令用于表单数据的双向绑定, 可以作用于`<input>`、`<textarea>` 及 `<select>`等表单元素

`v-model`作为vue中的一个语法糖, 用法十分简单 , 下面给一个十分简单的例子

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>v-model的数据双向绑定</title>
    <script src="vue.min.js"></script>
</head>
<body>
<div id="app">
    <h1>请注意v-model的数据双向绑定</h1>
    <input type="text" v-model="inputText">
    <button @click="cleanContent">清空</button>
    <p>你输入的内容是: " {{inputText}} "</p>
</div>
<script>
    new Vue({
        el: "#app",
        data: {
            inputText: ""
        },
        methods: {
            cleanContent() {
                this.inputText = "";
            },
        }
    });
</script>
</body>
</html>
```

## 修饰符

### lazy

默认情况下，v-model在进行双向绑定时，绑定的是input事件，那么会在每次内容输入后就将最新的值和绑定的属性进行同步；，如果我们在v-model后跟上lazy修饰符，那么会将绑定的事件切换为 change 事件，只有在提交时（比如回车）才会触发

### number

将输入内容转换为数字类型

## 注意事项

- `v-model` 是单向数据流
- `v-model`是数据双向绑定
- 如果 `v-model` 绑定的是响应式对象上某个不存在的属性，那么 `vue` 会自动地增加这个属性，并让它时响应式

## 参考资料

[知乎-春哥的梦想是摸鱼 面试官：你真的了解v-model是什么吗？(vue2)](https://zhuanlan.zhihu.com/p/453112282)

[CSDN-zayyo 全网最详细的v-model讲解](https://blog.csdn.net/weixin_45215308/article/details/121618639)
