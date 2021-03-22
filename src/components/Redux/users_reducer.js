const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: "Lera",
            status: "Ia ochen ystal",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: 2,
            followed: true,
            fullName: "Vasia",
            status: "Idy na zavod",
            location: {city: "Minsk", country: "Belarus"}
        },
        {id: 3, followed: true, fullName: "Dima", status: "Bog IT", location: {city: "Tula", country: "Russia"}},
        {
            id: 4,
            followed: false,
            fullName: "Tema",
            status: "Lublu zjizn",
            location: {city: "Vorkuta", country: "Russia"}
        },

    ],
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
                users : [...state.users, ...action.users]
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


export default usersReducer