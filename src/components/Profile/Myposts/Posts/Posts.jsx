import s from "./Posts.module.css"
import UserPhoto from "../../../../assets/users-picture.jpg"

const Posts = (props) => {

    let onEdit = () => {
          let idPost = props.id
        props.editPost(idPost)
    }
    let onChangeEdit = (z) => {
        let text = z.target.value
        let idPost = props.id
        props.onChangeEdit(text, idPost)
    }
    let addEditPost = () => {
        let idPost = props.id
        props.addEditPost(idPost)
    }
    return <div className={s.item}>
        {props.profileImg ? <img src={props.profileImg}/> : <img src={UserPhoto}/>}
        {props.message}
        <div><span>like : {props.likeCount}</span>
        </div>

        {props.flagchange ? <div>
                <textarea onChange={onChangeEdit} value={props.newEditText}>edeed</textarea>
                <button onClick={addEditPost}>Dobavit</button>
            </div>
            : <button onClick={onEdit}>Редактировать</button>}

    </div>

}
export default Posts
