import s from "./Friends.module.css"
const Friends = (props) =>{
    return(
        <div className={s.onefriend}><img  src={props.img}/>
            {props.name}</div>
    )
}
export default Friends