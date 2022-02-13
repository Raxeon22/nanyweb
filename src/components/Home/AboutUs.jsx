import React, { useEffect, useState } from "react";
import { Row, Col, Container, Spinner } from "react-bootstrap";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import Modal from "./VideoModal";
import Action from "../../middleware/API";
import parse from 'html-react-parser'
import baseURL from "../../middleware/BaseURL";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [about, setabout] = useState(false);

  async function fetchaboutdata() {
    const response = await Action.get("/about", {});
    if (response.data.success === true) {
      setabout(response.data.data[0]);
    } else {
      setabout([]);
    }
  }

  useEffect(() => {
    fetchaboutdata();
  });
  console.log(about)
  return (
    <Container id="about-us">
      <div className="about-us">
        <Modal showModal={ showModal } setShowModal={ setShowModal } videoUrl={ about.video } />

        {
          about ?
            <Row>
              <Col xs="12" md="6">
                <h3>
                  Professional senior care, <br />
                  whenever you need it.
                </h3>
                <p>{ parse(about.text) }</p>
                <Row className="see-our-video">
                  <Col
                    xs="2"
                    className="video-icon text-center"
                    onClick={ () => {
                      setShowModal((prev) => !prev);
                    } }
                  >
                    <MdOutlineSlowMotionVideo size={ 35 } />
                  </Col>
                  <Col xs="9" className="video-text">
                    see our video
                  </Col>
                </Row>
              </Col>
              <Col xs="12" md="6">
                <Row className="text-center about-cards justify-content-center">
                  <Col xs="5" md="5" className=" each-card py-4 ">
                    <img
                      src={ baseURL + about.img1 }
                      alt="icon"
                      height="90"
                      width="90"
                    />
                    <h2>{ about.heading1 }</h2>
                    <p>{ about.txt1 } </p>
                  </Col>

                  <Col xs="5" md="5" className=" each-card py-4 ">
                    <img src={ baseURL + about.img2 } alt="icon" height="90" width="90" />
                    <h2>{ about.heading2 }</h2>
                    <p> { about.txt2 }</p>
                  </Col>

                  <Col xs="5" md="5" className=" each-card py-4 ">
                    <img src={ baseURL + about.img3 } alt="icon" height="90" width="90" />
                    <h2>{ about.heading3 }</h2>
                    <p> { about.txt3 }</p>
                  </Col>
                  <Col xs="5" md="5" className=" each-card py-4 ">
                    <img src={ baseURL + about.img4 } alt="icon" height="90" width="90" />
                    <h2>{ about.heading4 }</h2>
                    <p> { about.txt4 }</p>
                  </Col>
                </Row>
              </Col>
            </Row> : <div className="text-center"><Spinner animation="grow" variant="dark" /></div>
        }

      </div>
    </Container>
  );
};
export default Navbar;
