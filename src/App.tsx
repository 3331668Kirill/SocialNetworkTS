import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import {PropsDialogItem} from "./components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {PropsPostType} from "./components/Profile/MyPosts/Post/Post";
import {ActionType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import UsersConteiner from "./components/Users/UsersConteiner";
import {AppStateType} from "./redux/redux-store";
import ProfileContainer from "./components/Profile/profileContainer";
import {ProfileServerType} from "./redux/profile-reducer";



type PropsAppType = {
    post:Array<PropsPostType>
    d:Array<PropsDialogItem>
    profile:ProfileServerType
    m:Array<{ id: number, message: string }>
    b: string
    dispatch:(action:ActionType)=>void
    newPostText: string
    store:AppStateType
    }

function App(props:PropsAppType) {

    console.log(props.store.profilePage.profile)
    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
            <Navbar/>
            <div className='App_content'>
                <Route path='/messages' render={
                    ()=><DialogsContainer
                        b={props.b}
                        // dispatch={props.dispatch}
                        d={props.d}
                        m={props.m}/>} />
                <Route path='/profile' render={
                    ()=><ProfileContainer
                    post={props.post}
                    profile={props.profile}
                    //dispatch={props.dispatch}
                    newPostText={props.newPostText}/>} />
                <Route path={'/users'} render={()=> <UsersConteiner users={props.store.usersPage.users}
                                                                    totalCount={props.store.usersPage.totalCount}
                                                                    isFetching={props.store.usersPage.isFetching}
                                                                    currentPage={props.store.usersPage.currentPage}
                                                                    pageSize={props.store.usersPage.pageSize}/>} />

            </div>
        </div>
         </BrowserRouter>
    );
}



export default App;
