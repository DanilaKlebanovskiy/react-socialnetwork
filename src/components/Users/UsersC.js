import s from "./Users.module.css"
import * as axios from "axios";
import userPicture from "../../assets/users-picture.jpg"
import React from 'react'

class Users extends React.Component {
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
    render() {
        let count = this.props.totalUsersCount/this.props.pageSize
        let pages = []
        for (let i = 1; i <= count;i++){
                pages.push(i)
        }

        return <div>
            {pages.map(c => <span className={this.props.currentPage === c && s.selectedPage}  onClick={() => {this.onPageChenged(c)}}>{c}</span>) }
            {
                this.props.users.map(u => <div key={u.id}>
                    <div className={s.wrapper}>
                        <div>
                            <img src={u.photos.large === null ? userPicture : u.photos.large}/>
                            {u.followed ?
                                <button onClick={() => {
                                    this.props.unfollowUser(u.id)
                                }}>UnFollow</button> :
                                <button onClick={() => {
                                    this.props.followingUser(u.id)
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

}//







export default Users

