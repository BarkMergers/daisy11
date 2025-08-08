import Input from '../input/Input';
import Select from '../select/Select';
import './TableFilter.css';

export default function TableFilter () {
    return (

        <div className="my-2 rounded-xl bg-white py-1">
            <select className="select mx-1 h-8 min-h-0"><option>Show all</option><option>Show active</option></select>

            <input className="input mx-1 h-8 min-h-0" placeholder="Search"></input>

            <select className="select mx-1 h-8 min-h-0"><option>Status</option></select>
            <select className="select mx-1 h-8 min-h-0"><option>Description</option></select>
            <select className="select mx-1 h-8 min-h-0"><option>Issuer</option></select>
            <select className="select mx-1 h-8 min-h-0"><option>Operators</option></select>
            <select className="select mx-1 h-8 min-h-0"><option>Filters</option></select>

            <button className="btn btn-info float-right mx-1 h-auto min-h-0">Manage Columns</button>


        </div>
    );
}
