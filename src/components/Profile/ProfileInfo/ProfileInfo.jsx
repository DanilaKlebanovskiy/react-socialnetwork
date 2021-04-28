import s from "./ProfileInfo.module.css"
import Loading from "../../Users/Loading";
import UserPicture from "../../../assets/users-picture.jpg"
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import Info from "./Info/Info";
import React, {useState} from 'react'


const ProfileInfo = (props) => {
    debugger
    if (!props.profile.profile) {
        return <Loading/>
    }
 /*   let [editmode, setEditMode] = useState(false)

    const activeEditMode = () => {
        setEditMode(true)
    }*/
    return (
        <div className={s.profileInfo}>
            <div className={s.descriptionBlock}>
                <div><img
                    src={props.profile.profile.photos.large || UserPicture}/>
                </div>
                {props.owner ? null : <button>sele</button> }
                {false ? <div>test</div> : <Info {...props} />}

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}


export default ProfileInfo

