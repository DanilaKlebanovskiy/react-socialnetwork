import s from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import React, {Component} from 'react';
import {Redirect} from "react-router-dom"
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utilits/validators";


const Dialogs = (props) => {

    if (!props.isAuth) return <Redirect to={"/login"}/>
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




    let AddNewMessage = (values) => {
        props.addMessage(values)
    }

    let onSubmit = (values) => {
        AddNewMessage(values.newMessageText)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {newDialogsData}
            </div>
            <div className={s.messages}>
                {newMessageData}
                <ReduxDialogsForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

let maxLength = maxLengthCreator(20)

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate = {[required,maxLength]} placeholder={"enter your text"} name={"newMessageText"} component={Textarea}/>
            </div>
            <div>
                <button>SendMessage</button>
            </div>
        </form>
    )
}
const ReduxDialogsForm = reduxForm({form: 'dialogs'})(DialogsForm)

export default Dialogs