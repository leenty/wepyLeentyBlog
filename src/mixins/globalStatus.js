import wepy from 'wepy'

export default class globalStatus extends wepy.mixin {
  data = {
    globalData: null
  }

  watch = {
    globalData (n, o) {
      console.log(n, o)
    }
  }

  onHide () {
    console.log('mixin onHide')
    this.$root.$parent.globalData = this.globalData
  }

  onShow () {
    console.log('mixin onShow')
    this.globalData = this.$root.$parent.globalData
  }

  onUnload () {
    console.log('mixin onUnload')
    this.$root.$parent.globalData = this.globalData
  }

  onLoad () {
    console.log('mixin onLoad')
    this.globalData = this.$root.$parent.globalData
  }
}
