import s from "./Posts.module.css"
const Posts = (props) => {
  return <div className={s.item}>
    <img src="https://vplate.ru/images/article/orig/2019/04/harakteristika-plyusy-i-minusy-porody-shpic-1.jpg" />
    {props.message}
    <div><span>like :  {props.likeCount}</span>
    </div>
  </div>

}
export default Posts
