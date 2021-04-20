import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./components/Redux/redux-store";
import {Provider} from "react-redux";

setInterval(() => {
    store.dispatch({type: "FAKE"})
}, 1000)
const rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App state={state}/> {/*state={state}  store={store}*/}
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
