export function todosReducer(state, action) {
    switch (action.type) {
        case 'add_todo':
            return [...state, action.newTodo]
        case 'delete_todo':
            return state.filter(t => t.id !== action.id)
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
        default:
            throw new Error('This action does not exit')
    }
}