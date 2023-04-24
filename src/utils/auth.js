import Cookies from 'js-cookie'

// const TokenKey = ['token','name','loginName']
const TokenKey = ['jsessionid','name','loginName']

export function getToken(key) {
  return Cookies.get(key)
}

export function setToken(token) {
  Cookies.set('jsessionid',token)
  // TokenKey.forEach(item => Cookies.set(item,token[item]))
  return 
}

export function removeToken() {
  TokenKey.forEach(item => Cookies.remove(item))
  return 
}
