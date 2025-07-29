import { useEffect, useRef } from 'react'

export default function Modal({ id, title, children, visible, onClose }) {
    const modalRef = useRef(null);

    useEffect(() => {
        if (!modalRef.current) {
            return;
        }
        visible ? modalRef.current.showModal() : modalRef.current.close();
    }, [visible]);

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    }

    const handleESC = (event) => {
        event.preventDefault();
        handleClose();
    }

    return (
        <dialog ref={modalRef} id={id} className="modal" onCancel={handleESC}>
            <form method="dialog" className="modal-box">
                <h3 className="text-lg font-bold">{title}</h3>
                {children}
                <div className="modal-action" style={{ justifyContent: "center", paddingTop: "20px" }} >
                    <button className="btn" onClick={handleClose}>Close</button>
                </div>
            </form>
        </dialog>
    );
}

