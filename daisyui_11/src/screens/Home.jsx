

import { React } from 'react'
import Rating from '../rating/Rating';

export default function Home({ accounts }) {


    return (
        <>
            {accounts.length == 0 ?
                <div className="m-auto">
                    Welcome to the testbed - Please log in with your corporate email (It should already exist in Azure Entra!)
                </div>
                :
                <div className="m-auto text-center">

                    <div>
                        You are now logged in
                    </div>

                    <div>
                        Click on your name in top right to alter / create your user record.
                    </div>

                    <div>
                        Select Account from the Order menu option to see a simple table loaded from MongoDB.
                    </div>

                    <div style={{ "paddingTop": "20px" }}>
                        <div>Rate it!</div>
                        <Rating stars={5}></Rating>
                    </div>
                </div>
            }
        </>
    );
}
