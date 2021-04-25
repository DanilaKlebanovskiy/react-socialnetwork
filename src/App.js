import './App.css';

import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/Users.Container";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React from 'react'
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./components/Redux/app_reducer";
import Loading from "./components/Users/Loading";
import store from "./components/Redux/redux-store";


class App extends React.Component {


    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Loading/>
        }
        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar state={this.props.state.siteBar}/>
                <div className="app-wrapper-content">
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                           />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>

        );

    }


}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App)
