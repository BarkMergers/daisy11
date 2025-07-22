import './App.css'
import NavBar from './navbar/NavBar'
import Rating from './rating/Rating'
import { useState } from 'react'

import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';


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




    const [value, setValue] = useState(4);

    return (
        <>
            <NavBar title="MyTest" accounts={accounts} handleLogin={handleLogin} handleLogout={handleLogout} ></NavBar>

            <div className="m-2" data-theme="dark">
                <button className="btn btn-primary">Dark Themed Button</button>
            </div>
            <div className="m-2" data-theme="light">
                <button className="btn btn-primary">Light Themed Button</button>
            </div>

            <Rating stars={7} value={value} onChange={(v) => setValue(v) } ></Rating>

            <div>{value}</div>

        </>
    )
}
export default App