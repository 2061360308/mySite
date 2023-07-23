---
title: v-on详解
date: '2023/7/3 20:46:25'
tags:
  - vue
  - 前端
categories:
  - vue学习
---
# vue 监听事件--v-on

## 基础用法

v-on 的用法大体分为俩种分别是: `v-on:click` 和 `v-on:keyup(键弹起) `  `v-on:keydown(键按下)` 分别用来监听鼠标和键盘事件

最后关于监听种类更具体的事件需要用到事件修饰符, 它是紧跟在`v-on:click/keyup`后面用点好隔开的特定参数



实例: 打字练习

> 这个实例综合有点强,用到了 v-bind v-on v-model 这三个指令 , 此外还使用了watch参数监听属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>打字练习</title>
    <script src="vue.min.js"></script>
    <style>
      .spellRight{
        color: darkgreen;
      }
      .spellWrong{
        color: orangered;
      }
    </style>
</head>
<body>
    <div id="app">

      <button v-if="!begin" v-on:click="beginGame">点击开始游戏</button>
      <div v-else>
        <p>{{tipText}}</p>
        <input type="text" @keyup.enter="spellCheck" v-model="message" v-bind:class="spellCheckFlag?'spellRight':'spellWrong'">
        回车提交
        <p style="color: orangered">{{wrongTip}}</p>
      </div>
    </div>
    <script>
      new Vue({
        el:"#app",
        data:{
          begin: false, // 游戏开始标识
          spellCheckFlag:true, // 单词正确css和错误css切换标识
          message:"", // 用户输入框输入文本
          tipText: "", // 提示文字
          wrongTip:"", // 错误提示信息
          words:["data", "methods","watch","el"], // 单词列表
          num:0 // 单词列表计数
        },
        methods:{
          // 监听开始游戏事件
          beginGame:function (){
            this.begin=true;
            this.tipText= this.words[this.num];
          },
          // 监听按键回车点击 并 游戏输入检查
          spellCheck:function (){
            if(this.message===this.words[this.num]){
              //输入正确 判断游戏是否结束
              if (this.num+1<this.words.length) {
                //没有结束切换下一个词
                this.num += 1;
                this.tipText=this.words[this.num];
                this.message="";
                this.wrongTip="";
              }else {
                // 结束,弹出提示,重新开始
                //初始化
                this.begin=false;
                this.spellCheckFlag=true;
                this.message="";
                this.tipText= "";
                this.wrongTip="";
                this.num=0
                alert("游戏结束!");
              }
            }else {
              // 提示输入错误
              this.wrongTip="错误";
            }
          },
        },
        watch:{
          // 监听字符输入 进行拼写检查 切换css
          message:function (val){
            if(val===this.words[this.num]){
              this.spellCheckFlag=true;
            }else {
              this.spellCheckFlag=false;
            }
          }
        }
      })
    </script>
</body>
</html>
```

## 绑定多个事件

在上个简单示例中我们只绑定了一个事件,事实上v-on允许我们绑定多个事件, 请使用方法`v-on={事件1,事件2}`

## 缩写

相比与`v-bind` 可以缩写为`:` `v-on`则是可以缩写为`@`例如`@click`和`@keyup`

## 事件修饰符

> 注意 :  v-on允许我们使用多个事件修饰符

### 基本的事件修饰符

| 名称                   | 介绍                                           |
| -------------------- | -------------------------------------------- |
| .stop                | 阻止冒泡。本质是调用 event.stopPropagation()。          |
| .prevent             | 阻止默认事件（默认行为）。本质是调用 event.preventDefault()。   |
| .capture             | 添加事件监听器时，使用捕获的方式（也就是说，事件采用捕获的方式，而不是采用冒泡的方式）。 |
| .self                | 只有当事件在该元素本身（比如不是子元素）触发时，才会触发回调。              |
| .once                | 事件只触发一次。                                     |
| .{keyCode\|keyAlias} | 只当事件是从侦听器绑定的元素本身触发时，才触发回调。                   |
| .native              | 监听组件根元素的原生事件。                                |

其中 .capture 作用是 令事件采用捕获的方式，而不是采用冒泡的方式. 其中冒泡和捕获的区别为:

**1. 冒泡是从里往外冒，捕获是从外往里捕。**

**2. 当捕获存在时，先从外到里的捕获，剩下的从里到外的冒泡输出。**

### 按键修饰符

> 按键修饰符用来检测具体的按键常常配合 @keyup使用

vue中定义了常见的键码分别为

| 名称  | 别名                      |
| --- | ----------------------- |
| 回车  | enter                   |
| 删除  | delete (捕获“删除”和“退格”键)   |
| 退出  | esc                     |
| 空格  | space                   |
| 换行  | tab (特殊，必须配合keydown去使用) |
| 上   | up                      |
| 下   | down                    |
| 左   | left                    |
| 右   | right                   |

Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）其语法格式为`自定义键名 = 键码` 具体键码数值请参照附录

```html
<!DOCTYPE html>
<html lang="en">
head>
    <meta charset="UTF-8">
    <title>添加自定义键码</title>
    <script src="vue.min.js"></script>
</head>
<body>
  <div id="app">
    <input placeholder="按下回车弹出提示信息" @keyup.huiche="alertInfo">
  </div>

  <script>
    var vm =new Vue({
      el:"#app",
      methods:{
        /** 
            一个速记函数
            展开形式为:
            alertInfo:fuction(){}
        **/
        alertInfo(){
          alert("我们自定义了一个`huiche`按键修饰符")
        }
      }
    });
    Vue.config.keyCodes.huiche = 13;
  </script>

