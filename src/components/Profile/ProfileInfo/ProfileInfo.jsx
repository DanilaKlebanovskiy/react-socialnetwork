import s from "./ProfileInfo.module.css"
import Loading from "../../Users/Loading";

const ProfileInfo = (props) => {
    if (!props.profile.profile) {
        return <Loading/>
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.mainPicture}>
                <img src={props.profile.imgMain}/>
            </div>
            <div className={s.descriptionBlock}>

                <div><img src={props.profile.profile.photos.large}/></div>

                <div>
                    <div>{props.profile.profile.fullName}</div>
                    <div>Обо мне: {props.profile.profile.aboutMe}</div>
                    <ul>
                        <li>Date of Birth: 18 april</li>
                        <li>City: Saint-Petersburg</li>
                        <li>Education: SpbGmty</li>
                        <li>Web Site: https://sss.com</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo