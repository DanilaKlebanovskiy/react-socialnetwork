import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div className={s.mainPicture}>
                <img src={props.main}/>
            </div>
                <div className={s.descriptionBlock}>

                <div><img src={props.avatar} alt="avatar"/></div>

                <div>
                    <div>Danila Klebanovskiy</div>
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