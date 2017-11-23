import fetch from '@/utils/fetch'

export function login (username, password) {
  return fetch({
    url: '/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function register (username, password) {
  return fetch({
    url: '/register',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function logout () {
  return fetch({
    url: '/logout',
    method: 'post'
  })
}
