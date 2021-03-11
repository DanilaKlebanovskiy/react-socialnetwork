import s from "./Myposts.module.css"
import Posts from "./Posts/Posts"
const Myposts = (props) => {

    let newMessage = props.posts
        .map(Message => <Posts message = {Message.message} likeCount = {Message.likeCount}/>
        );
    return <div className={s.postBlock}>
        my posts
      <div>
          <div className={s.area}><textarea></textarea></div>
          <div><button>Addpost</button></div>
      </div>
        <div className={s.posts}>
        {newMessage}
    </div>
    </div>

}
export default Myposts
