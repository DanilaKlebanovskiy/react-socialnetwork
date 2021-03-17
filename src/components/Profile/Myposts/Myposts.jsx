import s from "./Myposts.module.css"
import Posts from "./Posts/Posts"
import React, {Component} from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../Redux/profile_reducer";


const Myposts = (props) => {

    let newMessage = props.postsData
        .map(Message => <Posts message={Message.message} likeCount={Message.likeCount}/>
        );


    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(onPostChangeActionCreator(text))
    };
    return <div className={s.postBlock}>
        my posts
        <div>
            <div className={s.postArea}><textarea onChange={onPostChange} ref={newPostElement}
                                                  value={props.newPostText}/></div>
            <div>
                <button onClick={addPost}>Addpost</button>
            </div>
        </div>
        <div className={s.posts}>
            {newMessage}
        </div>

    </div>

}
export default Myposts
