import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";


const App = (props) => {

    return (

            <div className="app-wrapper">
                <Header state={props.state.headerPage}/>
                <Navbar state={props.state.siteBar}/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               state = {props.state.dialogsPage}
                               addMessageDialogs={props.addMessageDialogs}/>}/>
                    <Route path='/profile' render={() => <Profile
                                state = {props.state.profilePage}
                                addPost = {props.addPost}
                                updateNewPostText = {props.updateNewPostText}/>}
                                />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>

    );
}

export default App;
