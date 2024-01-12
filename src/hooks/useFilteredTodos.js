import { useMemo } from 'react'

export const useFilteredTodos = (todos, filter) => {
    const filteredTodos = useMemo(() => {
        if (filter.status === 'active') {
            return todos.filter(t => !t.completed && !t.deleted)
        } else if (filter.status === 'completed') {
            return todos.filter(t => t.completed && !t.deleted)
        } else {
            return todos.filter(t => t.deleted)
        }
    }, [todos, filter] );
    return filteredTodos
}