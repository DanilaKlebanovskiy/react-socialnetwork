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
    debugger
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header state={props.state.headerPage}/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               state = {props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile
                                state = {props.state.profilePage}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
