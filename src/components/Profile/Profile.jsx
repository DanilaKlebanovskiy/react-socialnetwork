import Myposts from "./Myposts/Myposts"
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return <div className={s.content}>
        <ProfileInfo avatar = {props.avatar}
                     main = {props.main}/>
        <Myposts posts = {props.posts}/>
    </div>
}
export default Profile
