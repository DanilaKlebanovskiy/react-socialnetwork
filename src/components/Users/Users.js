import s from "./Users.module.css";
import userPicture from "../../assets/users-picture.jpg";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/paginator";
import User from "./User";


const Users = (props) => {
    return <div>
        <Paginator pageSize = {props.pageSize} currentPage={props.currentPage} totalItemsCount={props.totalUsersCount} onPageChenged={props.onPageChenged}/>
        <div>
        {
            props.users.map(user => <User user={user}
                                          key={user.id}
                                          followingInProgress={props.followingInProgress}
                                          unfollowThunk = {props.unfollowThunk}
                                          followThunk = {props.followThunk}
                />
                )
        }
        </div>
        </div>
}

export default Users