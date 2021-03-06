import router from '../router'
import Cookie from 'js-cookie'

export function getUserDetail(id) {
  return fetch(`/api/admin/getUserDetail?id=${id}`, {credentials: 'include'}).then(res => res.json()).then(res => {
    if (res.code === 401) {
      router.push({
        name: 'login'
      })
      throw new Error('no login!')
    }
    return res
  })
}

export function getTempUserDetail(id) {
  return fetch(`/api/admin/getTempUserDetail?id=${id}`, {credentials: 'include'}).then(res => res.json()).then(res => {
    if (res.code === 401) {
      router.push({
        name: 'login'
      })
      throw new Error('no login!')
    }
    return res
  })
}


export function getUnVerifyUser(page, count = 10, condition = {}) {
  let queryString = [];
  for (const key in condition) {
    queryString.push(`${key}=${encodeURIComponent(condition[key])}`)
  }
  return fetch(`/api/admin/getUnVerifyUser?page=${page}&count=${count}${queryString.length > 0 ? `&${queryString.join('&')}` : ''}`, {
    credentials: 'include',
  }).then(res => res.json()).then(res => {
    if (res.code === 401) {
      router.push({
        name: 'login'
      })
      throw new Error('no login!')
    }
    return res
  })
}

export function verifyUser(ids, type) {
  return fetch(`/api/admin/verifyUser?ids=${ids}&type=${type}`, {credentials: 'include'}).then(res => res.json()).then(res => {
    if (res.code === 401) {
      router.push({
        name: 'login'
      })
      throw new Error('no login!')
    }
    return res
  })
}

export function getAllUser(page, count = 10, condition = {}) {
  let queryString = [];
  for (const key in condition) {
    queryString.push(`${key}=${encodeURIComponent(condition[key])}`)
  }
  return fetch(`/api/admin/getAllUser?page=${page}&count=${count}${queryString.length > 0 ? `&${queryString.join('&')}` : ''}`, {
    credentials: 'include',
  }).then(res => res.json()).then(res => {
    if (res.code === 401) {
      router.push({
        name: 'login'
      })
      throw new Error('no login!')
    }
    return res
  })
}

export function getHotUser() {
  return fetch(`/api/admin/getHotUser`, { credentials: 'include' }).then(res => res.json()).then(res => {
    if (res.code === 401) {
      router.push({
        name: 'login'
      })
      throw new Error('no login!')
    }
    return res
  })
}

export function setHotUser(id, type) {
  return fetch(`/api/admin/setHotUser?id=${id}&type=${type}`, { credentials: 'include' }).then(res => res.json()).then(res => {
    if (res.code === 401) {
      router.push({
        name: 'login'
      })
      throw new Error('no login!')
    }
    return res
  })
}

export function sendMessage(body) {
  return fetch(`/api/admin/sendMessage`, { 
    credentials: 'include',
    body: JSON.stringify(body),
    headers: {
      'x-csrf-token': Cookie.get('csrfToken'),
      'content-type': 'application/json; charset=utf-8'
    },
    method: 'post',
  }).then(res => res.json()).then(res => {
    if (res.code === 401) {
      router.push({
        name: 'login'
      })
      throw new Error('no login!')
    }
    return res
  })
}