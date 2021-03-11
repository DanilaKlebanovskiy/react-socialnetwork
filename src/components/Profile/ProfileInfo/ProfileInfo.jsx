import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div className={s.mainPicture}>
                <img src={props.main}/>
            </div>
                <div className={s.descriptionBlock}>

                <div><img src={props.avatar} alt="avatar"/></div>

                <div>discript</div>
            </div>
        </div>

    )
}

export default ProfileInfo