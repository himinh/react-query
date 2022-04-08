import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { pokeApi } from './api/pokeApi'

const Pokemon = ({ queryKey }) => {
  const queryInfo = useQuery(queryKey, async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return pokeApi.getAll()
  })

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

function App() {
  return (
    <>
      <h1>React query</h1>
      {<Pokemon queryKey='pokemon1' />}
      <br />
      {<Pokemon queryKey='pokemon1' />}
      <ReactQueryDevtools />
    </>
  )
}

export default App
