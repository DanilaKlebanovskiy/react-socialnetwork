import './App.css';
import store from "./components/Redux/redux-store";
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/Users.Container";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React from 'react'
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./components/Redux/app_reducer";
import Loading from "./components/Users/Loading";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import {Suspense} from "./Hoc/Suspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


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
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/dialogs'
                           render={Suspense(DialogsContainer)}
                           />
                    <Route path='/profile/:userId?' render={Suspense(ProfileContainer)}/>
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

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App)

const SamuraiJsApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/> {/*state={state}  store={store}*/}
        </Provider>
    </BrowserRouter>

}

export default SamuraiJsApp