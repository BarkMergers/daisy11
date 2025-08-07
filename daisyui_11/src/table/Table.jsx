import './Table.css';
import TableRow from './../tableRow/TableRow';
import NumberPlate from './../numberPlate/NumberPlate';
import Input from './../input/Input';

const Table = ({ children, data, openDialog }) => {

    return (

        <div className="py-2">
            <table>
                <thead>
                    {children }
                </thead>


                <tbody>

                    {
                        data.map((item) => 
                            <>
                                <TableRow>
                                    <td>
                                        <Input type="checkbox"></Input>
                                    </td>
                                    <td>
                                        <NumberPlate>{item.firstname}</NumberPlate>
                                    </td>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>                        
                                    <td>1</td>                        
                                    <td>£2</td>                        
                                    <td>

                                        <div class="badge badge-info">Info</div>


                                    </td>                        
                                </TableRow>

                                <tr className="rowgroup-footer">
                                    <td colspan={7}>
                                        <div className="flex">
                                            <span className="grow content-around">
                                                <b>Rules</b>: Pay on behalf of customer
                                            </span>
                                            <span className="mx-1 grow text-right">

                                                <button className="btn btn-info mx-1 h-auto min-h-0">Pay Now</button>
                                                <button className="btn mx-1 h-auto min-h-0">Pay</button>
                                                <button className="btn mx-1 h-auto min-h-0">Nominate</button>
                                                <button className="btn mx-1 h-auto min-h-0">Appeal</button>
                                                <button className="btn mx-1 h-auto min-h-0" onClick={() => openDialog(item) }>View Fine</button>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </>

                        )
                    }
                

                </tbody>

            </table>
        </div>

    );


}


export default Table;