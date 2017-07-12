import wepy from 'wepy'
// import globalStatusMethods from './globalStatusMethods.js'

const getGlobalData = function (source, self) {
  console.log(`getGlobalData by ${self.$name}:${source}`)
  self.globalData = self.$root.$parent.globalData
}
const setGlobalData = function (source, self) {
  console.log(`getGlobalData by ${self.$name}:${source}`)
  self.$root.$parent.globalData = self.globalData
}

export default class globalStatus extends wepy.mixin {
  data = {
    globalData: {},
    $globalDataInit: false
  }

  watch = {
    globalData (n, o) {
      // console.log(this.$name, n, o)
      console.log('globalData change')
      this.$globalDataInit && this.$broadcast('$updateDlobalStatus', this.$name)
      this.$globalDataInit && this.$emit('$updateDlobalStatus', this.$name)
      this.$globalDataInit = true
    }
  }

  $updateGlobal (fn) {
    fn()
    // let globalData = {}
    this.globalData = JSON.parse(JSON.stringify(this.globalData))
    this.$apply()
  }

  // methods = {
  //   updateGlobal(fn) {
  //     fn()
  //     this.globalData = JSON.parse(JSON.stringify(this.globalData))
  //   }
  // }

  // mixins = [globalStatusMethods]

  events = {
    $updateDlobalStatus(source, e) {
      console.log(`mixin ${this.$name} update from ${e.source.$name}:$${e.type}`)
      // source === this.$name || console.log('mixin %s update from %s:$%s', this.$name , e.source.$name, e.type)
    }
  }

  onHide () {
    setGlobalData('onHide', this)
  }

  onShow () {
    getGlobalData('onShow', this)
  }

  onUnload () {
    setGlobalData('onUnload', this)
  }

  onLoad () {
    var a = {}
    console.log(a == a)
    console.log(a == {})
    console.log(a == wepy.$copy(a, true))
    console.log(a == JSON.parse(JSON.stringify(a)))
    console.log(this)
    getGlobalData('onShow', this)
  }
}
