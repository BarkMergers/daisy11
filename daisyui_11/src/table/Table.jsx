import './Table.css';
import TableRow from './../tableRow/TableRow';
import NumberPlate from './../numberPlate/NumberPlate';
import Input from './../input/Input';

const Table = ({ columnData, tableData, openDialog }) => {

    const length = columnData == null ? 0 : columnData.filter(function (item) { return item.active; }).length + 1;

    const selectAll = (value) => {
        tableData.forEach((i) => i.recordIsSelected = value);
    }





    return (

        <div>
            <table>
                <thead>
                    {
                        <tr>
                            <td className="w-1">
                                <input className="h-5 w-5 align-middle" type="checkbox" onChange={(e) => selectAll(e.target.checked) }></input>
                            </td>

                            {
                                columnData != null && columnData.map((item) => item.active && <td>{item.text}</td>)
                            }
                        </tr>

                    }
                </thead>


                <tbody>


                    {
                        tableData.map((data, index) => {

                            return <><tr key={index & "t"}>

                                <td>
                                    <input type="checkbox" name="itemSelector" checked={data.recordIsSelected} className="h-5 w-5 align-middle"></input>
                                </td>

                                {
                                    columnData.map((column) => {

                                        if (!column.active) return;

                                        switch (column.name) {
                                            case "vehicle":
                                                {
                                                    return <td><NumberPlate>{data.vehicle}</NumberPlate></td>
                                                }

                                            case "fineamount":
                                                {
                                                    return <td>£{data.fineamount}</td>
                                                }

                                            case "increasedate":
                                                {
                                                    return <td>{data.increasedate.replace("T", " ") }</td>
                                                }

                                            default:
                                                {
                                                    return <td>{data[column.name]}</td>
                                                }
                                        }
                                    })



                                }
                            </tr>



                            <tr key={index} className="rowgroup-footer">
                                    <td colspan={length}>
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

                            </>


                        })
                    }



                

                </tbody>

            </table>
        </div>

    );


}


export default Table;