import { INCREASE, REDUCE, PRICE_INCREASE, PRICE_REDUCE } from '../mutation-types.js'
export default {
  state: {
    count: 0,
    price: 0
  },
  mutations: {
    [INCREASE] (state) {
      state.count++
    },
    [REDUCE] (state) {
      if (state.count === 0) {
        return false
      }
      state.count--
    },
    [PRICE_INCREASE] (state, price) {
      state.price += price
    },
    [PRICE_REDUCE] (state, price) {
      if (state.price === 0) {
        return false
      }
      state.price -= price
    }
  }
}
