import s from "./Myposts.module.css"
import Posts from "./Posts/Posts"
const Myposts = () => {
    let MessageData = [
        {id: 1, message: 'ti pesik', likeCount: '15'},
        {id: 2, message: '9 pokushal', likeCount: '20'},
        {id: 3, message: '4issti vilkoy', likeCount: '10'},
        {id: 4, message: '4issti loshlkoi', likeCount: '30'}
    ]
    let newMessage = MessageData
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
