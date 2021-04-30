import s from "./ProfileInfo.module.css"
import Loading from "../../Users/Loading";
import UserPicture from "../../../assets/users-picture.jpg"
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import Info from "./Info/Info";
import React, {useState} from 'react'
import ProfileForm from "./Info/ProfileInfoForm";


const ProfileInfo = (props) => {
    let [editmode, setEditMode] = useState(false)

    if (!props.profile.profile) {
        return <Loading/>
    }
    console.log(props.profile.profile.photos.large)
    const fileLoad = (e) => {
        if (e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }

    const activeEditMode = () => {
        setEditMode(true)

    }
    return (
        <div className={s.profileInfo}>
            <div className={s.descriptionBlock}>
                <div><img
                    src={props.profile.profile.photos.large || UserPicture}/>
                </div>
                {props.owner && <input type="file" onChange={fileLoad}/>}
                {editmode ? <ProfileForm {...props}/> : <Info {...props} activeEditMode = {activeEditMode}/>}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}


export default ProfileInfo

