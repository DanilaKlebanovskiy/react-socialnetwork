import Profile from "./Profile";
import React from 'react'
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfile} from "../Redux/profile_reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setProfile(response.data)
        })
    }

    render() {

        return <Profile {...this.props} profile = {this.props.profile}/>
    }


}

const mapStateToProps = (state) =>(
    {profile: state.profilePage})

withRouter(ProfileContainer)


export default connect(mapStateToProps,{setProfile})(ProfileContainer)