import { useState, useContext } from 'react'
import { TodosContext } from "../contexts/TodoContext"
import { addTodo } from '../reducers/todoReducer'
import Input from '../ui/Input'
import Button from '../ui/Button'

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
        <form onSubmit={onFormSubmit} className='flex flex-col'>
            <div className='flex flex-row gap-4'>
                <Input value={todoValue} onChange={e => setTodoValue(e.target.value)} placeholder="Что нужно сделать?" />
                <Button label='Добавить' />
            </div>
        </form>
    )
}
