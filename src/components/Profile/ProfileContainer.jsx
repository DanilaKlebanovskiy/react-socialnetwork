import Profile from "./Profile";
import React from 'react'
import {connect} from "react-redux";
import {getProfileThunk, getStatusThunk, updateStatusThunk,} from "../Redux/profile_reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile () {
        let userId = this.props.match.params.userId
        console.log(userId)
        if (!userId) {
            userId = this.props.logUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfileThunk(userId)
        this.props.getStatusThunk(userId);
    }
    componentDidMount() {
        debugger
        this.refreshProfile ()
    }
 /*   componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile ()
        }
    }*/

    render() {
        console.log("render")
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatusThunk} owner ={!!this.props.match.params.userId}/>
    }


}

const mapStateToProps = (state) => {
    console.log("mstp")
    return ({
            profile: state.profilePage,
            isAuth: state.auth.isAuth,
            status: state.profilePage.profileStatus,
            logUserId: state.auth.id
        }
    )
}

export default compose(connect(mapStateToProps, {getProfileThunk, getStatusThunk, updateStatusThunk,}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


