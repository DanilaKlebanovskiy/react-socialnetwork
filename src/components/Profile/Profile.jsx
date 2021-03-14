import Myposts from "./Myposts/Myposts"
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return <div className={s.content}>
        <ProfileInfo avatar = {props.state.imgAvatar}
                     main = {props.state.imgMain}/>
        <Myposts posts = {props.state.postsData} addPost={props.addPost} newPostText = {props.state.postText} updateNewPostText={props.updateNewPostText}/>
    </div>
}
export default Profile
