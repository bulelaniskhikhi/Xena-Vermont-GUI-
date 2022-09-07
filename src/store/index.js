import { createStore } from 'vuex'

export default createStore({
  state: {
    allprod: null,
    product: null,
    ratingproduct: null
  },
  getters: {
  },
  mutations: {
    giveprod(state, products) {
      state.allprod = products
    },
    singleprod(state, products) {
      state.product = products
    },
      giveratingprod(state, products) {
        state.ratingproduct = products
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
    },
    getratingprod(context, esrbRating) {
      fetch(`https://xena-vermont-api.herokuapp.com/products/rating/${esrbRating}`)
      .then(res => res.json())
      .then(data => context.commit('giveratingprod', data.results))
    },
    login(context, payload) {
      fetch(`http://localhost:3000/users/`, {
      // fetch(`https://xena-vermont-api.herokuapp.com/users/`, {
        method: 'PATCH', 
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      
      })
    },
      register(context, payload) {
        fetch(`https://xena-vermont-api.herokuapp.com/users/`, {
        method: 'POST', 
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
      }
    
  },
  modules: {
  }
})
