const initialState = {
    allUsers: [],
    activeUsers: 0,
    disabledUsers: 0
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add_user":
            return {
                ...state, allUsers: action.data
            }
        default:
            return state

    }
}

export default userReducer