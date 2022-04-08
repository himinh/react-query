import axios from 'axios'
export const pokeapi_url = 'https://pokeapi.co/api/v2/pokemon'
export const berryapi_url = 'https://pokeapi.co/api/v2/berry'

export const pokeApi = {
  getAll() {
    return axios.get(pokeapi_url).then(({ data }) => data)
  },
  getOne(pokeId) {
    return axios.get(`${pokeapi_url}/${pokeId}`).then(({ data }) => data)
  },
}

export const berryApi = {
  getAll() {
    return axios
      .get(berryapi_url)
      .then(({ data }) => data)
      .catch(error => error?.response?.data)
  },
}
