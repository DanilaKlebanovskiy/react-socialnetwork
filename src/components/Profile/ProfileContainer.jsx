import Profile from "./Profile";
import React from 'react'
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfile} from "../Redux/profile_reducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId= this.props.match.params.userId
        debugger
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/"+userId).then(response => {
            this.props.setProfile(response.data)
        })
    }

    render() {

        return <Profile {...this.props} profile = {this.props.profile}/>
    }


}

const mapStateToProps = (state) =>(
    {profile: state.profilePage})

const withUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps,{setProfile})(withUrlDataContainerComponent)