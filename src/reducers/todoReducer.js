export function todosReducer(state, action) {
    switch (action.type) {
        case 'add_todo':
            return [...state, {
                id: crypto.randomUUID(),
                completed: false,
                body: action.body,
                deleted: false
            }]
        case 'delete_todo':
            return state.map(t => {
                if (t.id === action.id) {
                    return {
                        ...t,
                        deleted: true
                    }
                }
                return t
            })
        case 'toggle_todo':
            return state.map(t => {
                if (t.id === action.id) {
                    return {
                        ...t,
                        completed: !t.completed
                    }
                }
                return t
            })
        case 'edit_todo':
            return state.map(t => {
                if (t.id === action.id) {
                    return {
                        ...t,
                        body: action.body
                    }
                }
                return t
            })
        default:
            throw new Error('This action does not exist in todos reducer')
    }
}

const addTodo = (body) => {
    return {
        type: 'add_todo',
        body,
    }
}

const deleteTodo = (id) => {
    return {
        type: 'delete_todo',
        id,
    }
}

const toggleTodo = (id) => {
    return {
        type: 'toggle_todo',
        id,
    }
}

const editTodo = (id, body) => {
    return {
        type: 'edit_todo',
        id,
        body,
    }
}

export { addTodo, deleteTodo, toggleTodo, editTodo }