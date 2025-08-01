import './App.css';
import NavBar from './navbar/NavBar';
import { useState } from 'react';
import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import Modal from './modal/Modal'
import Accounts from './screens/Accounts';
import Dashboard from './screens/Dashboard';
import Admin from './screens/Admin';
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

    const handleLogin = async () => {
        await instance.loginPopup(loginRequest);
        const acc = instance.getAllAccounts();
        loginRequest.account = acc[0];
        const result = await instance.acquireTokenSilent(loginRequest);
        sessionStorage.setItem("token", result.accessToken);
    };

    const handleLogout = () => {
        instance.logoutPopup();

        navigate('/')
        //document.location.href = '/';           
    };

    var eventProcessingIconTimeout = null;

    const enableSpinner = function (value) {

        if (!value) {
            document.getElementById('eventProcessingIcon').close()
            if (eventProcessingIconTimeout != null) {
                clearTimeout(eventProcessingIconTimeout);
                eventProcessingIconTimeout = null;
            }
        }

        if (value) {

            eventProcessingIconTimeout = setTimeout(() => {
                document.getElementById('eventProcessingIcon').showModal();
            }, 333);
        }

        if (value) {
            setTimeout(() => {
                enableSpinner(false);
            }, 30000);
        }
    }

    const [globalData] = useState({ AccountType: "Advanced Acount", SetSpinnerVisible: enableSpinner});

    return (
        <>
            <UserContext.Provider value={globalData}>

                {
                    (accounts.length == 1 &&

                        <div style={{ flexGrow: "1", overflow: "auto", display: "flex", flexDirection: "column" }}>
                            <BrowserRouter>


                                <NavBar title="MyTest" accounts={accounts} handleLogin={handleLogin} handleLogout={handleLogout}></NavBar>


                                <Routes>
                                    <Route path="/dashboard" element={<Dashboard />}></Route>
                                    <Route path="/accounts" element={<Accounts />}></Route>
                                    <Route path="/admin" element={<Admin accounts={accounts} />}></Route>
                                    <Route path="/" element={<Home accounts={accounts} />}></Route>
                                    <Route path="*" element={<NotFound />}></Route>
                                </Routes>
                            </BrowserRouter>
                        </div>
                    )
                }

                {
                    (accounts.length != 1 &&
                        <div style={{ flexGrow: "1", overflow: "auto", display: "flex", flexDirection: "column" }}>
                            <BrowserRouter>


                                <NavBar title="MyTest" accounts={accounts} handleLogin={handleLogin} handleLogout={handleLogout}></NavBar>

                                <Routes>
                                    <Route path="/dashboard" element={<Dashboard />}></Route>
                                    <Route path="/" element={<Home accounts={accounts} />}></Route>
                                    <Route path="*" element={<NotFound />}></Route>
                                </Routes>
                            </BrowserRouter>
                        </div>
                    )
                }



                <SpinnerLoader></SpinnerLoader>

                <Modal id="my_permissions" title="Permissions">
                    You do not currently have any permissions
                </Modal>

            </UserContext.Provider>
        </>
    )
}
export default App