import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {authThunk, logoutThunk} from "../Redux/auth_reducer";
import Loading from "../Users/Loading";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authThunk()
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

export default connect(mapStateToProps, {authThunk,logoutThunk})(HeaderContainer)