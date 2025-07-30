import { React, useState } from 'react'
import Modal from './../modal/Modal'
import { useQuery } from "@tanstack/react-query";
import Pagination from './../pagination/Pagination';

export default function Accounts() {

    const [data, setData] = useState([]);



    const [pageIndex, setPageIndex] = useState(0);
    const [pagination, setPagination] = useState(0);
  

     useQuery({
        queryKey: ['customers', pageIndex],
        queryFn: () => getCustomer(pageIndex)
    });





    const getCustomer = async (newPageIndex) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        newPageIndex = newPageIndex || 0;

        const url = `https://daisy11functions20250722145544.azurewebsites.net/api/GetCustomer/${newPageIndex}/5`;
        //https://daisy11functions20250722145544.azurewebsites.net/

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


    return (
        <>

            <div>
                Here are your accounts
            </div>

            <table>
                {
                    data != null && data.map((x) => <tr>
                        <td>{x.id}</td>
                        <td>{x.firstname}</td>
                        <td>{x.lastname}</td>
                        <td>{x.age}</td>
                        <td>{x.active ? "Yes" : "No"}</td>
                    </tr>)
                }
            </table>


            <div>
                <Pagination data={pagination} updatePage={ updatePage }></Pagination>
            </div>




            <div>
                <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Random Account</button>
            </div>

            <Modal id="my_modal_1" title="Random Account">
                Feature not ready - Its only a test of modal dialog boxes!
            </Modal>
        </>
    );
}
