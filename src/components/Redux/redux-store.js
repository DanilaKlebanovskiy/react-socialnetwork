import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import authReducer from "./auth_reducer";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import siteBarReducer from "./siteBar_reducer";
import usersReducer from "./users_reducer";
import thunkMiddleware  from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app_reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer ,
    auth: authReducer ,
    profilePage: profileReducer,
    siteBar: siteBarReducer,
    userPage: usersReducer,
    app: appReducer,
    form: formReducer});
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)));


/*
window.store = store*/
export default store;