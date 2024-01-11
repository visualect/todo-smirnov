import { TodosContext } from "../contexts/TodoContext"
import { FilterContext } from "../contexts/filterContext"
import { filterReducer } from "../reducers/filterReducer"
import { todosReducer } from "../reducers/todoReducer"
import { useReducer, useEffect } from "react"

const initialTodos = [
  {
    id: crypto.randomUUID(),
    body: 'Завершить тестовое задание',
    completed: true,
    deleted: false
  },
  {
    id: crypto.randomUUID(),
    body: 'Изменить эту задачу',
    completed: false,
    deleted: false
  },
  {
    id: crypto.randomUUID(),
    body: 'Удалить эту задачу',
    completed: false,
    deleted: false
  },
]


export default function GlobalProvider({ children }) {
  const storage = JSON.parse(
    localStorage.getItem("todos")
  );

  const [todos, dispatchTodos] = useReducer(todosReducer, storage ?? [...initialTodos])
  const [filter, dispatchFilter] = useReducer(filterReducer, { status: 'active' })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider value={{ todos, dispatchTodos }}>
      <FilterContext.Provider value={{ filter, dispatchFilter }}>
        {children}
      </FilterContext.Provider>
    </TodosContext.Provider>
  )
}
