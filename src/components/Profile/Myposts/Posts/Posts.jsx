import s from "./Posts.module.css"

const Posts = (props) => {
    debugger;
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
        props.addEditPost()
    }
    return <div className={s.item}>
        <img src="https://vplate.ru/images/article/orig/2019/04/harakteristika-plyusy-i-minusy-porody-shpic-1.jpg"/>
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
