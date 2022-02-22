import React, { useEffect, useRef } from "react";
import Banner from '../../assets/marketBanner.jpg'
import "../../css/Modals.css";

const PageModal = ({ showModal, setShowModal }) => {
  const popup = useRef(null);
  // const [popimg, setpopimg] = useState();
  // const getpopimg = async () => {
  //   try {
  //     const action = await Action.get("/splashscreen", {});

  //     if (action.data.success == true) {

  //       setpopimg(action.data.data[0].image);
  //     } else {
  //       // setcategory([]);
  //     }
  //   } catch (e) {}
  // };

  useEffect(() => {
    const handleEvent = (e) => {
      if (popup.current && !popup.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    // getpopimg();
    document.addEventListener("mousedown", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
    };
  });

  return (
    <>
      { showModal ? (
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
              <img src={ Banner } alt="" width="300" height="360" />
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
