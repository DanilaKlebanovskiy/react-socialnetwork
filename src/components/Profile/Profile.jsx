import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MypostsContainer";
import {Redirect} from "react-router-dom";
import React from "react";
import {updateStatusThunk} from "../Redux/profile_reducer";




const  Profile = (props) => {

    return <div className={s.content}>
            <ProfileInfo profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus} owner ={props.owner} savePhoto = {props.savePhoto}/>
        <MypostsContainer />
    </div>
}
export default Profile
