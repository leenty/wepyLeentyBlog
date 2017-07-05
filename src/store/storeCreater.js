import { createStore } from 'redux'

const storeCreater = function ({state, mutations}) {
  return createStore((state, {type, data}) => {
    return type === '@@redux/INIT'
      ? state
      : mutations[type](state, data)
  }, state)
}

class stores {
  constructor (modules) {
    // this = ...modules
    this.initStore(modules)
  }
  initStore(modules) {
    console.log(modules)
    let test = {}
    Object.assign(test, ...modules)
    console.log(test)
    // let state = {},
    //   getters = {},
    //   actions = {},
    //   mutations = {}
    for (module in modules) {
      // state = 
      this[module] = modules[module]
      // this[module] = storeCreater(modules[module])
    }
  }
}

export class storeModules extends stores {
  constructor ({modules}) {
    super(modules)
  }
}
