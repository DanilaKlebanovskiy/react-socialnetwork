import s from "./Myposts.module.css"
import Posts from "./Posts/Posts"
import React, { Component } from 'react';


const Myposts = (props) => {

    let newMessage = props.posts
        .map(Message => <Posts message = {Message.message} likeCount = {Message.likeCount}/>
        );


    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    return <div className={s.postBlock}>
        my posts
      <div>
          <div className={s.postArea} ><textarea ref={newPostElement} placeholder="Len' eto igrushka diavola!(C)"></textarea></div>
          <div><button onClick={addPost}>Addpost</button></div>
      </div>
        <div className={s.posts}>
        {newMessage}
    </div>
    </div>

}
export default Myposts
