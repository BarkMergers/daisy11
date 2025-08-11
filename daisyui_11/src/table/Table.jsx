import './Table.css';
import TableRow from './../tableRow/TableRow';
import NumberPlate from './../numberPlate/NumberPlate';
import Input from './../input/Input';
import React, { useRef, useEffect } from 'react';

const Table = ({ columnData, tableData, openDialog, setData }) => {

    const length = columnData == null ? 0 : columnData.filter(function (item) { return item.active; }).length + 1;
    const chkSelectAll = useRef(null);


    const selectAll = (e) => {
        setData(prevItems =>
            prevItems.map(item => ({
                ...item,
                recordIsSelected: e.target.checked,
            }))
        );
    }

    const selectOne = (e, index) => {
        setData(prevItems =>
            prevItems.map((item, i) => ( i == index ? { ...item, recordIsSelected: e.target.checked }: item))
        );



    }

    useEffect(() => {
        const hasTrueStatus = tableData.some(x => x.recordIsSelected === true);
        const hasFalseStatus = tableData.some(x => x.recordIsSelected === false || x.recordIsSelected == null);
        if (hasTrueStatus && hasFalseStatus) {
            chkSelectAll.current.indeterminate = true;
        }
        else {
            chkSelectAll.current.checked = hasTrueStatus ? true : false;
            chkSelectAll.current.indeterminate = false;

        }
    }, [tableData])




    return (

        <div>
            <table>
                <thead>
                    {
                        <tr>
                            <td className="w-1">
                                <input ref={chkSelectAll} className="h-5 w-5 align-middle" type="checkbox" onChange={selectAll}></input>
                            </td>
                            {
                                columnData != null && columnData.map((item, i) => item.active && <td key={"key" + i}>{item.text}</td>)
                            }
                        </tr>

                    }
                </thead>


                <tbody>


                    {
                        tableData.map((data, index) => {

                            return <React.Fragment key={index}>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="itemSelector" onChange={(e) => selectOne(e, index)} checked={data.recordIsSelected} className="h-5 w-5 align-middle"></input>
                                    </td>
                                    {
                                        columnData.map((column, i) => {

                                            if (!column.active) return;

                                            switch (column.name) {
                                                case "vehicle":
                                                    {
                                                        return <td key={i}><NumberPlate>{data.vehicle}</NumberPlate></td>
                                                    }

                                                case "fineamount":
                                                    {
                                                        return <td key={i}>£{data.fineamount}</td>
                                                    }

                                                case "increasedate":
                                                    {
                                                        return <td key={i}>{data.increasedate.replace("T", " ") }</td>
                                                    }

                                                default:
                                                    {
                                                        return <td key={i}>{data[column.name]}</td>
                                                    }
                                            }
                                        })
                                    }
                                </tr>

                                <tr className="rowgroup-footer">
                                        <td colSpan={length}>
                                        <div className="flex">
                                            <span className="grow content-around">
                                                <b>Rules</b>: Pay on behalf of customer
                                            </span>
                                            <span className="mx-1 grow text-right">
                                                <button className="btn btn-info mx-1 h-auto min-h-0">Pay Now</button>
                                                <button className="btn mx-1 h-auto min-h-0">Pay</button>
                                                <button className="btn mx-1 h-auto min-h-0">Nominate</button>
                                                <button className="btn mx-1 h-auto min-h-0">Appeal</button>
                                                <button className="btn mx-1 h-auto min-h-0" onClick={() => openDialog(data)}>View Fine</button>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </React.Fragment>
                        })
                    }



                

                </tbody>

            </table>
        </div>

    );


}


export default Table;