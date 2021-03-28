const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "CURRENT_PAGE"
const TOTAL_COUNT = "TOTAL_COUNT"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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

        default:
            return state;
    }
}
export let followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId
    }

}
export let unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId

    }
}
export let setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export let currentPageActionCreator = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}

export let setTotalCountsActonCreator = (totalCount) => {
    return {
        type: TOTAL_COUNT,
        totalCount
    }
}

export default usersReducer