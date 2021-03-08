import Myposts from "./Myposts/Myposts"
import s from "./Profile.module.css"
const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://im0-tub-ru.yandex.net/i?id=6d00ababc6a4738e991c77f3c49495e4&n=13" />
        </div>
        <div>
            ava + discript
      <img src="https://d.haberciniz.biz/gallery/10145_40.jpg" />
        </div>
        <Myposts />
    </div>
}
export default Profile
