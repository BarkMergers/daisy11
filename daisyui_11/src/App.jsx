import './App.css'
import NavBar from './navbar/NavBar'
import Rating from './rating/Rating'

import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';


import Accounts from './screens/Accounts';
import Dashboard from './screens/Dashboard';
import Home from './screens/Home';

//npm i react-router-dom
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";


function App() {

    const { instance, accounts } = useMsal();

    const handleLogin = () => {
        instance.loginPopup(loginRequest).catch(e => {
            console.error(e);
        });
    };

    const handleLogout = () => {
        instance.logoutPopup();
    };




    return (
        <>
            <NavBar title="MyTest" accounts={accounts} handleLogin={handleLogin} handleLogout={handleLogout}></NavBar>



            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                    <Route path="/accounts" element={<Accounts />}></Route>
                    <Route path="/" element={<Home accounts={accounts} />}></Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}
export default App