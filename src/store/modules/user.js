import { login } from '@/api/login'

const user = {
  state: {
    token: {},
    name: '',
    avatar: '',
    roles: [],
    todoList: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_TODOLIST: (state, todoList) => {
      state.todoList = todoList
    }
  },

  actions: {
    Login ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          console.log('--- user-actions(Login): data ---\n')
          console.log(data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    GetUserInfo ({ commit, state }) {
    },

    Logout ({ commit, state }) {
    },

    FedLogout ({ commit }) {
    }
  }
}

export default user
