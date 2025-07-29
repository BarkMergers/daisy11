

import { React, useState, useEffect } from 'react'
import Modal from './../modal/Modal'

import { useQuery } from "@tanstack/react-query";


export default function Accounts() {

    const [data, setData] = useState([]);

    var { customerdata, isPending, refetch } = useQuery({
        queryKey: ['customers'],
        queryFn: () => { getCustomer() }
    });

    //// Load from server
    //useEffect(() => {
    //    fetch("http://localhost:7039/api/GetCustomer")
    //        .then((res) => res.json())
    //        .then((data) => {
    //            setData(data);
    //        })
    //}, []);

    const getCustomer = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await fetch("http://localhost:7039/api/GetCustomer");
        setData(await response.json());
        return response.json;
    }

    return (
        <>
            <div onClick={() => refetch }>
                Here are your accounts
            </div>

            <table>
                {
                    data.map((x) => <tr>
                        <td>{x.firstname}</td>
                        <td>{x.lastname}</td>
                        <td>{x.age}</td>
                        <td>{x.active ? "Yes" : "No"}</td>
                    </tr>)
                }
                </table>

            <div>
                <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Random Account</button>
            </div>

            <Modal id="my_modal_1" title="Random Account">
                Feature not ready - Its only a test of modal dialog boxes!
            </Modal>
        </>
    );
}
