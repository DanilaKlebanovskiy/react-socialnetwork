const ADD_MESSAGE_DIALOGS = "ADD-MESSAGE-DIALOGS";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
    if (action.type === ADD_MESSAGE_DIALOGS) {
        let newMessage = {
            id: Math.floor(Math.random() * 10),
            message: state.newMessageText
        }
        state.messageData.push(newMessage)
        state.newMessageText = '';
        return state
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText;
        return state
    }
    return state
}
export let addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE_DIALOGS
    }

}


export let onMessageDaialogsChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsReducer