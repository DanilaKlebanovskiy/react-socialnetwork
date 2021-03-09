import s from "./Myposts.module.css"
import Posts from "./Posts/Posts"
const Myposts = () => {
    return <div className={s.postBlock}>
        my posts
      <div>
          <div className={s.area}><textarea></textarea></div>
          <div><button>Addpost</button></div>
      </div>
        <div className={s.posts}>
        <Posts message = 'ti pesik' likeCount = "15"/>
        <Posts message = 'ne ho4y na zavod' likeCount ="20" />
    </div>
    </div>

}
export default Myposts
