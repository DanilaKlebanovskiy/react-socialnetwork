import s from "./Users.module.css"
const Users = (props) => {
    return (
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img />
                </div>
                <div>
                    <button>Follow</button>
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div{u.status}></div>
                </span>

            </span>
        </div>)
    )
}

export default Users