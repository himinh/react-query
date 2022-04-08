import { useState } from 'react'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { berryApi, pokeApi } from './api/pokeApi'

const usePokemon = pokemon => {
  return useQuery(
    ['pokemon', pokemon],
    async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      return pokeApi.getOne(pokemon)
    },
    {
      enabled: Boolean(pokemon),
    }
  )
}

const PokemonSearch = ({ pokemon }) => {
  const queryInfo = usePokemon(pokemon)
  if (queryInfo.isLoading) return <h2>Loading...</h2>
  if (queryInfo.isError)
    return <h2 style={{ color: 'red' }}>{queryInfo.error.message}</h2>

  return (
    <>
      <div>Show the pokemon sprite</div>
      {queryInfo.data?.sprites ? (
        <img src={queryInfo.data?.sprites?.front_default} alt='pokemon' />
      ) : (
        <p>Pokemon not found.</p>
      )}
    </>
  )
}

function App() {
  const [value, setValue] = useState('')
  return (
    <>
      <h1>React query</h1>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <h4 style={{ color: 'blue' }}>Pokemon</h4>
      <PokemonSearch pokemon={value} />
      <ReactQueryDevtools />
    </>
  )
}

export default App
