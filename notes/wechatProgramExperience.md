### import与include的区别
include 是导入一个模板(确实如官网所说，这是个耿直的拷贝，真耿直)，本身是不带数据的，所以你给wxml模板配个js数据是没用的。。。与导入它的组件共享作用域

### 事件处理函数
1.小程序里面的生命周期钩子与事件处理函数处于同一层，有异与vuejs的事件处理函数处于mothods下
2.事件处理函数里的this指向当前应用，这点与vue类似，但是data是单独以data键存在的，所以如果要访问`this.testData`的数据需要`this.data.testData`才行，

### 小程序组件化可行性
1.组件不能自己决定行为：小程序引入自定义组件的方式为在`.wxml`中使用`<import src="./template/demo.wxml"/><template is="test" data="{{demoData}}"/>`或者是使用`<include src="./components/demo.wxml"/>`以引入,但是两种引入方式都不能使组件可以控制自身行为
2.小程序模板内使用方法只能使用根节点的方法，目测模板编译的时候使用的是字面量的方式调用`<view bindtap="demoMothod"></view> => <view bindtap="app['demoMothod']"></view>`，所以无法用对象的形式实现类似命名空间的方法。这部分估计只能靠约束命名规则了，这就有点蛋疼了。

### 通过框架编译小程序(使用vue单文件方式比较清晰)
1.借鉴vue的内置对象及方法命名方式，使用`$`符号为区别组件数据名及方法名的开头，即：
```
// component:
data: {
  demoData: 'this is a component demo data'
}

// 编译后该data其实存在于父组件page
// page:
data: {
  pageData: 'this is a pageData',
  testData: 'this is a testData',
  // 编译时在最后存放子组件数据
  $component$demoData: 'this is a component demo data'
}
```

### 人工智障小程序
1.小程序只对data的根节点进行观察
小程序修改数据需要直接修改根节点，不然不能触发数据更新
```
this.st.status = !this.st.status // 不触发数据更新
this.st = {
  status: !this.st.status
} // 触发数据更新
```
2.小程序内对象深克隆之后还是等于原对象
```
var a = {}                            // 模拟器  |  真机调试
console.log(a == a)                   // true   |  true
console.log(a == {})                  // false  |  false
console.log(a == wepy.$copy(a, true)) // false  |  true
```

### wepy
1.mixins 里面的methods方法不能通过混合的方式进入组件或页面的methods里，需要在组件或者页面里显式的声明同名方法才能得到调用。
