import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let imgHeader = "https://2.allegroimg.com/s1024/031c65/9b72fbd6480892337b3bad6e5802"
let imgAvatar = "https://vraki.net/sites/default/files/inline/images/30_55.jpg"
let imgMain = "https://i.ytimg.com/vi/INiGRHRElmQ/maxresdefault.jpg"
let dialogsData = [
    {id: 1, name: "Lera"},
    {id: 2, name: "Pesya"},
    {id: 3, name: "Sasha"},
    {id: 4, name: "Dima"},
    {id: 5, name: "Tema"},
    {id: 6, name: "SinDiadiToli"},
]

let messageData = [
    {id: 1, message: "Ti bukaska"},
    {id: 2, message: "Privet Dimon"},
    {id: 3, message: "Na zavod bistro"},
    {id: 4, message: "Dima"},
    {id: 5, message: "Tema"}
]

let postsData = [
    {id: 1, message: 'ti pesik', likeCount: '15'},
    {id: 2, message: '9 pokushal', likeCount: '20'},
    {id: 3, message: '4issti vilkoy', likeCount: '10'},
    {id: 4, message: '4issti loshlkoi', likeCount: '30'}
]




ReactDOM.render(
  <React.StrictMode>
    <App picture = {imgHeader}
         dialogs = {dialogsData}
         message={messageData}
         posts ={postsData}
         avatar ={imgAvatar}
         mainImg ={imgMain}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
