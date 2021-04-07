import Profile from "./Profile";
import React from 'react'
import {connect} from "react-redux";
import {getProfileThunk, } from "../Redux/profile_reducer";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfileThunk(this.props.match.params.userId)
    }

    render() {

        return <Profile {...this.props} profile = {this.props.profile}/>
    }


}

const mapStateToProps = (state) =>(
    {profile: state.profilePage})

const withUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps,{getProfileThunk})(withUrlDataContainerComponent)