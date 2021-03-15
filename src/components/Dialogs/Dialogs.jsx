import s from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React, { Component } from 'react';
import {updateNewMessageText} from "../Redux/state";


const Dialogs = (props) => {


    let newDialogsData = props.state.dialogsData.map
    (dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)



    let newMessageData = props.state.messageData.map
    (message => {
        if (message.id % 2 === 0){
            return <Message style ={"user"} valueMessage={message.message}/>
        } else {
            return <Message style ={"oponent"} valueMessage={message.message}/>
        }}
    )
    let newMessageElement = React.createRef()

    let addMessage = () => {
        let text = newMessageElement.current.value
        props.addMessageDialogs(text);
    }

    let onMessageDaialogsChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {newDialogsData}
            </div>
            <div className={s.messages}>
                {newMessageData}
                <textarea ref={newMessageElement} onChange={onMessageDaialogsChange}
                          value={props.state.newMessageText}/>
                <button onClick={addMessage}>SendMessage</button>
            </div>
        </div>
    )
}

export default Dialogs