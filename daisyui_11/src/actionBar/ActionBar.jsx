import './ActionBar.css';

export default function ActionBar () {
    return (
        <div className="my-2 rounded-xl bg-white py-1 text-end text-black">
            <span>Move to</span>
            <select className="select mx-1 h-auto min-h-0 text-white"><option>Choose</option></select>
            <span>Assign</span>
            <select className="select mx-1 h-auto min-h-0 text-white"><option>Choose User</option></select>
            <button className="btn btn-info mx-1 h-auto min-h-0">Add New Fine</button>
        </div>
    );
}
