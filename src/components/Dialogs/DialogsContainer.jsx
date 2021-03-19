import {addMessageActionCreator, onMessageDaialogsChangeActionCreator} from "../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../store-context";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let addMessage = () => {
                let action = addMessageActionCreator()
                store.dispatch(action);
            }

            let onMessageDaialogsChange = (text) => {
                let action = onMessageDaialogsChangeActionCreator(text)
                store.dispatch(action);
            }


            return <Dialogs addMessage={addMessage}
                            onMessageDaialogsChange={onMessageDaialogsChange}
                            dialogsData={store.getState().dialogsPage.dialogsData}
                            messageData={store.getState().dialogsPage.messageData}
                            newMessageText={store.getState().dialogsPage.newMessageText}/>
        }
        }
    </StoreContext.Consumer>

}
export default DialogsContainer