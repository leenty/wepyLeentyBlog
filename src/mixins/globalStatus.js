import wepy from 'wepy'

export default class globalStatus extends wepy.mixin {
  data = {
    globalData: null
  }

  onHide () {
    console.log('mixin onHide')
    this.$parent.globalData = this.globalData
  }

  onShow () {
    console.log('mixin onShow')
    this.globalData = this.$parent.globalData
  }

  onUnload () {
    console.log('mixin onUnload')
    this.$parent.globalData = this.globalData
  }

  onLoad () {
    console.log('mixin onLoad')
    this.globalData = this.$parent.globalData
  }
}
