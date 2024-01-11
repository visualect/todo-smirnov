import { useReducer, useEffect, useState } from 'react'
import { reducer } from './reducer'
import { TodosContext } from './context'

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [filter, setFilter] = useState('active')

  return (
    <TodosContext.Provider value={todos}>
      hello world
    </TodosContext.Provider>
  )
}

export default App
