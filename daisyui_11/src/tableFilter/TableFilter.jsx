import Input from '../input/Input';
import Select from '../select/Select';
import './TableFilter.css';

export default function TableFilter({ openEditor, filterData, applyFilter }) {
    return (

        <div className="my-2 rounded-xl bg-white py-1">
            <select className="select mx-1 h-8 min-h-0"><option>Show all</option><option>Show active</option></select>

            <input className="input mx-1 h-8 min-h-0" placeholder="Search"></input>

            <select onChange={(e) => applyFilter(e.target, "status")} className="select mx-1 h-8 min-h-0"><option value="">Status</option>
                {filterData?.statusList != null && filterData.statusList.map((i) => <option key={i}>{i}</option>)}
            </select>

            {/*<select className="select mx-1 h-8 min-h-0"><option>Description</option></select>*/}

            <select onChange={(e) => applyFilter(e.target, "issuer")} className="select mx-1 h-8 min-h-0"><option value="">Issuer</option>
                {filterData?.issuerList != null && filterData.issuerList.map((i) => <option key={i}>{i}</option>)}
            </select>

            <select onChange={(e) => applyFilter(e.target, "fineoperator")} className="select mx-1 h-8 min-h-0"><option value="">Operators</option>
                {filterData?.operatorList != null && filterData.operatorList.map((i) => <option key={i}>{i}</option>)}
            </select>

            {/*<select className="select mx-1 h-8 min-h-0"><option>Filters</option></select>*/}

            <button className="btn btn-info float-right mx-1 h-auto min-h-0" onClick={openEditor}>Manage Columns</button>


        </div>
    );
}
