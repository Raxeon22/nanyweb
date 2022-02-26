import React, { useEffect, useRef } from 'react';
import parse from 'html-react-parser'
import '../../css/Modals.css'


const ServicesModal = ({ showModal, setShowModal, modalContent }) => {
    const serviceModal = useRef()
    useEffect(() => {
        const handleEvent = (e) => {
            if (serviceModal.current && !serviceModal.current.contains(e.target)) {
                setShowModal(false);
            }
        }
        document.addEventListener("mousedown", handleEvent);

        return () => {
            document.removeEventListener("mousedown", handleEvent);
        };
    })
    return (
        <>
            { showModal ?
                <div className="modal">
                    <div ref={ serviceModal } className="modal-services animate__animated animate__bounceIn">

                        <div>
                            <span aria-hidden={ true } className="float-end px-2 "
                                onClick={ () => {
                                    setShowModal(prev => !prev)
                                } } >&times;</span>
                        </div>
                        <div className="content">
                            <h3>{ modalContent.heading }</h3>
                            <p>{ parse(modalContent.para) }</p>
                        </div>

                    </div>
                </div> : null
            }
        </>
    )
}
export default ServicesModal