import React, { useEffect, useRef, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import '../../css/Modals.css'
import baseURL from "../../middleware/BaseURL";
import Action from "../../middleware/API";


const VideoModal = ({ showModal, setShowModal }) => {

  const video = useRef()
  const [video2, setVideo] = useState('')


  useEffect(() => {
    const getVideo = async () => {
      try {
        const res = await Action.get('/about')
        const { data } = res.data
        setVideo(data[0].video)
      } catch (error) {
        console.log(error)
      }
    }
    getVideo()
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
  return (
    <>
      { showModal ?
        <div className="modal">
          <div ref={ video } className="modal-video animate__animated animate__bounceIn">

            <div>
              <span aria-hidden={ true } className="float-end px-2 "
                onClick={ () => {
                  setShowModal(prev => !prev)
                } } >&times;</span>
            </div>
            <div className="video">
              <iframe width="100%" height="370" src={ baseURL + video2 }>
              </iframe>
            </div>

          </div>
        </div> : null
      }
    </>
  )
}
export default VideoModal