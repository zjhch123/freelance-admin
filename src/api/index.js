export function getUserDetail(id) {
  return fetch(`/api/user/getUserDetail?id=${id}`, {credentials: 'include'}).then(res => res.json())
}

export function getUnVerifyUser(page, count = 10, condition = {}) {
  let queryString = [];
  for (const key in condition) {
    queryString.push(`${key}=${encodeURIComponent(condition[key])}`)
  }
  return fetch(`/api/admin/getUnVerifyUser?page=${page}&count=${count}${queryString.length > 0 ? `&${queryString.join('&')}` : ''}`, {
    credentials: 'include',
  }).then(res => res.json())
}
