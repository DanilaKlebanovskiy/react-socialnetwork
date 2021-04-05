import s from "./Users.module.css";
import userPicture from "../../assets/users-picture.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {deleteUnfollow, postFollow} from "../../API/api";

const Users = (props) => {
    {
        let count = props.totalUsersCount / props.pageSize
        let pages = []
        for (let i = 1; i <= count; i++) {
            pages.push(i)
        }

        return <div>
            {pages.map(c => <span className={props.currentPage === c && s.selectedPage} onClick={() => {
                props.onPageChenged(c)
            }}>{c}</span>)}

            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.wrapper}>
                        <div>
                            <NavLink to={"/profile/" + u.id}><img
                                src={u.photos.large === null ? userPicture : u.photos.large}/></NavLink>
                            {u.followed ?
                                <button onClick={() => {
                                    deleteUnfollow(u.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollowUser(u.id)

                                            }
                                        })
                                }}>UnFollow</button> :
                                <button onClick={() => {
                                    postFollow(u.id).then(data => {
                                            debugger
                                            if (data.resultCode === 0) {
                                                props.followingUser(u.id)
                                            }
                                        })
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
}
export default Users