</body>
</html>
```

当你需要定义多个按键修饰符时请传入对象

```js
Vue.config.keyCodes = {
        f2: 113,
        huiche: 13
    };
```

### 系统修饰键（用法特殊）：ctrl、alt、shift、meta

- 配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
- 配合keydown使用：正常触发事件。

其使用方法类似`@keyup.ctrl.y` 意思是输入(ctrl+y)事件

## 附录 -- 键码表

字母和数字键的键码值（keyCode）

| 按键  | 键码  | 按键  | 键码  | 按键  | 键码  | 按键  | 键码  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A   | 65  | J   | 74  | S   | 83  | 1   | 49  |
| B   | 66  | K   | 75  | T   | 84  | 2   | 50  |
| C   | 67  | L   | 76  | U   | 85  | 3   | 51  |
| D   | 68  | M   | 77  | V   | 86  | 4   | 52  |
| E   | 69  | N   | 78  | W   | 87  | 5   | 53  |
| F   | 70  | O   | 79  | X   | 88  | 6   | 54  |
| G   | 71  | P   | 80  | Y   | 89  | 7   | 55  |
| H   | 72  | Q   | 81  | Z   | 90  | 8   | 56  |
| I   | 73  | R   | 82  | 0   | 48  | 9   | 57  |

数字键盘上的各键键码值（keyCode）    功能键键码值（keyCode）

| 按键  | 键码  | 按键    | 键码  | 按键  | 键码  | 按键  | 键码  |
| --- | --- | ----- | --- | --- | --- | --- | --- |
| 0   | 96  | 8     | 104 | F1  | 112 | F9  | 120 |
| 1   | 97  | 9     | 105 | F2  | 113 | F10 | 121 |
| 2   | 98  | *     | 106 | F3  | 114 | F11 | 122 |
| 3   | 99  | +     | 107 | F4  | 115 | F12 | 123 |
| 4   | 100 | Enter | 108 | F5  | 116 |     |     |
| 5   | 101 | -     | 109 | F6  | 117 |     |     |
| 6   | 102 | .     | 110 | F7  | 118 |     |     |
| 7   | 103 | /     | 111 | F8  | 119 |     |     |

<table><thead><tr><th colspan="8">控制键键码值（keyCode）</th></tr></thead><tbody><tr><td><strong>按键</strong></td><td><strong>键码</strong></td><td><strong>按键</strong></td><td><strong>键码</strong></td><td><strong>按键</strong></td><td><strong>键码</strong></td><td><strong>按键</strong></td><td><strong>键码</strong></td></tr><tr><td><strong>BackSpace</strong></td><td>8</td><td><strong>Esc</strong></td><td>27</td><td><strong>Right Arrow</strong></td><td>39</td><td><strong>-_</strong></td><td>189</td></tr><tr><td><strong>Tab</strong></td><td>9</td><td><strong>Spacebar</strong></td><td>32</td><td><strong>Dw Arrow</strong></td><td>40</td><td><strong>.></strong></td><td>190</td></tr><tr><td><strong>Clear</strong></td><td>12</td><td><strong>Page Up</strong></td><td>33</td><td><strong>Insert</strong></td><td>45</td><td><strong>/?</strong></td><td>191</td></tr><tr><td><strong>Enter</strong></td><td>13</td><td><strong>Page Down</strong></td><td>34</td><td><strong>Delete</strong></td><td>46</td><td><strong>`~</strong></td><td>192</td></tr><tr><td><strong>Shift</strong></td><td>16</td><td><strong>End</strong></td><td>35</td><td><strong>Num Lock</strong></td><td>144</td><td><strong>[{ 
     </strong></td><td>219</td></tr><tr><td><strong>Control</strong></td><td>17</td><td><strong>Home</strong></td><td>36</td><td><strong>;:</strong></td><td>186</td><td><strong>\|</strong></td><td>220</td></tr><tr><td><strong>Alt</strong></td><td>18</td><td><strong>Left Arrow</strong></td><td>37</td><td><strong>=+</strong></td><td>187</td><td><strong>]}</strong></td><td>221</td></tr><tr><td><strong>Cape Lock</strong></td><td>20</td><td><strong>Up Arrow</strong></td><td>38</td><td><strong>,<</strong></td><td>188</td><td><strong>'"</strong></td><td>222</td></tr></tbody></table>

多媒体键码值（keyCode）

| 按键  | 键码  | 按键  | 键码  |
| --- | --- | --- | --- |
| 音量加 | 175 | 浏览器 | 172 |
| 音量减 | 174 | 邮件  | 180 |
| 停止  | 179 | 搜索  | 170 |
| 静音  | 173 | 收藏  | 171 |

## 参考资料

[CSDN-陈小同学 v-on 的修饰符](https://blog.csdn.net/xiaoChenPengYou/article/details/120558359)

[CSDN-木木木华 Vue事件符.capture的含义用法](https://blog.csdn.net/catascdd/article/details/108273931)

[CSDN-勇敢*牛牛【Vue】基础系列（七）键盘事件_vue.config.keycodes](https://blog.csdn.net/m0_46672781/article/details/123187832)

[CSDN-苦夏木禾 键盘键码keyCode对照表](https://blog.csdn.net/lhkuxia/article/details/123727389)
