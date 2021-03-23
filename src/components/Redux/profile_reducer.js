const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const DEL_POST = "DEL_POST_TEXT"
const EDIT_POST = "EDIT_POST";
let initialState = {
    postsData: [
        {id: 1, message: 'ti pesik', likeCount: '15' ,flagchange:false},
        {id: 2, message: '9 pokushal', likeCount: '20', flagchange:false},
        {id: 3, message: '4issti vilkoy', likeCount: '10',flagchange:false},
        {id: 4, message: '4issti loshlkoi', likeCount: '30',flagchange:false}
    ], //
    imgAvatar: "https://sun9-39.userapi.com/impf/c840334/v840334011/1d03c/Rf6GaaUJSIE.jpg?size=410x410&quality=96&sign=9f912c64d0e612125a4dbac898b4834a&type=album",//
    imgMain: "https://i.ytimg.com/vi/INiGRHRElmQ/maxresdefault.jpg",
    postText: "hochy v voity"
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let body = state.postText;
            return {
                ...state,
                postText: '',
                postsData: [...state.postsData, {id: 5, message: body, likeCount: '25'}]
            }
        case
        UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                postText: action.newText
            }

        case
        DEL_POST:
            return {...state,
                postsData: []
            }
        case
        EDIT_POST: {
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.forEach(function (element) {
                if (element.id === action.idPost) {
                    element.message = "nelzia izmenit";
                    return stateCopy
                }
            })
            return stateCopy
        }
        default:
            return state
    }
}

export let addPostActionCreator = () => {

    return ({
        type: ADD_POST,
    })
}

export let onPostChangeActionCreator = (text) => {
    return ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    })
}

export let delAllPostActionCreator = () => {
    return {type: DEL_POST}
}

export let editPostActionCreator = (idPost) => {
    return {
        type: EDIT_POST,
        idPost: idPost
    }
}
export default profileReducer