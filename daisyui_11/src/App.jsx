import './App.css';
import NavBar from './navbar/NavBar';
import Rating from './rating/Rating';
import { useState } from 'react';
import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import Modal from './modal/Modal'
import Accounts from './screens/Accounts';
import Dashboard from './screens/Dashboard';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import SpinnerLoader from './spinnerLoader/SpinnerLoader';

import { createContext } from "react";
export const UserContext = createContext();

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

    const enableSpinner = function (value) {
        value ? document.getElementById('eventProcessingIcon').showModal() : document.getElementById('eventProcessingIcon').close();
        if (value) {

            setTimeout(() => {
                enableSpinner(false);
            }, 5000);
        }
    }

    const [globalData] = useState({ "AccountType": "Advanced Acount", SetSpinnerVisible: enableSpinner });

    return (
        <>
            <UserContext.Provider value={globalData}>

                <NavBar title="MyTest" accounts={accounts} handleLogin={handleLogin} handleLogout={handleLogout}></NavBar>

                <SpinnerLoader></SpinnerLoader>

                <Modal id="my_permissions" title="Permissions">
                    You do not currently have any permissions
                </Modal>

                <BrowserRouter>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />}></Route>
                        <Route path="/accounts" element={<Accounts />}></Route>
                        <Route path="/" element={<Home accounts={accounts} />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>

        </>
    )
}
export default App