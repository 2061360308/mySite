---
title: vue组件
date: '2023/7/6 20:46:25'
tags:
  - vue
  - 前端
categories:
  - vue学习
---

# Vue组件

## 基本用法

> vue支持将重复的代码抽出为组件, 方便进行复用. 这在进行大型项目构建时将非常有用. 

vue组件 使用方式上有全局注册和局部注册俩种方式

先说全局注册`Vue.component(tagName, options)`

其中`tagName`为组件名称, 当我们需要调用此组件时就需要在html中使用`<tagName></tagName>`, `options`与创建vue示例接受的参数相同

全局注册后所有的vue实例中均可使用该组件

示例:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>全局注册组件</title>
    <script src="vue.min.js"></script>
</head>
<body>
<div id="app">
  <hello></hello>
</div>
<script>
  Vue.component("hello",{
    // 注意这里的HTML代码只能有单一的根节点
    template:"<h1>你好啊!我是hello组件.</h1>>"
  })
  new Vue({
    el:"#app"
  })
</script>
</body>
</html>
```

此外, 我还能在某一Vue实例中局部注册某一组件, 这是该组件仅在当前实例中可用

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Vue局部注册组件</title>
  <script src="vue.min.js"></script>
</head>
<body>
<div id="app">
  <hello></hello>
</div>
<script>
  new Vue({
    el:"#app",
    components:{
      hello: {
        template:"<h1>你好,我是局部组件</h1>"
      }
    }
  })
</script>
</body>
</html>
```

## 子父组件间信息传递

子父组件间的信息传递遵循 "数据下行, 事件上行" 的模式, 即父组件可以直接将数据传递给子组件, 而子组件不可以直接更改父组件的数据, 而是需要发送事件来通知父组件自己更改数据 .

### Prop  子组件获取父组件数据

`prop`是子组件用来接受父组件传递过来的数据的一个自定义属性

在注册组件时这么使用

```js
Vue.component({
    "clild",{
        // 声明 props
        props:['message'],
        // props声明过的变量和data中数据使用方式一样
        template:"<span>{{message}}</span>"
    }
})
```

注册过上述"child"组件我们该在使用时传入它要求的参数

```html
<!-- 传入固定值 -->
<child message="hello!"></child>
<!-- 使用v-bind 绑定表达式 -->
<child v-bind:message="parentMsg"></child>
```

> 上述使用`v-bind`创建表达式为子组件参数动态绑定数值后, 父组件的值改变后会同步更改到子组件, 但反过来, 子组件对应值更改时并不会影响父组件的值. 子组件想要更改父组件值时需要自定义事件, 父组件通过监听子组件的事件自己响应事件更改值

组件还可以为props指定验证要求

```js
Vue.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})
```

当 prop 验证失败的时候，(开发环境构建版本的) Vue 将会产生一个控制台的警告。

type 可以是下面原生构造器：

- `String`
- `Number`
- `Boolean`
- `Array`
- `Object`
- `Date`
- `Function`
- `Symbol`

type 也可以是一个自定义构造器，使用 instanceof 检测。

### `$emit`触发自定义事件

触发自定义事件, 下面俩种方法均是可行的

- `<button @click="$emit('eventName')">点我</button>`
- 在组件实例中使用`this.$emit('eventName')`

此外, 如果你想要传递参数, 请使用`$emit('eventName', arg1, arg2 ...)`

父组件监听事件:

- `<MyComponent @some-event-name="callback" />`
- 需要参数的情况 `<MyButton @increase-by="(n) => count += n" />`
- 或者使用`<MyButton @increase-by="increaseCount" />` 之后定义方法接收参数

在注册组件时,还可以通过`emits`显示声明它要触发的事件

```js
emits: ['inFocus', 'submit']
```

## 插槽Slots

props用来定义组件接收的参数, 而slots用来定义组件接收的模板内容

```html
<!--在子组件中 -->

<template>
    <slot></slot><!--父组件中的插槽内容将会被展示到这里-->
</template>
<!--在父组件中-->
<childTag>
    ... 需要在插槽里自定义的插槽内容
</childTag> <!--使用插槽的时候需要使用多标签的形式-->
```

如果你需要在一个组件中定义多个插槽,你需要 `具名插槽` 它需要你定义name属性

```html
<!--子组件-->
<template>
  <slot name="header"></slot>
  <slot name="footer"></slot>
</template>
<!--父组件-->
<childTag>
  <template v-slot:header>这是header</template>
  <template v-slot:footer>这是footer</template>
</childTag>
<!--注意其中 "v-slot" 命令可以简写为 "#" 如 "#footer"-->
```

需要注意的一个事项是, 你所定义的插槽是在父组件内的, 在vue中需要牢记一条规则

> 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

所以, 我们定义的插槽只能访问到父组件内的数据,而得不到子组件的数据. 如果你希望在插槽中使用来自子组件的数据, 你就需要定义一个`作用域插槽`

```html
<!--子组件-->
<template>
  <slot v-bind:user="user" name="default"></slot> 
  <!--当只有一个插槽时,默认不加name属性,但需要注意的是此时的slot并不是没有名字的,vue会给他添加默认的名字default-->
</template>
<!--父组件使用-->
<childTag>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
  <!--这里需要注意的是传回来的值始终是个对象, 你需要像上述操作那样解包-->
</childTag>
```

在上述例子中,为了能够在插槽中使用子组件的变量, 我们将其作为参数绑定到了`<slot>`标签上
当然,如果你只有一个默认插槽在使用时你可以省略它的名字,像`<template v-slot="slotProps">`
