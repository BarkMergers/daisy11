import './ActionBar.css';

export default function ActionBar({ teamList, agentList, moveToTask, assignToTask, addFine }) {
    return (
        <div className="my-2 rounded-xl bg-white py-1 text-end text-black">
            <span>Move to</span>
            <select className="select mx-1 h-auto min-h-0 text-white" onChange={moveToTask}><option>Choose</option>{teamList.map((item) => <option key={item}>{item}</option>)}</select>
            <span>Assign</span>
            <select className="select mx-1 h-auto min-h-0 text-white" onChange={assignToTask}><option>Choose User</option>{agentList.map((item) => <option key={item}>{item}</option>)}</select>
            <button className="btn btn-info mx-1 h-auto min-h-0" onClick={addFine}>Add New Fine</button>
        </div>
    );
}
