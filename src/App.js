import './App.css';

import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/Users.Container";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


const App = (props) => {

    return (

        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar state={props.state.siteBar}/>
            <div className="app-wrapper-content">
                <Route path='/login' render={() => <LoginPage/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer
                       />}/>
                <Route path='/profile/:userId' render={() => <ProfileContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>

    );
}

export default App;
