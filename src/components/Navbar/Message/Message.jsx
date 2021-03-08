import s from "./Message.module.css"
const Message = () => {
    return (
        <div className = {`${s.item} ${s.active}`}>
            <a>Messages</a>
        </div>
      )
}
export default Message;