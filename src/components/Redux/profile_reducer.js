const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
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


    export default profileReducer