import {connect} from "react-redux";
import {

    followingUser,
    setCurrentPage,
    setFetching,
    setTotalCounts,
    setUsers,
    unfollowUser
} from "../Redux/users_reducer";
import * as axios from "axios";
import React from 'react'
import Users from "./Users";
import Loading from "./Loading";


class UsersAPI extends React.Component {
    constructor() {
        super()
        this.onPageChenged = (c) => {
            this.props.setCurrentPage(c)
            this.props.setFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${c}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setFetching(false)

            })

        }
    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

                this.props.setUsers(response.data.items)
                this.props.setTotalCounts(response.data.totalCount)
                this.props.setFetching(false)
            })
        }
    }

    render() {
        return <>
            {this.props.isFetching ? <Loading/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChenged={this.onPageChenged}
                   users={this.props.users}
                   unfollowUser={this.props.unfollowUser}
                   followingUser={this.props.followingUser}

            />
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
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
    }
}


const UsersContainer = connect(mapStateToProps,
    {
        followingUser,
        unfollowUser,
        setUsers,
        setCurrentPage,
        setTotalCounts,
        setFetching
    })(UsersAPI)

export default UsersContainer