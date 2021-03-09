import Myposts from "./Myposts/Myposts"
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return <div className={s.content}>
        <ProfileInfo/>
        <Myposts/>
    </div>
}
export default Profile
