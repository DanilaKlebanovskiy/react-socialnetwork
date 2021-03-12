import s from "./Messages.module.css";


const Message = (props) => {
    return (
        <div className={`${s.message} 
        ${props.style === 'user'?s.user:s.opponent}`}>
            {props.valueMessage}
        </div>
    )
}

export default Message