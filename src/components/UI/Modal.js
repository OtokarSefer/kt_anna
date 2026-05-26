import { useEffect, useRef } from "react"

const Modal = ({ open, children, onClose }) => {
    const dialog = useRef()
    useEffect(() => {
        const modal = dialog.current
        if (!modal) return
        else {}
        if (open) {modal.showModal()} 
        else {modal.close()}
        return () => {modal.close()}
    }, [open])
    return (
        <dialog ref={dialog} className="modal-actions" onClose={onClose}>
            {children}
        </dialog>
    )
}

export default Modal