import s from "./Message.module.css"
import {NavLink} from "react-router-dom";


const Message = () => {
    return (
        <div className = {`${s.item} ${s.active}`}>
            <NavLink to="/dialogs">Messages</NavLink>
        </div>
      )
}
export default Message;