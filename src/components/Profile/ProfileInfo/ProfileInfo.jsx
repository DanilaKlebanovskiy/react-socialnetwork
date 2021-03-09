import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img src="https://i.ytimg.com/vi/INiGRHRElmQ/maxresdefault.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + discript
            </div>
        </div>

    )
}

export default ProfileInfo