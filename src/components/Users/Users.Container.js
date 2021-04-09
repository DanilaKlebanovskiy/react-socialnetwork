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




const mapStateToProps = (state) => {
    return {
        followingInProgress: state.userPage.followingInProgress,
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,

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