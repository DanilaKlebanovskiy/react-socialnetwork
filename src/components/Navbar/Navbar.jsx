import Message from "./Message/Message";
import s from "./Navbar.module.css"
const Navbar = () => {
    return <nav className={s.nav}>
        <div className = {s.item}>
            <a href="/profile">Profile</a>
        </div>
        <Message />
        <div className = {s.item}>
            <a href="/news">News</a>
        </div>
        <div className = {s.item}>
            <a href="/music">Music</a>
        </div>
        <div className = {s.item}>
            <a href="/settings">Settings</a>
        </div>

    </nav>
}
export default Navbar;