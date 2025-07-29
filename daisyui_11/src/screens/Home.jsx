

import { React } from 'react'
import Rating from '../rating/Rating';

export default function Home({ accounts }) {


    return (
    
        <>

            {accounts.length == 0 ?

                <>
                    Welcome to the testbed - Please log in with your corporate email (It should already exist in Azure Entra!)
                </>

                :

                <>

                    <div>
                        You are now logged in! Hover over your username to see your role. New features will be added here shortly.
                    </div>

                    <div style={{ "paddingTop": "20px" }}>
                        <div>Rate it!</div>
                        <Rating stars={5}></Rating>
                    </div>



                </>


            }

        </>


    );


}
