const ADD_MESSAGE_DIALOGS = "ADD-MESSAGE-DIALOGS";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";


let initialState = {
    dialogsData: [
        {id: 1, name: "Lera"},
        {id: 2, name: "Pesya"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Dima"},
        {id: 5, name: "Tema"},
        {id: 6, name: "SinDiadiToli"},
    ],
    messageData: [
        {id: 1, message: "Ti bukaska"},
        {id: 2, message: "Privet Dimon"},
        {id: 3, message: "Na zavod bistro"},
        {id: 4, message: "Dima"},
        {id: 5, message: "Tema"}
    ],
    newMessageText: "Hi bukaska",
}


const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_DIALOGS :
            let newMessage = {
                id: Math.floor(Math.random() * 10),
                message: state.newMessageText
            }
            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
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