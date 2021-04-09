import Profile from "./Profile";
import React from 'react'
import {connect} from "react-redux";
import {getProfileThunk,} from "../Redux/profile_reducer";
import {withRouter} from "react-router";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }

        this.props.getProfileThunk(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }


}

const mapStateToProps = (state) => (
    {
        profile: state.profilePage,
        isAuth: state.auth.isAuth
    })

export default compose(connect(mapStateToProps, {getProfileThunk}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

/*
let authRedirectComponent = withAuthRedirect(ProfileContainer)
const withUrlDataContainerComponent = withRouter(authRedirectComponent)


export default connect(mapStateToProps, {getProfileThunk})(withUrlDataContainerComponent)*/
