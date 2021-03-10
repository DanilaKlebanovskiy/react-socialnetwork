import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Messages = (props) => {
    return (
        <div className={s.message}>
            {props.valueMessage}
        </div>
    )
}

const DialogsItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}


const Dialogs = () => {
    let DialogsData = [
        {id: 1, name: "Lera"},
        {id: 2, name: "Pesya"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Dima"},
        {id: 5, name: "Tema"},
        {id: 6, name: "SinDiadiToli"},
    ]

    let newDialogsData = DialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>
    )

    let MessageData = [
        {id: 1, message: "Ti bukaska"},
        {id: 2, message: "Privet Dimon"},
        {id: 3, message: "Na zavod bistro"},
        {id: 4, message: "Dima"},
        {id: 5, message: "Tema"},
    ]

    let newMessageData = MessageData.map(message => <Messages valueMessage={message.message}/>
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