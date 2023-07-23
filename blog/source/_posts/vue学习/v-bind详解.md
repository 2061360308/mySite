---
title: v-bind详解
date: '2023/7/2 20:46:25'
tags:
  - vue
  - 前端
categories:
  - vue学习
---

## 基础

" v-bind: " 指令会将普通属性的值变为表达值

写法为 ` v-bind:属性名 = " 表达式 " ` 或者简写为 ` :属性名 = " 表达式 " ` 这时属性名后对应的字符串将不是普通的字符串了,而是变成了js的表达式

此外`v-bind` 还对 `class` , `style` , `url`这些属性进行了增强

## v-bind:class

### 将js对象写在html中

```html
<div id="app">
    <ul>
        // 注意此处传入的是对象, 其key为class名, value为控制该class名是否启用布尔型的变量
        <li v-bind:class="{'active':isActive}">hello! v-bind:class</li>
    </ul>
</div>

<style>
    .active{
        color:red;
    }
</style>

<script>
var vm = new Vue({
    el:"#app",
    data:{
        isActive:true,
    }
})
</script>
```

### 传入对象

或者, 你也可以直接传入一个关于class名和其显示状态的对象. 下面是一个完整的案例

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title> Vue v-bind:class 实例</title>
    <script src="https://cdn.staticfile.org/vue/2.7.0/vue.min.js"></script>
    <style>
        .active{
            color:red;
        }
    </style>
</head>
<body>
    <div id="app">
        <ul>
            <li v-bind:class="activeClass">hello! v-bind:class</li>
        </ul>
    </div>

    <script>
    var vm = new Vue({
        el:"#app",
        data:{
            activeClass:{'active':true},
        }
    })
    </script>
</body>
</html>
```

### 使用数组

你还可以使用数组来一次性添加多个class名

```html
<!DOCTYPE>
<html>
<head>
    <meta charst="utf-8">
    <title>使用数组的方法添加多个class名</title>
    <script src="https://cdn.staticfile.org/vue/2.7.0/vue.min.js"></script>
</head>
<body>
    <div id="app">
        <div :class="classList">
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                classList:['boxClass','wrapClasss']
            }
        })
    </script>
</body>
</html>
```

### 三目运算

如果想根据条件切换列表中的class，可以用三目运算

```html
<!DOCTYPE>
<html>
<head>
    <meta charst="utf-8">
    <title>使用三目运算切换列表中的class名</title>
    <script src="https://cdn.staticfile.org/vue/2.7.0/vue.min.js"></script>
</head>
<body>
    <ul class="box" :class="[isA?classA:‘‘, classB]">
        <li>学习Vue</li>
        <li>学习Node</li>
        <li>学习React</li>
    </ul>
    <script>
        var vm= new Vue({
            el:‘.box‘,
            data:{
                classA:‘textColor‘,
                    classB:‘textSize‘,
                isA:false 
                }
            })
    </script>
</body>
</html>
```

## v-bind:style

`v-bind:style` 的语法与css类似,值得注意的是其中CSS的属性名要用驼峰命名法
同上面的 `v-bind:class` 一样,其也支持直接内嵌, 或是传入对象 , 数组的方式

## v-bind:url

这个较为简单 `<img class="box" :src="url" >` 类似这样就可以