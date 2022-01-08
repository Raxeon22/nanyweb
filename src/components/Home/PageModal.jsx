import React, { useEffect, useState, useRef } from "react";

import { Card, Container, Button } from "react-bootstrap";
import "../../css/Modals.css";
import PopupImg from "../../assets/topimg.jpg";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";

const PageModal = ({ showModal, setShowModal }) => {
  const popup = useRef(null);
  const [popimg, setpopimg] = useState();
  const getpopimg = async () => {
    try {
      const action = await Action.get("/splashscreen", {});

      if (action.data.success == true) {
        
        setpopimg(action.data.data[0].image);
      } else {
        // setcategory([]);
      }
    } catch (e) {}
  };
  
  useEffect(() => {
    const handleEvent = (e) => {
      if (popup.current && !popup.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    getpopimg();
    document.addEventListener("mousedown", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
    };
  });

  return (
    <>
      {showModal ? (
        <div className="modal">
          <div
            ref={popup}
            className="modal-popup animate__animated animate__slideInDown"
          >
            <div>
              <span
                aria-hidden={true}
                className="float-end px-2 "
                onClick={() => {
                  setShowModal((prev) => !prev);
                }}
              >
                &times;
              </span>
            </div>
            <div className="popup text-center">
              <img src={baseURL + popimg} alt="" width="300" height="360" />
              <br />
              <div className="float-end mt-3">
                <Button>get a clue</Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default PageModal;
