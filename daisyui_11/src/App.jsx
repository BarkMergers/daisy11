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
import LoggedOut from './screens/LoggedOut';
import Input from './input/Input'
import { createContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { POST, SafeFetch } from './helpers/fetch';


export const UserContext = createContext();






    
function App() {

    const { instance, accounts } = useMsal();


    const getSubdomain = () => {
        return window.location.hostname.split('.').splice(1, 1).join(".");
    };



    const handleLogin = async (loginNavigationFunction) => {
        try {
            // Force user login to get a new session
            await instance.loginPopup(loginRequest);

            const account = instance.getAllAccounts()[0];
            if (!account) throw new Error("No account found after login");

            loginRequest.account = account;

            // Try silent token acquisition
            let result;
            try {

                result = await instance.acquireTokenSilent({
                    ...loginRequest,
                    forceRefresh: true, // <-- important if cache might be stale
                });


                alert("You are in tenant " + getSubdomain());

                await SafeFetch("api/StoreToken", POST({ Token: result.accessToken, Tenant: getSubdomain() }));
                loginNavigationFunction();

            } catch (silentError) {
                // Silent token failed — fallback to popup
                console.warn("Silent token failed, trying popup:", silentError);
                result = await instance.acquireTokenPopup(loginRequest);
            }
        } catch (err) {
            console.error("Login failed:", err);
        }
    }

    const handleLogout = async () => {
        instance.logoutPopup();   
        await SafeFetch("api/RemoveToken", POST({}));
 
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
                    accounts.length == 1 &&

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
                    
                }

                {
                    (accounts.length != 1 &&
                        <div style={{ flexGrow: "1", overflow: "auto", display: "flex", flexDirection: "column" }}>
                            <BrowserRouter>
                                <NavBar title="MyTest" accounts={accounts} handleLogin={handleLogin} handleLogout={handleLogout}></NavBar>
                                <Routes>
                                    <Route path="/dashboard" element={<Dashboard />}></Route>
                                    <Route path="/loggedout" element={<LoggedOut />}></Route>
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

                <Modal id="my_claim_rejected" title="Reject Claim" submit="save">
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                            <Input value={0} type="number" title="Claim ID" placeholder="Claim to reject"  />

                            

                        </fieldset>
                </Modal>


            </UserContext.Provider>
        </>
    )
}
export default App