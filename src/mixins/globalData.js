import wepy from 'wepy'

const getGlobalData = function (self) {
  self.globalData = self.$root.$parent.globalData
}
const setGlobalData = function (self) {
  self.$root.$parent.globalData = self.globalData
}

export default class globalStatus extends wepy.mixin {
  data = {
    globalData: null
  }

  watch = {
    globalData () {
      this.$broadcast('$updateDlobalStatus')
      this.$emit('$updateDlobalStatus')
    }
  }

  events = {
    $updateDlobalStatus() {}
  }

  onHide () {
    setGlobalData(this)
  }

  onShow () {
    getGlobalData(this)
  }

  onUnload () {
    setGlobalData(this)
  }

  onLoad () {
    getGlobalData(this)
  }
}
