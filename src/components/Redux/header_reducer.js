const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

const TOOGLE_FETCHING = "TOOGLE_FETCHING"

let initialState = {

}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }


        case TOOGLE_FETCHING : {
            return {
                ...state,
                isFetching: action.isLoading
            }
        }


        default:
            return state;
    }
}
export let followingUser = (userId) => {
    return {
        type: FOLLOW,
        userId
    }

}
export let unfollowUser = (userId) => {
    return {
        type: UNFOLLOW,
        userId

    }
}

export let setFetching = (isLoading) => {
    return {
        type: TOOGLE_FETCHING,
        isLoading
    }
}


export default usersReducer