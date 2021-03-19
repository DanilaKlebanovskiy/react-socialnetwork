const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const DEL_POST = "DEL_POST_TEXT"
const EDIT_POST = "EDIT_POST";
let initialState = {
    postsData: [
        {id: 1, message: 'ti pesik', likeCount: '15'},
        {id: 2, message: '9 pokushal', likeCount: '20'},
        {id: 3, message: '4issti vilkoy', likeCount: '10'},
        {id: 4, message: '4issti loshlkoi', likeCount: '30'}
    ], //
    imgAvatar: "https://sun9-39.userapi.com/impf/c840334/v840334011/1d03c/Rf6GaaUJSIE.jpg?size=410x410&quality=96&sign=9f912c64d0e612125a4dbac898b4834a&type=album",//
    imgMain: "https://i.ytimg.com/vi/INiGRHRElmQ/maxresdefault.jpg",
    postText: "hochy v voity"
}
const profileReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.postText,//++
                likeCount: '25'
            }
            state.postsData.push(newPost); //++
            state.postText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.postText = action.newText;
            return state
        case DEL_POST:
            state.postsData = [];
            return state
        case EDIT_POST:
            state.postsData.forEach(element => console.log(element.id));
            return state

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