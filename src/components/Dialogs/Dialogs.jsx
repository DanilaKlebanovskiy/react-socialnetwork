import s from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React, {Component} from 'react';

const Dialogs = (props) => {
    debugger;
    let newDialogsData = props.dialogsData.map
    (dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let newMessageData = props.messageData.map
    (message => {
            if (message.id % 2 === 0) {
                return <Message style={"user"} valueMessage={message.message}/>
            } else {
                return <Message style={"oponent"} valueMessage={message.message}/>
            }
        }
    )
    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageDaialogsChange = (z) => {
        console.log(z)
        let text = z.target.value
        props.onMessageDaialogsChange(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {newDialogsData}
            </div>
            <div className={s.messages}>
                {newMessageData}
                <textarea ref={newMessageElement} onChange={onMessageDaialogsChange}
                          value={props.newMessageText}/>
                <button onClick={addMessage}>SendMessage</button>
            </div>
        </div>
    )
}

export default Dialogs