wepy让小程序开发不再处于那么繁琐和麻烦的复用之中

### wepy在异步改变页面或组件数据时无效
这个[官方的文档](https://wepyjs.github.io/wepy/#/?id=wepy%e6%95%b0%e6%8d%ae%e7%bb%91%e5%ae%9a%e6%96%b9%e5%bc%8f)里有说到，但还是需要注意下，记在这里。
```
// 官方示例：
setTimeout(() => {
  this.title = 'this is title';
  this.$apply();
}, 3000);
```
wepy在异步改变页面或组件数据时需要使用`this.$apply()`来显式的触发
