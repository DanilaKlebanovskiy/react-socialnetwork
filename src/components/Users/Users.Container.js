import {connect} from "react-redux";
import {

    followingUser,
    setCurrentPage,
    setFetching,
    setTotalCounts,
    setUsers, toggleFollowingProgress,
    unfollowUser
} from "../Redux/users_reducer";

import React from 'react'
import Users from "./Users";
import Loading from "./Loading";
import {getUsers, getUsers2} from "../../API/api";


class UsersAPI extends React.Component {
    constructor() {
        super()
        this.onPageChenged = (c) => {
            this.props.setCurrentPage(c)
            this.props.setFetching(true)
            debugger
            getUsers2(c, this.props.pageSize).then(data => {

                this.props.setUsers(data.items)
                this.props.setFetching(false)
            })
        }
    }

    componentDidMount() {
        if (this.props.users.length === 0) { // this.props.currentPage this.props.pageSize
            this.props.setFetching(true)
            getUsers(this.props.currentPage, this.props.pageSize).then(data => {

                this.props.setUsers(data.items)
                this.props.setTotalCounts(data.totalCount)
                this.props.setFetching(false)
            })
        }
    }

    render() {
        return <>
            {this.props.isFetching ? <Loading/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                         pageSize={this.props.pageSize}
                                                         currentPage={this.props.currentPage}
                                                         onPageChenged={this.onPageChenged}
                                                         users={this.props.users}
                                                         unfollowUser={this.props.unfollowUser}
                                                         followingUser={this.props.followingUser}
                                                         toggleFollowingProgress = {this.props.toggleFollowingProgress}
                                                         followingInProgress = {this.props.followingInProgress}

            />}

        </>

    }


}//


/*const mapDispatchToProps = (dispatch) => {
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
        setCurrentPage: (page) => {
            dispatch(currentPageActionCreator(page))
        },
        setTotalCounts: (totalCount) => {
            dispatch(setTotalCountsActonCreator(totalCount))
        },
        setFetching: (isLoading) => {
            dispatch(fetchingActionCreator(isLoading))
        }
    }
}*/

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
        followingUser,
        unfollowUser,
        setUsers,
        setCurrentPage,
        setTotalCounts,
        setFetching,
        toggleFollowingProgress
    })(UsersAPI)

export default UsersContainer