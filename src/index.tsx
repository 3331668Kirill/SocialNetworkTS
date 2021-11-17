import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType} from "./redux/store";


let rerenderEntireTree = (state: StateType) => {

    ReactDOM.render(
        <App post={state.profilePage.posts}
             d={state.profilePage.dialogs}
             m={state.messagePage.messages}
             b={state.messagePage.newMessageBody}
             newPostText={state.profilePage.newPostText}
             dispatch={store.dispatch.bind(store)}

        />,

        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

store.subscribe(()=>{
    rerenderEntireTree(store.getState())
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
