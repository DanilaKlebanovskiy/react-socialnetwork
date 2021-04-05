const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "CURRENT_PAGE"
const TOTAL_COUNT = "TOTAL_COUNT"
const TOOGLE_FETCHING = "TOOGLE_FETCHING"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
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
export let setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export let setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}

export let setTotalCounts = (totalCount) => {
    return {
        type: TOTAL_COUNT,
        totalCount
    }
}

export let setFetching = (isLoading) => {
    return {
        type: TOOGLE_FETCHING,
        isLoading
    }
}




export default usersReducer