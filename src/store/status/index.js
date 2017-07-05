import * as types from '../types'

let state = {
  sliderBar: false,
  test: 'test'
}

let getters = {}

const mutations = {
  [types.TOGGLE_SLIDER_BAR] (state) {
    state.sliderBar = !state.sliderBar
    return state
  }
}

const actions = {}

export default {
  state,
  getters,
  actions,
  mutations
}
