import axios from 'axios'
const base_url = 'https://jsonplaceholder.typicode.com'
const api = axios.create({
  baseURL: base_url,
  headers: { 'Content-Type': 'application/json' },
})

export const userApi = {
  getUsers() {
    return api.get('/users').then(res => res.data)
  },

  getUser(id) {
    return api.get(`/users/${id}`).then(res => res.data)
  },

  updateUser({ id, ...updateUser }) {
    return api.patch(`users/${id}`, updateUser).then(res => res.data)
  },
}
