import { useState, useContext } from 'react'
import { TodosContext } from "../contexts/TodoContext"
import { addTodo } from '../reducers/todoReducer'

export default function TodoForm() {
    const { dispatchTodos: dispatch } = useContext(TodosContext)
    const [todoValue, setTodoValue] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (!todoValue.trim()) {
            return
        } else {
            dispatch(addTodo(todoValue.trim()))
            setTodoValue('')
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <input value={todoValue} onChange={e => setTodoValue(e.target.value)} type="text" />
                <button>Добавить</button>
            </div>
        </form>
    )
}
