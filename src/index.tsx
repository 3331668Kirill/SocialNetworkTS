import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType} from "./redux/store";
import {Provider} from "react-redux";


// let rerenderEntireTree = (state: StateType) => {

    ReactDOM.render(
       // <StoreContext.Provider value={'www'}>
        <Provider store={store}>
        <App
            post={store.getState().profilePage.posts}
             d={store.getState().profilePage.dialogs}
             m={store.getState().messagePage.messages}
             b={store.getState().messagePage.newMessageBody}
             newPostText={store.getState().profilePage.newPostText}
             dispatch={store.dispatch.bind(store)}

        />
        </Provider>
      //  </StoreContext.Provider>
            ,


        document.getElementById('root')
    );
// }


// rerenderEntireTree(store.getState())

// store.subscribe(()=>{
//     rerenderEntireTree(store.getState())
// })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
