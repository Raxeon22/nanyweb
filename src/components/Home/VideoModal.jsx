import React, { useEffect, useRef, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import '../../css/Modals.css'
import baseURL from "../../middleware/BaseURL";
import Action from "../../middleware/API";


const VideoModal = ({ showModal, setShowModal, videoUrl }) => {

  const video = useRef()
  const [video2, setVideo] = useState('')

  useEffect(() => {

    const getVideo = async () => {
      try {
        const { data } = await Action.get(`/about`)
        setVideo(data.data[0].video)
      } catch (error) {

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

  //spiling the url to emded
  const cut = video2.split('=')
  console.log(`https://www.youtube.com/embed/${ cut[1] }`)

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
              <iframe width="100%" height="370" src={ `https://www.youtube.com/embed/${ cut[1] }` }>
              </iframe>
            </div>

          </div>
        </div> : null
      }
    </>
  )
}
export default VideoModal