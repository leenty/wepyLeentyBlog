import {observable, autorun, computed, action} from 'mobx'
// list[2] = 3

export let list = observable([1, 2, 4])
export let person = observable({
  firstName: "Clive Staples",
  lastName: "Lewis",
  qwe: {
    asd: ['hhh']
  },
  get lastName1() {
    return this.lastName + '123'
  }
})

export let status = observable({
  sliderBar: false,
  toggle: action.bound(function () {
    console.log('toggle')
    this.sliderBar = !this.sliderBar
  })
})
export const subscribe = function (mothod) {
  return autorun(() => mothod(status))
}
// export let disposer = autorun(() => console.log(status.sliderBar))

export let sta = {
  sliderBar: false
}

class OrderLine {
    @observable price = 0
    @observable amount = 1

    @computed get total() {
        return this.price * this.amount
    }
}

export let orderLine = new OrderLine()