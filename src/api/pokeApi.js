import axios from 'axios'
export const pokeapi_url = 'https://pokeapi.co/api/v2/pokemon'
export const berryapi_url = 'https://pokeapi.co/api/v2/berry'

export const pokeApi = {
  getAll() {
    return axios.get(pokeapi_url)
  },
}
