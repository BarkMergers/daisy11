import { React, useState } from 'react'
import Modal from './../modal/Modal'
import { useQuery } from "@tanstack/react-query";
import Pagination from './../pagination/Pagination';
import './Accounts.css';
import { UserContext } from '../App'
import { GET, SafeFetchJson } from '../helpers/fetch';
import { useContext } from "react";
import Table from './../table/Table';

export default function Accounts() {

    const [data, setData] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pagination, setPagination] = useState(null);
    const [message, setMessage] = useState("");
    const pageSize = 3;
    const globalData = useContext(UserContext);

     useQuery({
        queryKey: ['customers', pageIndex],
        queryFn: () => getCustomer(pageIndex)
    });

    const getCustomer = async (newPageIndex) => {

        globalData.SetSpinnerVisible(true);

        newPageIndex = newPageIndex || 0;

        const data = await SafeFetchJson(`api/GetCustomer/${newPageIndex}/${pageSize}`, GET());

        setPagination(data.pagination);
        setPageIndex(newPageIndex);
        setData(data.data);

        globalData.SetSpinnerVisible(false);

        return data;
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

                {data != null &&
                    <Table data={data}>
                        <tr>
                            <td className="w-1"></td>
                            <td>Vehicle</td>
                            <td>Increase Date</td>
                            <td>Operator</td>
                            <td>Description</td>
                            <td>Fine Amount</td>
                            <td>Status</td>
                        </tr>
                    </Table>
                }


                {/*<table className="accounts-table">*/}
                {/*    <thead>*/}
                {/*        <tr>*/}
                {/*            <td>ID</td>*/}
                {/*            <td>Firstname</td>*/}
                {/*            <td>Lastname</td>*/}
                {/*            <td>Age</td>*/}
                {/*            <td>Active</td>*/}
                {/*        </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>*/}
                {/*    {*/}
                {/*        data != null && data.map((accountItem) => <tr onClick={() => openDialog(accountItem)}>*/}
                {/*            <td>{accountItem.id}</td>*/}
                {/*            <td>{accountItem.firstname}</td>*/}
                {/*            <td>{accountItem.lastname}</td>*/}
                {/*            <td>{accountItem.age}</td>*/}
                {/*            <td>{accountItem.active ? "Yes" : "No"}</td>*/}
                {/*        </tr>)*/}
                {/*        }*/}
                {/*    </tbody>*/}
                {/*</table>*/}
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


