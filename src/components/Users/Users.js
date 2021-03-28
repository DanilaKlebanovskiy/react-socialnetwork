import s from "./Users.module.css"
import * as axios from "axios";
import userPicture from "../../assets/users-picture.jpg"

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                return props.setUsers(response.data.items)
            })
        }
    }
    return <div>

        <button onClick={getUsers}>Get User</button>
        {
            props.users.map(u => <div key={u.id}>
                <div className={s.wrapper}>
                    <div>
                        <img src={u.photos.large === null ? userPicture : u.photos.large}/>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollowUser(u.id)
                            }}>UnFollow</button> :
                            <button onClick={() => {
                                props.followingUser(u.id)
                            }}>Follow </button>}

                    </div>
                    <div className={s.grid}>
                        <div>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </div>
                        <div>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>
            </div>)}
    </div>

}
export default Users
