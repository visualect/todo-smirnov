import { Fragment, useContext, useState } from "react"
import { TodosContext } from "../contexts/TodoContext"
import { deleteTodo, editTodo, toggleTodo } from "../reducers/todoReducer"
import Button from "../ui/Button"

export default function TodoItem({ todoItem }) {
    const { dispatchTodos: dispatch } = useContext(TodosContext)
    const [isEditing, setIsEditing] = useState(false)
    const [newBody, setNewBody] = useState(todoItem.body)

    const onBodyChange = (e) => {
        setNewBody(e.target.value)
    }

    const onCompleted = () => {
        dispatch(toggleTodo(todoItem.id))
    }

    const onEdit = () => {
        dispatch(editTodo(todoItem.id, newBody))
        setIsEditing(false)
    }

    const onDelete = () => {
        dispatch(deleteTodo(todoItem.id))
    }

    const deletedItem = (
        <p>{todoItem.body}</p>
    )

    const baseItem = todoItem.deleted ? deletedItem : (
        <Fragment>
            <p className={`${todoItem.completed && 'line-through'}`}>{todoItem.body}</p>
            <div className="flex flex-col gap-2">
                <Button alt sm green action={onCompleted} label={todoItem.completed ? 'Отменить выполнение' : `Выполнить`} />
                {todoItem.completed ? null : <Button alt sm blue action={() => setIsEditing(true)} label='Изменить' />}
                <Button alt sm red action={onDelete} label='Удалить' />
            </div>
        </Fragment>
    )

    const editableItem = (
        <div className="flex flex-row gap-4 items-center w-full">
            <textarea className="border bg-[#E9ECEF] w-full text-sm rounded-2xl px-4 py-2 outline-none" value={newBody} onChange={onBodyChange} />
            <Button action={onEdit} label='Сохранить изменения' />
        </div>
    )


    return (
        <li className={`border rounded-2xl w-full flex flex-row items-center p-4 justify-between font-medium text-sm ${todoItem.deleted ? 'bg-red-50 text-red-200' : 'bg-white'}`}>
            {isEditing ? editableItem : baseItem}
        </li>
    )
}
