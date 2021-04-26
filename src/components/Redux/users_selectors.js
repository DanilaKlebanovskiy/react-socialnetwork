import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.userPage.users
}

export const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true);
}
export const getisFetching = (state) => {
    return state.userPage.isFetching
}


export const getUsersSuper = createSelector(getUsers, getisFetching, (users,isFetching) => {
    return users.filter(u => true)

})

export const getPageSize = (state) => {
    return state.userPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.userPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.userPage.currentPage
}


export const getFollowingInProgress = (state) => {
    return state.userPage.followingInProgress
}