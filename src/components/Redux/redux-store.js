import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./auth_reducer";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import siteBarReducer from "./siteBar_reducer";
import usersReducer from "./users_reducer";
import thunkMiddleware  from "redux-thunk";

let reducers = combineReducers({
    dialogsPage: dialogsReducer ,
    auth: authReducer ,
    profilePage: profileReducer,
    siteBar: siteBarReducer,
    userPage: usersReducer});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store
export default store;