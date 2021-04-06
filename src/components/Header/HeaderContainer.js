import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";

import Header from "./Header";
import {setAuthUserData, setLoading, setUserImage} from "../Redux/auth_reducer";
import Loading from "../Users/Loading";
import {headerApi} from "../../API/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setLoading(true)
        headerApi.getLogin().then(data => {
            this.props.setLoading(false)
            if (data.resultCode === 0) {
                this.props.setAuthUserData(data.data)
                headerApi.getPictureLogin().then(data => {
                    this.props.setUserImage(data.photos.small)

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