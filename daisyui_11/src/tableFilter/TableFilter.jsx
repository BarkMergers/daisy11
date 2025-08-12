import Input from '../input/Input';
import Select from '../select/Select';
import './TableFilter.css';
import { FaSearch } from 'react-icons/fa';

export default function TableFilter({ openEditor, filterData, applyFilter }) {
    return (

        <div className="my-2 rounded-xl bg-white py-1">
            <select className="select mx-1 h-8 min-h-0 align-middle"><option>Show all</option><option>Show active</option></select>



            <div className="input search-container">
                <FaSearch className="search-icon" />
                <input onChange={(e) => applyFilter(e.target, "text")} type="text" placeholder="Search vehicle..." className="search-input" style={{ border:"none", background:"none" }} />
            </div>


            <select onChange={(e) => applyFilter(e.target, "status")} className="select align-middle mx-1 h-8 min-h-0"><option value="">Status...</option>
                {filterData?.statusList != null && filterData.statusList.map((i) => <option key={i}>{i}</option>)}
            </select>

            {/*<select className="select mx-1 h-8 min-h-0"><option>Description</option></select>*/}

            <select onChange={(e) => applyFilter(e.target, "issuer")} className="select align-middle mx-1 h-8 min-h-0"><option value="">Issuer...</option>
                {filterData?.issuerList != null && filterData.issuerList.map((i) => <option key={i}>{i}</option>)}
            </select>

            <select onChange={(e) => applyFilter(e.target, "fineoperator")} className="select align-middle mx-1 h-8 min-h-0"><option value="">Operators...</option>
                {filterData?.operatorList != null && filterData.operatorList.map((i) => <option key={i}>{i}</option>)}
            </select>

            {/*<select className="select mx-1 h-8 min-h-0"><option>Filters</option></select>*/}

            <button className="btn btn-info float-right mx-1 h-auto min-h-0" onClick={openEditor}>Manage Columns</button>


        </div>
    );
}
