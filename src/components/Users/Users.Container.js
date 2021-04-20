import {connect} from "react-redux";
import {

    followThunk, getUsersThunk,
    setCurrentPage,
    setFetching,
    setTotalCounts, unfollowThunk
} from "../Redux/users_reducer";

import React from 'react'
import Users from "./Users";
import Loading from "./Loading";
import {
    getCurrentPage,
    getFollowingInProgress,
    getisFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersSuper
} from "../Redux/users_selectors";


class UsersAPI extends React.Component {
    constructor() {
        super()
        this.onPageChenged = (c) => {
            this.props.getUsers(c, this.props.pageSize)

        }
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    render() {
        console.log("render")
        return <>
            {this.props.isFetching ? <Loading/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                         pageSize={this.props.pageSize}
                                                         currentPage={this.props.currentPage}
                                                         onPageChenged={this.onPageChenged}
                                                         users={this.props.users}
                                                         unfollowThunk={this.props.unfollowThunk}
                                                         followThunk={this.props.followThunk}
                                                         followingInProgress = {this.props.followingInProgress}

            />}

        </>

    }


}//




/*const mapStateToProps = (state) => {
    return {
        followingInProgress: state.userPage.followingInProgress,
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,

    }
}*/

const mapStateToProps = (state) => {
    console.log("mstp")
    return {
        followingInProgress: getFollowingInProgress(state),
      /*  users: getUsers(state),*/
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getisFetching(state),

    }
}


const UsersContainer = connect(mapStateToProps,
    {

        setCurrentPage,
        setTotalCounts,
        setFetching,
        getUsers : getUsersThunk,
        unfollowThunk,
        followThunk
    })(UsersAPI)

export default UsersContainer