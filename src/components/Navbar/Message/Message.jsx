import s from "./Message.module.css"
const Message = () => {
    return (
        <div className = {`${s.item} ${s.active}`}>
            <a href="/dialogs">Messages</a>
        </div>
      )
}
export default Message;