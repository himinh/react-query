import { useState } from 'react'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { pokeApi } from './api/pokeApi'

const Pokemon = () => {
  const queryInfo = useQuery(
    'pokemon',
    async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      return pokeApi.getAll()
    },
    {
      // refetchOnWindowFocus: false,
      // staleTime: 5000,
      cacheTime: 5000, // Remove cache after component unmount 5s
    }
  )

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
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <h1>React query</h1>
      <button onClick={() => setToggle(!toggle)}>Show Pokemon</button>
      {toggle && <Pokemon />}
      <ReactQueryDevtools />
    </>
  )
}

export default App
