import s from "./Posts.module.css"
const Posts = (props) => {
  let onEdit = () =>{
    let idPost = props.id
    props.editPost(idPost)
  }
  return <div className={s.item}>
    <img src="https://vplate.ru/images/article/orig/2019/04/harakteristika-plyusy-i-minusy-porody-shpic-1.jpg" />
    {props.message}
    <div><span>like :  {props.likeCount}</span>
    </div>
    <button onClick={onEdit}>Редактировать</button>
  </div>

}
export default Posts
