import { Fragment, useContext, useState } from "react"
import { TodosContext } from "../contexts/TodoContext"
import { deleteTodo, editTodo, toggleTodo } from "../reducers/todoReducer"

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
            <p>{todoItem.body}</p>
            <div>
                <button onClick={onCompleted}>Completed</button>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </Fragment>
    )
    const editableItem = (
        <div>
            <textarea value={newBody} onChange={onBodyChange} cols="30" rows="10" />
            <button onClick={onEdit}>Save changes</button>
        </div>
    )


    return (
        <li>
            {isEditing ? editableItem : baseItem}
        </li>
    )
}
