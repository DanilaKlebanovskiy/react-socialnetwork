const SET_USER_DATA = "SET_USER_DATA"
const SET_USER_IMAGE = "SET_USER_IMAGE"
const TOOGLE_FETCHING = "TOOGLE_FETCHING"

let initialState = {
    id : null,
    login : null,
    email : null,
    isAuth : false,
    img : null,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_USER_IMAGE :
            return {
                ...state,
                img : action.image
            }
        case TOOGLE_FETCHING :
            return {
                ...state,
                isFetching : action.isLoading
            }
        default:
            return state;
    }
}
export const setAuthUserData = (data) => {
    return {
        type: SET_USER_DATA,
        data
    }

}

export const setUserImage = (image) => {
    return {
        type: SET_USER_IMAGE,
        image
    }
}
export const setLoading = (isLoading) => {
    return {
        type: TOOGLE_FETCHING,
        isLoading
    }
}



export default authReducer