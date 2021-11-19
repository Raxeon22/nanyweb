import React from 'react';
import { Card, Container } from 'react-bootstrap';
import '../../css/Modals.css'


const ServicesModal = ({showModal , setShowModal }) =>{
    return(
    <>
    {  showModal ? 
       <div className="modal">
            <div className="modal-services animate__animated animate__bounceIn">
                
                <div>
                 <span aria-hidden={true} className="float-end px-2 "
                  onClick={()=>{
                      setShowModal(prev => !prev)
                  }} >&times;</span>
                </div>
                <div className="content">
                 <h3>Lorem, ipsum dolor.</h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cumque velit aliquam dicta eos laudantium aliquid iste quas numquam minus labore, voluptatibus fugit? Eligendi, temporibus exercitationem animi neque cupiditate quam.</p>
                </div>
              
            </div>
        </div>  : null
    }
    </>
    )
}
export default ServicesModal