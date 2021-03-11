import s from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";



const Dialogs = (props) => {


    let newDialogsData = props.state.dialogsData.map
    (dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)



    let newMessageData = props.state.messageData.map
    (message => <Messages valueMessage={message.message}/>
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {newDialogsData}
            </div>
            <div className={s.messages}>
                {newMessageData}
            </div>
        </div>
    )
}

export default Dialogs