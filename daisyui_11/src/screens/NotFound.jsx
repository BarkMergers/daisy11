import { React } from 'react'
import { useContext } from "react";
import { UserContext } from '../App'


export default function NotFound() {

    const globalData = useContext(UserContext);

    const imageStyle = {
        height: "250px",
        width: "250px",
        margin: "auto",
        "mask-image": "url(./404.png)",
        maskSize: "250px 250px",
        background: "linear-gradient(red, blue)"
    }

    return (
        <>
            <div>
                <div onClick={globalData.SetSpinnerVisible} style={imageStyle} ></div>
                <div style={{ padding: "20px" }}>Page was not found</div>
            </div>



        </>
    );
}
