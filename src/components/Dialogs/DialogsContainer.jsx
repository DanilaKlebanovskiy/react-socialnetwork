
import {addMessageActionCreator, onMessageDaialogsChangeActionCreator} from "../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState()
    let addMessage = () => {
        let action = addMessageActionCreator()
        props.store.dispatch(action);
    }

    let onMessageDaialogsChange = (text) => {
        let action = onMessageDaialogsChangeActionCreator(text)
        props.store.dispatch(action);
    }
    return <Dialogs addMessage={addMessage}
                    onMessageDaialogsChange={onMessageDaialogsChange}
                    dialogsData={state.dialogsPage.dialogsData}
                    messageData={state.dialogsPage.messageData}
                    newMessageText={state.dialogsPage.newMessageText}
    />
}

export default DialogsContainer