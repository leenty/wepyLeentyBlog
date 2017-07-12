import wepy from 'wepy'
export default class globalStatusMethods extends wepy.mixin {
  methods = {
    $updateGlobal(fn) {
      fn()
      this.globalData = JSON.parse(JSON.stringify(this.globalData))
    }
  }
}
