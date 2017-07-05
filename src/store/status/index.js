import * as types from '../types'

let state = {
  sliderBar: false
}

let getters = {}

const mutations = {
  [TOGGLE_SLIDER_BAR] () {
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
