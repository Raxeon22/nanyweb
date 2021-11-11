import React  , {useEffect, useRef} from 'react';
import { Card, Container , Button } from 'react-bootstrap';
import '../css/Modals.css'
import Duck from '../assets/banner-two.jpg'


const PageModal = ({showModal , setShowModal }) =>{
    
    const popup =  useRef()

    // useEffect(() => {
    //     const handleEvent = (event) =>{
    //         if(!popup.current.contains(event.target)){
    //         setShowModal(false)
        
    //     } 
    //     }
    //      document.addEventListener('mousedown' , handleEvent)
    //      return () => { document.removeEventListener('mousedown' , handleEvent) }
        
        
    // }, [])

   
    return(
    <>
    {  showModal ? 
       <div className="modal">
            <div  ref={popup} className="modal-popup animate__animated animate__slideInDown">
                
                <div>
                 <span aria-hidden={true} className="float-end px-2 "
                  onClick={()=>{
                      setShowModal(prev => !prev)
                  }} >&times;</span>
                </div>
                <div className="popup">
                 <img src={Duck} alt="" width="100%" height="360" />
                 <div className="float-end mt-3">
                     <Button>get a clue</Button>
                 </div>
                </div>
              
            </div>
        </div>  : null
    }
    </>
    )
}
export default PageModal