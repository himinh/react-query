import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { pokeApi } from './api/pokeApi'
function App() {
  const queryInfo = useQuery(
    'pokemon',
    async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      return pokeApi.getAll()
    },
    {
      refetchOnWindowFocus: false,
    }
  )
  console.log({ queryInfo })

  if (queryInfo.isLoading) return <h2>Loading...</h2>
  if (queryInfo.isError)
    return <h2 style={{ color: 'red' }}>{queryInfo.error.message}</h2>

  return (
    <>
      <h1>React query</h1>
      {queryInfo.data?.results.map(poke => {
        return <div key={poke.name}>{poke.name}</div>
      })}
      <ReactQueryDevtools />
    </>
  )
}

export default App
