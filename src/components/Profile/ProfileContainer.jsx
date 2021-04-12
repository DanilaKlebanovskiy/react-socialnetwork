import Profile from "./Profile";
import React from 'react'
import {connect} from "react-redux";
import {getProfileThunk, getStatusThunk, updateStatusThunk,} from "../Redux/profile_reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 16042
        }

        this.props.getProfileThunk(userId)

            this.props.getStatusThunk(userId);

    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus = {this.props.updateStatusThunk}/>
    }


}

const mapStateToProps = (state) => (
    {
        profile: state.profilePage,
        isAuth: state.auth.isAuth,
        status: state.profilePage.profileStatus
    })

export default compose(connect(mapStateToProps, {getProfileThunk,getStatusThunk,updateStatusThunk}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


