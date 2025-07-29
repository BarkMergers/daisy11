import { React } from 'react'
import { useContext } from "react";
import { UserContext } from '../App'

export default function NotFound() {

    const globalData = useContext(UserContext);

    return (
        <>
            <div>
                Page was not found!!!
            </div>

            <div>
                <button onClick={ globalData.SetSpinnerVisible }>Click me</button>
            </div>

        </>
    );


}
