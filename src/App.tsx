import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import Dialogs, {PropsDialogItem} from "./components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {PropsPostType} from "./components/Profile/MyPosts/Post/Post";


type PropsAppType = {
    post:Array<PropsPostType>
    d:Array<PropsDialogItem>
    m:Array<{ id: number, message: string }>
    addPost: (postMessage: string)=>void
    }

function App(props:PropsAppType) {


    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
            <Navbar/>
            <div className='App_content'>
                <Route path='/messages' render={()=><Dialogs d={props.d} m={props.m}/>} />
                <Route path='/profile' render={()=><Profile post={props.post} addPost={props.addPost}/>} />

            </div>
        </div>
         </BrowserRouter>
    );
}



export default App;
