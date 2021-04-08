import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MypostsContainer";
import {Redirect} from "react-router-dom";




const  Profile = (props) => {

    return <div className={s.content}>
            <ProfileInfo profile = {props.profile}/>
        <MypostsContainer store = {props.store}/>
    </div>
}
export default Profile
