import { React, useState, useEffect } from 'react'
import Modal from './../modal/Modal'
import { useQuery } from "@tanstack/react-query";
import Pagination from './../pagination/Pagination';
import './Accounts.css';
import { UserContext } from '../App'
import { GET, POST, SafeFetchJson } from '../helpers/fetch';
import { useContext } from "react";
import Table from './../table/Table';
import StatsBar from '../statsBar/StatsBar';
import StatsBarItem from '../statsBar/statsBarItem/StatsBarItem';
import ActionBar from './../actionBar/ActionBar';
import TableFilter from './../tableFilter/TableFilter';
import ColumnEditor from './../columEditor/ColumnEditor';

export default function Accounts() {

    const [data, setData] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pagination, setPagination] = useState(null);
    const [message, setMessage] = useState("");
    const pageSize = 3;
    const globalData = useContext(UserContext);
    const [filterValues, setFilterValues] = useState({});
    const [filterData, setFilterData] = useState(null);


    useQuery({
        queryKey: ['filter', pageIndex],
        queryFn: () => getCustomerFilter(pageIndex)
    });
    const getCustomerFilter = async () => {
        const data = await SafeFetchJson(`api/GetCustomerFilter`, GET());
        setFilterData(data);
        return data;
    }








    const [columnData, setColumnData] = useState(null);
    useEffect(() => {
        let initialColumnData;
        try {
            initialColumnData = JSON.parse(localStorage.getItem("liststructure_myaccounts"));
            if (initialColumnData == 'null' || initialColumnData == null)
                initialColumnData = resetList();
        }
        catch {
            initialColumnData = resetList();
        }
        setColumnData(initialColumnData);
    }, []); 
    useEffect(() => {
        if (columnData == null) {
            localStorage.removeItem("liststructure_myaccounts");
        }
        else {
            localStorage.setItem("liststructure_myaccounts", JSON.stringify(columnData));
        }
    }, [columnData])
    const resetList = () => {
        return [
            { "active": true, "name": "id", "text": "ID" },
            { "active": true, "name": "vehicle", "text": "Vehicle" },
            { "active": true, "name": "fineoperator", "text": "Operator" },
            { "active": true, "name": "increasedate", "text": "Increase Date" },
            { "active": false, "name": "fineamount", "text": "Fine Amount" },
            { "active": false, "name": "age", "text": "Age" },
            { "active": false, "name": "power", "text": "Power" },
            { "active": false, "name": "status", "text": "Status" },
            { "active": false, "name": "issuer", "text": "Issuer" },
        ]
    }
















    const { refetch: reloadData } = useQuery({
        queryKey: ['customers', pageIndex],
        queryFn: () => getCustomer(pageIndex)
    });

    const getCustomer = async (newPageIndex) => {
        globalData.SetSpinnerVisible(true);
        newPageIndex = newPageIndex || 0;
        const data = await SafeFetchJson(`api/GetCustomer/${newPageIndex}/${pageSize}`, POST(filterValues));
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
        setMessage(`This is the fine for ${data.firstname} ${data.lastname}: £2.00`);
        document.getElementById('my_modal_1').showModal();
    }





    const teamList = ["Erikson", "On hold"];
    const agentList = ["Bob", "Tim", "Sid"];

    const moveToTask = (e) => {
        const selectedCount = data.filter((item) => item.recordIsSelected).length;
        e.target.selectedIndex = 0;
        alert(selectedCount + " records moved");
    }

    const assignToTask = (e) => {
        const selectedCount = data.filter((item) => item.recordIsSelected).length;
        e.target.selectedIndex = 0;
        alert(selectedCount + " records assigned");
    }

    const addFine = () => {
        alert("Fine added")
    }




    useEffect(() => {
        reloadData();
    }, [filterValues])

    const applyFilter = (control, name) => {
        setFilterValues({ ...filterValues, [name]: control.value });
    }









    return (
        <>

            <Modal id="my_modal_1" title="Account Details">{message}</Modal>

            <ColumnEditor id="dialog_tableEditor" title="Editor" columnData={columnData} setColumnData={setColumnData} resetColumnData={resetList}></ColumnEditor>

            <div style={{ flexGrow: "1", padding: "40px" }}>

                <StatsBar>

                    <StatsBarItem title="Pending" focused >10</StatsBarItem>
                    <StatsBarItem title="Pay">4</StatsBarItem>
                    <StatsBarItem title="Nominate">2</StatsBarItem>
                    <StatsBarItem title="Appeal">3</StatsBarItem>

                </StatsBar>

                <ActionBar teamList={teamList} agentList={agentList} moveToTask={moveToTask} assignToTask={assignToTask} addFine={addFine} ></ActionBar>

                <TableFilter applyFilter={applyFilter} filterData={filterData} openEditor={() => document.getElementById('dialog_tableEditor').showModal() }></TableFilter>

                {data != null &&
                    <Table columnData={columnData} tableData={data} openDialog={openDialog} setData={setData}></Table>
                }
            </div>

            <div style={{ padding: "40px", textAlign: "center" }}>
                <Pagination data={pagination} updatePage={updatePage}></Pagination>
            </div>


        </>
    );
}


