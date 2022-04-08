import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { pokeApi } from './api/pokeApi'
function App() {
  const queryInfo = useQuery('pokemon', pokeApi.getAll)
  console.log({ queryInfo })
  return (
    <>
      <div>React query</div>
      {queryInfo.data?.results.map(poke => {
        return <div key={poke.id}>{poke.name}</div>
      })}
      <ReactQueryDevtools />
    </>
  )
}

export default App
