import { createStore } from 'vuex'
import axios from 'axios'
import {toast} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
// import { applyToken } from '@/service/AuthenticateUser.js'
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
const apiURL = 'https://eshop-i85e.onrender.com/'
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    recentProducts: null,
    product: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setRecentProducts(state, value) {
      state.recentProducts = value
    },
    setProduct(state, value) {
      state.product = value
    }
  },
  actions: {
    async recentProducts (context) {
      try {
        const {results, msg} = await (await axios.get(`${apiURL}
          product/recent`)).data
          // second option
          // const res = await axios.get(`${apiURL}product/recent`
          // const {results, msg} = await res.data
          // )
        if (results) {
          context.commit('setRecentProducts', results)
          cookies.set('')
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchProducts(context) {
      try {
        const {results, msg} = await (await axios.get(`${apiURL}
          product`)).data 
        if (results) {
          context.commit('setProducts', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchProduct(context, id) {
      try {
        const {result, msg} = await (await axios.get(`${apiURL}
          product/${id}`)).data 
        if (result) {
          context.commit('setProduct', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async addAProduct(context, payload) {
      try {
        const {msg} = await (await axios.get(`${apiURL}
          product/add`, payload)).data 
        if (msg) {
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        } 
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    }
  },
  modules: {
  }
})