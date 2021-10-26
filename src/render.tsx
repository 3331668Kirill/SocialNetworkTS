import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, StateType, updateNewPostText} from "./redux/state";


export let rerenderEntireTree = (state: StateType) => {

    ReactDOM.render(
        <App post={state.profilePage.posts}
             d={state.profilePage.dialogs}
             m={state.messagePage.messages}
             newPostText={state.profilePage.newPostText}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
        />,

        document.getElementById('root')
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
