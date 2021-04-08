import {addMessageActionCreator, onMessageDaialogsChangeActionCreator} from "../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";


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
        newMessageText: state.dialogsPage.newMessageText,

    }
}

let authRedirectComponent = withAuthRedirect(Dialogs)




const DiaLogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)

export default DiaLogsContainer