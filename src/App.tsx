import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
            <Navbar/>
            <div className='App_content'>
                <Route path='/messages' component={Dialogs} />
                <Route path='/profile' component={Profile} />

            </div>
        </div>
        </BrowserRouter>
    );
}


export default App;
