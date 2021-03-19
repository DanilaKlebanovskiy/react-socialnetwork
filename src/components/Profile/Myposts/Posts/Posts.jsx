import s from "./Posts.module.css"
const Posts = (props) => {
  let testFunck = () =>{
    alert("ss")
  }
  return <div className={s.item}>
    <img src="https://vplate.ru/images/article/orig/2019/04/harakteristika-plyusy-i-minusy-porody-shpic-1.jpg" />
    {props.message}
    <div><span>like :  {props.likeCount}</span>
    </div>
    <button onClick={testFunck}>Удалить</button>
  </div>

}
export default Posts
