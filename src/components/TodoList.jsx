import { useContext } from "react"
import { TodosContext } from "../contexts/TodoContext"
import TodoItem from "./TodoItem"
import { FilterContext } from "../contexts/filterContext"
import { useFilteredTodos } from "../hooks/useFilteredTodos"

export default function TodoList() {
    const { todos } = useContext(TodosContext)
    const { filter } = useContext(FilterContext)

    let filteredTodos = useFilteredTodos(todos, filter)

    const displayedTodos = filteredTodos.map(t => <TodoItem todoItem={t} key={t.id} />)

    return (
        <ul className="w-full sm:w-[800px] flex flex-col gap-4">
            {displayedTodos}
        </ul>
    )
}
