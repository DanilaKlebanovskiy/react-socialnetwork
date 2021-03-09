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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name = "Lera" id = "1"/>
                <DialogsItem name = "Pesya" id = "2"/>
                <DialogsItem name = "Sasha" id = "3"/>
                <DialogsItem name = "Dima" id = "4"/>
                <DialogsItem name = "Tema" id = "5"/>
                <DialogsItem name = "Tarantul" id = "6"/>
                <DialogsItem name = "SinDiadiToli" id = "7"/>
            </div>
            <div className={s.messages}>
                <Messages valueMessage = "Ti bukashka"/>
                <Messages valueMessage = "Lublu Lery"/>
                <Messages valueMessage = "Pesia Juchok"/>

            </div>
        </div>
    )
}

export default Dialogs