export function filterReducer(state, action) {
    switch (action.type) {
        case 'change_filter':
            return {
                ...state,
                status: action.filter
            }
        default:
            throw new Error('This action does not exist in filter reducer')
    }
}

const changeFilter = (filter) => {
    return {
        type: 'change_filter',
        filter,
    }
}

export { changeFilter }