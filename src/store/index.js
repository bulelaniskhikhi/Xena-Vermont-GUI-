import { createStore } from 'vuex'

export default createStore({
  state: {
    allprod: null,
    product: null
  },
  getters: {
  },
  mutations: {
    giveprod(state, products) {
      state.allprod = products
    },
    singleprod(state, products) {
      state.product = products
      
    }
  },
  actions: {
    async getprod(context) {
      const response = await fetch("https://xena-vermont-api.herokuapp.com/products");
      const data = await response.json();
      context.commit('giveprod', data.results)
    },
    fetchSingleProd(context, id){
      fetch(`https://xena-vermont-api.herokuapp.com/products/${id}`)
      .then(res => res.json())
      .then(data => context.commit('singleprod', data.results[0]))
    }
  },
  modules: {
  }
})
