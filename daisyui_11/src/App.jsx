import './App.css'
import NavBar from './navbar/NavBar'
import Rating from './rating/Rating'

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




    return (
        <>
            <NavBar title="MyTest" accounts={accounts} handleLogin={handleLogin} handleLogout={handleLogout}></NavBar>


            {accounts.length == 0 ?
                
                <>
                    Welcome to the testbed - Please log in with your corporate email (It should already exist in Azure Entra!)
                </>

                :

                <>

                    <div>
                        You are now logged in! Hover over your username to see your role. New features will be added here shortly.
                    </div>

                    <div style={{ "paddingTop": "20px"  } }>
                        <div>Rate it!</div>
                        <Rating stars={5}></Rating>
                    </div>



                </>


            }





        </>
    )
}
export default App