import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import SamuraiJsApp from "./App";
import store from "./components/Redux/redux-store";


/*setInterval(() => {
    store.dispatch({type: "FAKE"})
}, 1000)*/
const rerenderEntireTree = (state) => {

    ReactDOM.render(
        <SamuraiJsApp/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();