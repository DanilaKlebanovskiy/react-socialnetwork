import {usersApi} from "../API/api";
import {followingUser, toggleFollowingProgress, unfollowUser} from "../components/Redux/users_reducer";

export const updateObjArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}

/*

case FOLLOW :
    return {
        ...state,
        users : updateObjArray(state.users,action.userId,"id",{followed: true})
    }

case UNFOLLOW:
    return {
        users : updateObjArray(state.users,action.userId,"id",{followed: false})
    }*/

/*export const unfollowThunk = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch,userId,usersApi.deleteUnfollow.bind(usersApi),unfollowUser)
    }
}

export const followThunk = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch,userId,usersApi.follow.bind(usersApi),followingUser)
    }
}

const followUnfollowFlow = async (dispatch, userId,apiMethod,actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}*/
