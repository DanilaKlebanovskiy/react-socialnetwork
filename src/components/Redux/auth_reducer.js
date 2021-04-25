import {headerApi, loginApi} from "../../API/api";
import {stopSubmit} from "redux-form"

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA"
const SET_USER_IMAGE = "SET_USER_IMAGE"
const TOOGLE_FETCHING = "TOOGLE_FETCHING"
const SET_CAPTCHA = "SET_CAPTCHA"

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    img: null,
    isFetching: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.payload,
            }
        case SET_USER_IMAGE :
            return {
                ...state,
                img: action.image
            }
        case TOOGLE_FETCHING :
            return {
                ...state,
                isFetching: action.isLoading
            }
        case SET_CAPTCHA :
            return {
                ...state,
                captchaUrl: action.capthaUrl
            }
        default:
            return state;
    }
}
export const setAuthUserData = (id, login, email, isAuth) => {
    console.log(id, login, email, isAuth)
    return {
        type: SET_USER_DATA,
        payload: {id, login, email, isAuth}
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

export const setCaptcha = (capthaUrl) => {

    return {
        type: SET_CAPTCHA,
        capthaUrl
    }
}

export const authThunk = () => async (dispatch) => {
    dispatch(setLoading(true))
    let response = await headerApi.getLogin()
    dispatch(setLoading(false))
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(response.data.id, response.data.login, response.data.email, true))
        headerApi.getPictureLogin().then(data => {
            dispatch(setUserImage(data.photos.small))
        })
    }
}

//formData.login,formData.password,formData.remeberme
export const loginThunk = (login, password, rememberMe) =>
    async (dispatch) => {
        let response = await loginApi.postLogin(login, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(authThunk())
            } else if (response.data.resultCode === 1) {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
                alert(response.data.messages)
            } else {
                loginApi.getCaptha().then(response => setCaptcha(response.data.url))
            }

    }


export const logoutThunk = () => {
    return (dispatch) => {
        loginApi.deleteLogin().then(data => {
            dispatch(setAuthUserData(null, null, null, false))
        })
    }
}


export default authReducer



