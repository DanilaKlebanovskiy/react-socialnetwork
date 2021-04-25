import {profileApi, usersApi} from "../../API/api";
import {toggleFollowingProgress, unfollowUser} from "./users_reducer";

const SET_PROFILE_STATUS = "SET_PROFILE_STATUS"
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const DEL_POST = "DEL_POST_TEXT"
const EDIT_POST = "EDIT_POST";
const UPDATE_EDIT_TEXT = "UPDATE_EDIT_TEXT";
const ADD_EDIT_POST = "ADD_EDIT_POST"
const SET_PROFILE = "SET_PROFILE"
const DELETE_ONE_POST ="DELETE_ONE_POST"
let initialState = {
    postsData: [
        {id: 1, message: 'test', likeCount: '15', flagchange: false, editpostText: ""},
        {id: 2, message: 'test', likeCount: '20', flagchange: false, editpostText: ""},
        {id: 3, message: '4issti vilkoy', likeCount: '10', flagchange: false, editpostText: ""},
        {id: 4, message: '4issti loshlkoi', likeCount: '30', flagchange: false, editpostText: ""}
    ], //
    imgAvatar: "https://sun9-39.userapi.com/impf/c840334/v840334011/1d03c/Rf6GaaUJSIE.jpg?size=410x410&quality=96&sign=9f912c64d0e612125a4dbac898b4834a&type=album",//
    imgMain: "https://i.ytimg.com/vi/INiGRHRElmQ/maxresdefault.jpg",
    profile: null,
    profileStatus: "test"
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let body = action.newText;
            return {
                ...state,
                postText: '',
                postsData: [...state.postsData, {id: 5, message: body, likeCount: '25'}]
            }
        case DELETE_ONE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId)
            }
        case
        DEL_POST:
            return {
                ...state,
                postsData: []
            }
        case
        EDIT_POST:
            return {
                ...state,
                postsData: state.postsData.map(element => {
                    if (element.id === action.idPost) {
                        return {...element, flagchange: true}
                    }
                    return element
                })
            }

        case
        UPDATE_EDIT_TEXT :
            return {
                ...state,
                postsData: state.postsData.map(element => {
                    if (element.id === action.idChangePost) {
                        return {...element, editpostText: action.newText}
                    }
                    return element
                })
            }
        case
        ADD_EDIT_POST :
            return {
                ...state,
                postsData: state.postsData.map(element => {
                    if (element.id === action.idChangePost) {
                        return {...element, message: element.editpostText, flagchange: false}
                    }
                    return element
                })
            }
        case SET_PROFILE :
            return {
                ...state,
                profile: action.profile
            }
        case SET_PROFILE_STATUS :
            return {
                ...state,
                profileStatus: action.status
            }
        default:
            return state
    }
}

export let deletePost = (postId) => {
    return ({
        type: DELETE_ONE_POST,
        postId
    })
}

export let addPostActionCreator = (text) => {

    return ({
        type: ADD_POST,
        newText: text
    })
}



export let delAllPostActionCreator = () => {
    return {type: DEL_POST}
}

export let editPostActionCreator = (idPost) => {
    debugger
    return {
        type: EDIT_POST,
        idPost: idPost
    }
}

export let onChangeEditActionCreator = (text, idPost) => {
    return {
        type: UPDATE_EDIT_TEXT,
        newText: text,
        idChangePost: idPost
    }
}

export let addEditPostActionCreator = (idPost) => {
    return {
        type: ADD_EDIT_POST,
        idChangePost: idPost
    }
}

export let setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile
    }

}

export let setProfileStatus = (status) => {
    return {
        type: SET_PROFILE_STATUS,
        status
    }
}

export const getProfileThunk = (userId) => { return (dispatch) => {
        profileApi.getProfile(userId).then(data => {
            dispatch(setProfile(data))
        })
    }
}

export const getStatusThunk = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId).then(response => {
            dispatch(setProfileStatus(response.data)
            )
        })
    }
}

export const updateStatusThunk = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(response => {
                debugger;
                if (response.data.resultCode === 0)
                    dispatch(setProfileStatus(status)
                    )
            })
    }
}

export default profileReducer