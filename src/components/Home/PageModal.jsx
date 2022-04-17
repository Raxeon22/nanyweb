import React, { useEffect, useRef, useState } from "react";
import "../../css/Modals.css";
import Action from '../../middleware/API'
import BaseUrl from '../../middleware/BaseURL'

const PageModal = ({ showModal, setShowModal }) => {
  const popup = useRef(null);
  const [popimg, setpopimg] = useState();


  useEffect(() => {
    const handleEvent = (e) => {
      if (popup.current && !popup.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    const getpopimg = async () => {
      try {
        const { data } = await Action.get("/banner/market?lang=French", {});
        setpopimg(data.data[0])
      } catch (e) {
        console.log(e)
      }
    }

    getpopimg();
    document.addEventListener("mousedown", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
    };

  }, []);

  return (
    <>
      { showModal && popimg?.is_shown ? (
        <div className="modal">
          <div
            ref={ popup }
            className="modal-popup animate__animated animate__slideInDown"
          >
            <div>
              <span
                aria-hidden={ true }
                className="float-end px-2 "
                onClick={ () => {
                  setShowModal((prev) => !prev);
                } }
              >
                &times;
              </span>
            </div>
            <div className="popup text-center">
              <img src={ BaseUrl + popimg.image } alt="" width="300" height="360" />
              {/* <br />
              <div className="float-end mt-3">
                <Button>get a clue</Button>
              </div> */}
            </div>
          </div>
        </div>
      ) : null }
    </>
  );
};
export default PageModal;
