import Users from "./Users";
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../Redux/users_reducer";

const mapDispatchToProps = (dispatch) => {
    return {
        followingUser: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollowUser: (userId) => {
        dispatch(unfollowActionCreator(userId))
     },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }

}
}

const mapStateToProps = (state) => {
    return {
        users : state.userPage.users
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer