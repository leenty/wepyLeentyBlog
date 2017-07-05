import {observable, autorun, computed} from 'mobx'
// list[2] = 3

export const list = observable([1, 2, 4])
export const person = observable({
    firstName: "Clive Staples",
    lastName: "Lewis",
    qwe: {
      asd: ['hhh']
    },
    get lastName1() {
      return this.lastName + '123'
    }
})

export class OrderLine {
    @observable price = 0;
    @observable amount = 1;

    @computed get total() {
        return this.price * this.amount;
    }
}