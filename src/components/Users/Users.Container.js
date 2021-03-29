
import {connect} from "react-redux";
import {
    currentPageActionCreator,
    followActionCreator, setTotalCountsActonCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../Redux/users_reducer";

import * as axios from "axios";
import React from 'react'
import Users from "./Users";



class UsersAPI extends React.Component {
    constructor() {

        super();
    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCounts(response.data.totalCount)
            })
        }
    }
    onPageChenged (c) {
        this.props.setCurrentPage(c)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${c}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)

        })

    }
    render(){
        return <Users totalUsersCount={this.props.totalUsersCount}
               pageSize ={this.props.pageSize}
               currentPage = {this.props.currentPage}
               onPageChenged = {this.onPageChenged}
               users = {this.props.users}
               unfollowUser = {this.props.unfollowUser}
               followingUser = {this.props.followingUser}
        />

    }


}//


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


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer