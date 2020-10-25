import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      users: [],
    },
    mutations: {
      setUsers: (state, users) => (state.users = users),
      newUser: (state, user) => state.users.push(user),
    },
    actions: {
      async fetchUsers({ commit }) {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )

        commit('setUsers', response.data)
      },
      async addUser({ commit }, name) {
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/users',
          { name, username: 'haha' }
        )

        commit('newUser', response.data)
      },
    },
    getters: {
      allUsers: (state) => state.users,
    },
  })
}

export default createStore
