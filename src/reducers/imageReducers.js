var initials = {
    image: [],
    deletedtemp: [],
    deletedselected: [],
    fetching: false,
    error: false
}

export default function (state = initials, action, arr) {
    switch (action.type) {
        case 'FETCHING_IMAGE_STARTS':
            return {
                ...state, fetching: true
            }
        case 'FETCHING_IMAGE_DONE':
            return {
                ...state, image: action.payload, fetching: false, error: false
            }
        case 'FETCHING_IMAGE_ERROR':
            return {
                ...state, image: [], error: true, fetching: false
            }
        case 'DELETE_SELECTED':
            {
                return { ...state, deletedtemp: immutablePush(state.deletedtemp, action.payload) }
            }
        case 'UNDELETE_SELECTED':
            {
                return { ...state, deletedtemp: action.payload }
            }
        case 'DELETE_SELECTED_ALL':
            {
                return { ...state, deletedtemp: [], deletedselected: immutableTwoArrayPush(state.deletedselected, action.payload) }
            }
    }
    function immutablePush(arr, newEntry) {
        return [...arr, newEntry]
    }
    function immutableTwoArrayPush(arr, newEntry) {
        return [...arr, ...newEntry]
    }
    return state
}
