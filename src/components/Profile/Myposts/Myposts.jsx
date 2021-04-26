import s from "./Myposts.module.css"
import Posts from "./Posts/Posts"
import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {addPostActionCreator} from "../../Redux/profile_reducer";
import {maxLengthCreator, required} from "../../../utilits/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";
import Loading from "../../Users/Loading";

const Myposts = (props) => {
   if (!props.profile.profile) {
        return <Loading/>
    }
    console.log("render23")
    let newMessage = [...props.postsData].reverse()
        .map(Message => <Posts
            addEditPost = {props.addEditPost}
            onChangeEdit={props.onChangeEdit}
            editPost={props.editPost}
            message={Message.message}
            likeCount={Message.likeCount}
            id={Message.id}
            flagchange={Message.flagchange}
            newEditText={Message.editpostText}
            profileImg={props.profile.profile.photos.large}/>
        );


    console.log(newMessage)

    const ondelAllPost = () => {
        props.delAllPost()
    }
    const onSubmit = (values) => {
        console.log(values)
        props.addPost(values.newPostText)
    }
    return <div className={s.postBlock}>
        my posts
        <div>
            <ReduxPostForm onSubmit={onSubmit}/>
            <div>
                <button onClick={ondelAllPost}>Удалить все!</button>
            </div>
        </div>
        <div className={s.posts}>
            {newMessage}
        </div>

    </div>

}

let maxLength = maxLengthCreator(15)

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate = {[required,maxLength]} placeholder={"enter your text"} name={"newPostText"} component={Textarea}/>
            </div>
            <div>
                <button>Addpost</button>
            </div>
        </form>


    )
}
const ReduxPostForm = reduxForm({form: 'posts'})(PostForm)

export default Myposts
