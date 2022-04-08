import axios from 'axios'
const base_url = 'https://rickandmortyapi.com/api'

export const axiosInstance = axios.create({
  baseURL: base_url,
  headers: { 'Content-Type': 'application/json' },
})

export const characterApi = {
  getAll: async ({ queryKey }) => {
    try {
      const { data } = await axiosInstance.get(`/character?page=${queryKey[1]}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  },
}
