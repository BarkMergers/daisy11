import { React, useState } from 'react'
import Modal from './../modal/Modal'
import { useQuery } from "@tanstack/react-query";
import Pagination from './../pagination/Pagination';
import './Accounts.css';


export default function Accounts() {

    const [data, setData] = useState([]);



    const [pageIndex, setPageIndex] = useState(0);
    const [pagination, setPagination] = useState(0);
    const [message, setMessage] = useState("");


     useQuery({
        queryKey: ['customers', pageIndex],
        queryFn: () => getCustomer(pageIndex)
    });





    const getCustomer = async (newPageIndex) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        newPageIndex = newPageIndex || 0;

        //const url = `http://localhost:7039/api/GetCustomer/${newPageIndex}/5`;
        const url = `https://daisy11functions20250722145544.azurewebsites.net/api/GetCustomer/${newPageIndex}/5`;


        
        const response = await fetch(url);
        const data = await response.json();

        setPagination(data.pagination);
        setPageIndex(newPageIndex);
        setData(data.data);

        return response.json;
    }


    const updatePage = (pageIndex) => {
        setPageIndex(pageIndex * 5);
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
                <Pagination data={pagination} updatePage={ updatePage }></Pagination>
            </div>

       

            <Modal id="my_modal_1" title="Account Details">
                {message}
            </Modal>
        </>
    );
}
