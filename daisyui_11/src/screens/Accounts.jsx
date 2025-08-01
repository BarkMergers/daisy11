import { React, useState } from 'react'
import Modal from './../modal/Modal'
import { useQuery } from "@tanstack/react-query";
import Pagination from './../pagination/Pagination';
import './Accounts.css';
import { useContext } from "react";
import { UserContext } from '../App'
import { URLROOT, GET } from '../helpers/fetch';

export default function Accounts() {

    const [data, setData] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pagination, setPagination] = useState(null);
    const [message, setMessage] = useState("");
    const globalData = useContext(UserContext);
    const pageSize = 3;


     useQuery({
        queryKey: ['customers', pageIndex],
        queryFn: () => getCustomer(pageIndex)
    });

    const getCustomer = async (newPageIndex) => {
        alert(1);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        alert(2);
        newPageIndex = newPageIndex || 0;

        alert(3);
        const url = `api/GetCustomer/${newPageIndex}/${pageSize}`;

        alert(4);

        alert(URLROOT + url);



        const response = await fetch(URLROOT + url, GET());

        alert(5);

        const data = await response.json();

        alert(6);

        setPagination(data.pagination);

        alert(7);

        setPageIndex(newPageIndex);

        alert(8);

        setData(data.data);

        alert(9);


       // globalData.SetSpinnerVisible(false);

        return response.json;
    }

    const updatePage = (pageIndex) => {
        setPageIndex(pageIndex * pageSize);
    }

    const openDialog = (data) => {
        setMessage(`This is the account for ${data.firstname} ${data.lastname}`);
        document.getElementById('my_modal_1').showModal();
    }

    return (
        <>
            <div style={{ flexGrow: "1", padding: "40px" }}>
                <table className="accounts-table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Firstname</td>
                            <td>Lastname</td>
                            <td>Age</td>
                            <td>Active</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data != null && data.map((accountItem) => <tr onClick={() => openDialog(accountItem)}>
                            <td>{accountItem.id}</td>
                            <td>{accountItem.firstname}</td>
                            <td>{accountItem.lastname}</td>
                            <td>{accountItem.age}</td>
                            <td>{accountItem.active ? "Yes" : "No"}</td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>

            <div style={{ padding: "40px", textAlign: "center" }}>
                <Pagination data={pagination} updatePage={updatePage}></Pagination>
            </div>

            <Modal id="my_modal_1" title="Account Details">
                {message}
            </Modal>
        </>
    );
}


