
import {connect} from "react-redux";
import {
    currentPageActionCreator,
    followActionCreator, setTotalCountsActonCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../Redux/users_reducer";
import Users from "./UsersC";

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
        },
        setCurrentPage: (page) =>{
        dispatch(currentPageActionCreator(page))
        },
        setTotalCounts: (totalCount) =>{
        dispatch(setTotalCountsActonCreator(totalCount))}
}
}

const mapStateToProps = (state) => {
    return {
        users : state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer