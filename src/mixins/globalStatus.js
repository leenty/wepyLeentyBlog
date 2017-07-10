import wepy from 'wepy'

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
    getGlobalData('onShow', this)
  }
}
