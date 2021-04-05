import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";

import Header from "./Header";
import {setAuthUserData, setLoading, setUserImage} from "../Redux/auth_reducer";
import Loading from "../Users/Loading";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setLoading(true)
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true}).then(response => {
            this.props.setLoading(false)
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data)
                axios.get("https://social-network.samuraijs.com/api/1.0/profile/2").then(response => {
                    this.props.setUserImage(response.data.photos.small)

                })
            }

        })
    }

    render() {
        return <>
        {this.props.isFetching ? <Loading/> : null}
        <Header {...this.props}/>
        </>
    }
}

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        img: state.auth.img,
        isFetching: state.auth.isFetching
    })

export default connect(mapStateToProps, {setAuthUserData , setUserImage, setLoading})(HeaderContainer)