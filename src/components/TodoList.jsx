import { useContext } from "react"
import { TodosContext } from "../contexts/TodoContext"
import TodoItem from "./TodoItem"
import { FilterContext } from "../contexts/filterContext"

export default function TodoList() {
    const { todos } = useContext(TodosContext)
    const { filter } = useContext(FilterContext)

    let filteredTodos;
    if (filter.status === 'active') {
        filteredTodos = todos.filter(t => !t.completed && !t.deleted)
    } else if (filter.status === 'completed') {
        filteredTodos = todos.filter(t => t.completed && !t.deleted)
    } else {
        filteredTodos = todos.filter(t => t.deleted)
    }


    const displayedTodos = filteredTodos.map(t => <TodoItem todoItem={t} key={t.id} />)

    return (
        <ul>
            {displayedTodos}
        </ul>
    )
}
