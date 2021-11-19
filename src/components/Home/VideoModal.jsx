import React  , {useEffect, useRef} from 'react';
import { Card, Container } from 'react-bootstrap';
import '../../css/Modals.css'
import Video from '../../videos/video.mp4'


const VideoModal = ({showModal , setShowModal }) =>{
    
    const video =  useRef()
  

  useEffect(() => {
    const handleEvent = (e) => {
      if (video.current && !video.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
    };
  });

    // useEffect(() => {
    //     const handleEvent = (event) =>{
    //         if(!video.current.contains(event.target)){
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
            <div  ref={video} className="modal-video animate__animated animate__bounceIn">
                
                <div>
                 <span aria-hidden={true} className="float-end px-2 "
                  onClick={()=>{
                      setShowModal(prev => !prev)
                  }} >&times;</span>
                </div>
                <div className="video">
                <video width="100%" height="310" controls autoPlay>
                <source src={Video} type="video/mp4"/>
                </video>
                </div>
              
            </div>
        </div>  : null
    }
    </>
    )
}
export default VideoModal