import { useRef } from 'react'
import { ReactSortable } from "react-sortablejs";

export default function ColumnEditor({ id, columnData, setColumnData, resetColumnData }) {
    const modalRef = useRef(null);

    const setColumnActive = (index, isActive) => {
        setColumnData(prev =>
            prev.map((col, i) =>
                i === index ? { ...col, active: isActive } : col
            )
        );
    };

    const handleESC = (event) => {
        event.preventDefault();
    }

    return (
        <dialog ref={modalRef} id={id} className="modal" onCancel={handleESC}>
            <form method="dialog" className="modal-box text-center">
                <h3 className="text-center text-lg font-bold">Column Editor</h3>

                { columnData != null && 
                    <ReactSortable list={columnData} setList={(list) => setColumnData(list)} >
                        {columnData.map((column, i) => (
                            <div key={column.name} className="m-1 flex items-center rounded bg-gray-200 p-1 text-black">
                                <input style={{ height: "20px", width: "20px" }} onChange={(e) => setColumnActive(i, e.target.checked)} name={"vis_" + column.name} checked={column.active} type="checkbox" />
                                <span className="px-2">{column.text}</span>
                            </div>
                        ))}
                    </ReactSortable>
                }

                <div className="modal-action justify-center p-2" style={{ justifyContent: "center" }}>
                    <button type="button" className="btn btn-warning" onClick={() => setColumnData(resetColumnData)}>Reset</button>
                    <button className="btn btn-primary">Close</button>
                </div>

            </form>
        </dialog>
    );
}