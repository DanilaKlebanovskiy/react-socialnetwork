import s from "./Header.module.css"

const Header = (props) => {
    return <header className={s.header}>
        <img src={props.picture} alt="power"/>
    </header>
}

export default Header;
