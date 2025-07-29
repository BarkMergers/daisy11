import { useEffect, useRef } from 'react'

export default function SpinnerLoader() {
    const modalRef = useRef(null);
    const id = "eventProcessingIcon";
    const visible = false;

    useEffect(() => {
        if (!modalRef.current) {
            return;
        }
        visible ? modalRef.current.showModal() : modalRef.current.close();
    }, [visible]);

    const handleESC = (event) => {
        event.preventDefault();
    }

    return (
        <dialog ref={modalRef} id={id} className="modal" onCancel={handleESC}>
            <form method="dialog" className="modal-box">
                <h3 className="text-lg font-bold">Processing</h3>
                <img style={{ "height": "150px", "width": "150px", "margin": "auto" }} src="./fade-stagger-squares.svg"></img>
            </form>
        </dialog>
    );
}

