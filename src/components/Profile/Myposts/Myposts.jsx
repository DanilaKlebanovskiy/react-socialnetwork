import s from "./Myposts.module.css"
import Posts from "./Posts/Posts"
import React, {Component} from 'react';

const Myposts = (props) => {

    let newMessage = props.postsData
        .map(Message => <Posts
            editPost={props.editPost}
            message={Message.message}
            likeCount={Message.likeCount}
            id={Message.id}/>
        );


    let newPostElement = React.createRef()

    let onaddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

    let ondelAllPost = () => {
        props.delAllPost()
    }
    return <div className={s.postBlock}>
        my posts
        <div>
            <div className={s.postArea}><textarea onChange={onPostChange} ref={newPostElement}
                                                  value={props.newPostText}/></div>
            <div>
                <button onClick={onaddPost}>Addpost</button>
            </div>
            <div>
                <button onClick={ondelAllPost}>Удалить все!</button>
            </div>
        </div>
        <div className={s.posts}>
            {newMessage}
        </div>

    </div>

}
export default Myposts
