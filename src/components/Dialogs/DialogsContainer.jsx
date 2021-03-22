import {addMessageActionCreator, onMessageDaialogsChangeActionCreator} from "../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageDaialogsChange: (text) => {
            dispatch(onMessageDaialogsChangeActionCreator(text));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const DiaLogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DiaLogsContainer