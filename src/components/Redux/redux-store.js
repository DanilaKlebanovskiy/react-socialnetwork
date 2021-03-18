import {combineReducers, createStore} from "redux";
import headerReducer from "./header_reducer";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import siteBarReducer from "./siteBar_reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer ,
    headerPage: headerReducer ,
    profilePage: profileReducer,
    siteBar: siteBarReducer });

let store = createStore(reducers);

export default store;