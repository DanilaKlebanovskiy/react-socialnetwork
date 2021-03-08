import s from "./Myposts.module.css"
import Posts from "./Posts/Posts"
const Myposts = () => {
    return <div>
        my posts
      <div>
            <textarea></textarea>
            <button>Addpost</button>
      </div>
        <div className={s.posts}>
        <Posts />
        <Posts />
    </div>
    </div>

}
export default Myposts
