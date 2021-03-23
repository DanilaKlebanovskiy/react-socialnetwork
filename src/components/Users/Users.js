import s from "./Users.module.css"

const Users = (props) => {
    if (props.users.length === 0)
    props.setUsers([
        {
            id: 1,
            followed: false,
            fullName: "Lera",
            status: "Ia ochen ystal",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: 2,
            followed: true,
            fullName: "Vasia",
            status: "Idy na zavod",
            location: {city: "Minsk", country: "Belarus"}
        },
        {id: 3, followed: true, fullName: "Dima", status: "Bog IT", location: {city: "Tula", country: "Russia"}},
        {
            id: 4,
            followed: false,
            fullName: "Tema",
            status: "Lublu zjizn",
            location: {city: "Vorkuta", country: "Russia"}
        },

    ],)
    return props.users.map(u => <div key={u.id}>
        <div className={s.wrapper}>
            <div>
                <img src="https://im0-tub-ru.yandex.net/i?id=bd8a2b090e8315c8a084d183b1245558&n=13"/>
                {u.followed ?
                <button onClick={() => {props.unfollowUser(u.id)}}>UnFollow</button> :
                <button onClick={()=> {props.followingUser(u.id)}}>Follow </button>}

            </div>
            <div className={s.grid}>
                <div>
                    <div>
                        {u.fullName}
                    </div>
                    <div>
                        {u.status}
                    </div>
                </div>
                <div>
                    <div >{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
            </div>
        </div>
    </div>)
}
export default Users
