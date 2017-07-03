import { createStore } from 'redux'

const TOGGLE_SLIDER_BAR = 'TOGGLE_SLIDER_BAR'

let state = {
  sliderBar: false
}

const mutations = {
  [TOGGLE_SLIDER_BAR] () {
    state.sliderBar = !state.sliderBar
    return state
  }
}

let store = createStore((state, {type, text}) => {
  return type === '@@redux/INIT'
    ? state
    : mutations[type](text)
}, state)

console.log(store.getState())

export default store
