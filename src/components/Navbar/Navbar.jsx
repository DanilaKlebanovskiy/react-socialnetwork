import Message from "./Message/Message";
import s from "./Navbar.module.css"
const Navbar = () => {
    return <nav className={s.nav}>
        <div className = {s.item}>
            <a>Profile</a>
        </div>
        <Message />
        <div className = {s.active}>
            <a>News</a>
        </div>
        <div className = {s.item}>
            <a>Music</a>
        </div>

    </nav>
}
export default Navbar;