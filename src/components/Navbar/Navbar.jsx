import Message from "./Message/Message";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return <nav className={s.nav}>
        <div className = {s.item}>
            <NavLink to="/profile" activeClassName={s.seld}>Profile</NavLink>
        </div>
        <Message />
        <div className = {s.item}>
            <NavLink to="/news" activeClassName={s.seld}>News</NavLink>
        </div>
        <div className = {s.item}>
            <NavLink to="/music" activeClassName={s.seld}>Music</NavLink>
        </div>
        <div className = {s.item}>
            <NavLink to="/settings" activeClassName={s.seld}>Settings</NavLink>
        </div>

    </nav>
}
export default Navbar;