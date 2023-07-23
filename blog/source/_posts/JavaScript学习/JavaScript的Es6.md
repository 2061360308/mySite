---
title: JavaScript的Es6
tags:
  - js
  - es6
  - 前端
categories:
  - JavaScript学习
date: 2023-07-12 11:32:41
---

## 变量和常量, 块作用域

### 变量

使用`let`进行变量声明

### 块作用域

使用`{}`包裹代表一个代码块, 来隔绝作用域

### 常量

使用`const`声明, 建议常量名使用大写来标注

## 模板字符窜

用法介绍

```
使用" `` " 来包裹 而使用 ${变量名} 来引入变量值 , 另外其允许跨行内容

例如:

const STR1 = "hello"


const STR2 = `STR1的内容是:${STR1}
下面也是STR2的内容`
```

## 解构和赋值

> 适用于: 数组, 对象

```js
const [a, b, c] = [1, 2, 3]

/*
结果:
    a=1, b=2, c=3
*/
```

```js
const {username, age: userAge} = {
    username: '盧瞳'
    age: 18,
    gender: 'man'
}

/*
结果:
    username='盧瞳', userAge=18
*/
// 这个例子中, 我们分别把下面对象中'username'和'age'对应的值赋值给变量, 
// 在把age赋值时我们还尝试传入了userAge这个新的变量名
```

`...`剩余项展开符

```js
const {username, age: userAge, ...others} ={
    username: '盧瞳',
    age: 18,
    gender: 'man',
    category: 'user'
}

/*
结果:
    username='盧瞳', userAge=18, others = {gender: 'man',category: 'user' }
*/
```

## 数组和对象的扩展

### 扩展运算符

语法`...对象名/数组名`

```js
let a = [1,2,3]
let b = [4,5,6]
let c = [...a, ...b]


/*
结果:
    c=[1,2,3,4,5,6]
*/
```

对象的扩展运算符使用方法类似

### 数组方法`Array.from()`

`Array.from()` 将伪数组转化为真实数组

### 对象的方法`Object.assign`

`Object.assign`进行对象的浅拷贝, 或对象的功能合并

```js
const objA = {
    name="...",
    age:18
}
const objB = {
    gender: 'man'
}
const objC = Object.assign({}, objA, objB)
```

## class

```js
class A {
    // 构造方法
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // 自定义方法, 直接写 ,不需要逗号
    instruduce(){
        console.log(`我的名字是$(this.name), 我今年$(this.age)岁了.`);
    }    
}

const a1 = new A('...', 18);


// 类的继承
class B extends A {
    constructor(name, age, gender){
        super(name, age); // 记得需要super调用父类构造方法
        this.gender = gender;
    }
}
```

## 箭头函数

```js
// 普通
const getSum1 = function(n){
    return n+3;
}
// 箭头函数简写
const getSun1 = n => n+3

//格式为
const 变量名 = (参数一, 参数二) => 返回值表达式 // 不需要你return
const 变量名 = (参数一, 参数二) => {} // 执行复杂逻辑, 自己return

// REST参数, 收集最后传入其他的没有使用的参数, 并保存为数组

const print = (a, b , ...other) => console.log(a, b, other)
```

## Promise  Async 异步 和 同步

> 常见的异步任务 : 定时器 , Ajax

### Promise

基本结构

```js
const p1 = new Promise((resolve, reject)=>{
    // 执行异步任务代码
    // Promise 设置了俩个函数 resolve 和 reject
    // 若果异步任务成功, 那么你需要调用 resolve, 它可以接受参数
    // 若果失败, 需要调用 reject 它同样接收一个参数
    resolve({state: "success"})
})

p1.then(data=>{
    // 异步调用成功, 即resolve被调用的情况下会执行then, 并将传入resolve的数据带回
})
.catch(err=>{
    // 异步失败, 调用catch, 传入reject接受到的数据
})
```

多个异步任务的示例

```js
const p1 = new Promise((resolve, reject)=>{
    // 执行异步任务代码
    // Promise 设置了俩个函数 resolve 和 reject
    // 若果异步任务成功, 那么你需要调用 resolve, 它可以接受参数
    // 若果失败, 需要调用 reject 它同样接收一个参数
    resolve({state: "任务一 success"})
})

p1.then(data=>{
    // 异步调用成功, 即resolve被调用的情况下会执行then, 并将传入resolve的数据带回
    return new Promise((resolve, reject)=>{
        // 执行异步任务代码
        // Promise 设置了俩个函数 resolve 和 reject
        // 若果异步任务成功, 那么你需要调用 resolve, 它可以接受参数
        // 若果失败, 需要调用 reject 它同样接收一个参数
        resolve({state: "任务二 success"})
    })
})

.then(data=>{
    // data = {state: "任务二 success"}
})
.catch(err=>{
    // 异步失败, 调用catch, 传入reject接受到的数据
})

//如果前面任务失败了, 那么记得在错误处理函数最后抛出一个异常, 
// 来终止后续异步任务的执行 使用 throw new Erro('错误信息')
// 或者你可以return 一个失败的Promise 对象
```

`then()` 函数其实接受两个函数作为参数, 第一个为成功时调用, 第二个为失败时调用, 如果没有第二个参数, 那么会找他下面的`catch`执行

### Async

> Async是基于Promise的简化方式

Async 需要搭配关键字 await

使用流程 :

1. 准备一个返回Promise对象的函数

2. 为使用await的函数添加async

3. 在添加了async的函数里面 调用 步骤一函数前 添加 await 

简单理解 : 用async标注我要使用async了, 之后用 await 标明需要等待这个异步任务完成

## Proxy 代理对象

不常用,但是是一些框架的实现原理的一个支撑

```js
let obj = {name: '', age: 18}
let p1 = new Proxy(obj, {
    get(target, property, receiver){
        // target: 数据对象 这里 obj
        // property: 属性名
        // receiver: 当前使用的Proxy实例
        // 将在获取obj内容的时候自动触发
    },
    set(){
        // 将在更改obj内容的时候自动触发
    }
    // 还有其他函数, 请查阅mdn的文档
})
```

其他细节懒得写了,  有需要去用vue吧,现在还懒得去了解他们的原理

## Module

将不同类型的功能放在不同的文件中, 一个文件为一个模块

关于js中的模块有两种引入方式的标准 :

- ESM 只能在浏览器

- CommonJs 只能在Node.js

### ESModule

进行模块导入前, 需要先进行导出

```js
// a.js 文件

// ESM有俩种导出
// 1. 自定义导出
export const aTitle = "这是A的标题"
export function aFn(){

}

// 默认导出 , 将所有需要导出的封如新的对象,然后导出
export default {
    // 这里写需要导出的内容
}
```

导入操作

```js
// index.js 文件
/* 注意 当你通过script标签引入一个文件并且它使用了模块功能
   你需要加一个type="moudle"属性
    例如此处:
    <script src="index.js" type="moudle"></script>
*/

// 对于默认的导出, 这里moudleA 为任意变量名, 他之后会被赋值为你在defaule导出的对象
import moudleA from "./a" // 可以省略js后缀


// 对于自定义的导出, 需要进行解构, 此外使用as可以起别名
import { aTitle, aFun as aFunction } from "./a"
```

### CommonJs

导出

```js
// b.js 文件

// commonjs需要统一导出
module.exports = {
    bTitle: "这是b的标题"
    bFun: function(){}
}


// 你还可以分开导出, 不用统一写, 效果一样
exports.bTitle = "这是b的标题"
```

导入

```js
// index.js 文件

const moduleB = require('./b')
```
