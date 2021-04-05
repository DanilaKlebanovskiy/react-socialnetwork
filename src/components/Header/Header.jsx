import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import userPicture from "../../assets/users-picture.jpg"


const Header = (props) => {
    return <header className={s.header}>
        <img  src={"https://storage.vsemayki.ru/images/0/1/1627/1627355/previews/people_101_flag_auto_front_white_500.jpg"} alt="power"/>
        <div className={s.loginBlock}>

            {props.isAuth ? <div>{props.login}<img className={s.test} src={props.img === null ? userPicture : props.img} /> </div>: <NavLink to = {"/login/"}>Login</NavLink>}
        </div>
    </header>
}

export default Header;
