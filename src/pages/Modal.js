import { useEffect } from "react"
import "./Modal.css"

const Modal = ({notifContent, clearNotif}) => {
    useEffect(()=>{
        setTimeout(() =>{
            clearNotif()

        }, 2000)
    })

  return (
    <div className="modal-box">
        <div className="modal-text">{notifContent}</div>
    </div>
    )
}

export default Modal
