import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { pokeApi } from './api/pokeApi'

const usePokemon = () =>
  useQuery('pokemon', async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return pokeApi.getAll()
  })

const Pokemon = () => {
  const queryInfo = usePokemon()
  if (queryInfo.isLoading) return <h2>Loading...</h2>
  if (queryInfo.isError)
    return <h2 style={{ color: 'red' }}>{queryInfo.error.message}</h2>

  return (
    <>
      {queryInfo.data?.results.map(poke => {
        return <div key={poke.name}>{poke.name}</div>
      })}
    </>
  )
}

const Count = () => {
  const queryInfo = usePokemon()
  return <h3>You are looking at {queryInfo.data?.results.length} pokemons.</h3>
}

function App() {
  return (
    <>
      <h1>React query</h1>
      <Count />
      <Pokemon />
      <ReactQueryDevtools />
    </>
  )
}

export default App
