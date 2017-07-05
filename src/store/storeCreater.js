import { createStore } from 'redux'

export const storeCreater = function ({state, mutations}) {
  return createStore((state, {type, text}) => {
    return type === '@@redux/INIT'
      ? state
      : mutations[type](text)
  }, state)
}

export class storeModules {
  constructor ({modues}) {
    this.store = initStore(modules)
  }
  initStore(modules) {

  }
}
