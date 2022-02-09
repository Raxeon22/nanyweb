import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import Modal from "./VideoModal";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [about, setabout] = useState([]);
  const [service, setservice] = useState([]);

  async function fetchaboutdata() {
    const response = await Action.get("/about", {});
    if (response.data.success ===true) {
      setabout(response.data.data[0]);
    } else {
      setabout([]);
    }
  }
  async function fetchservicedata() {
    const res = await Action.get("/Service", {});
    console.log(res);
    if (res.data.success ===true) {
      console.log(res.data.data);
      setservice(res.data.data);
    } else {
      setservice([]);
    }
  }

  useEffect(async () => {
    fetchaboutdata();
    fetchservicedata();
  }, []);
console.log("====================================");
  console.log(service);

  return (
    <Container id="about-us">
      <div className="about-us">
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <Row>
          <Col xs="12" md="6">
            <h3>
              Professional senior care, <br />
              whenever you need it.
            </h3>
            <p>{about.text}</p>
            <Row className="see-our-video">
              <Col
                xs="2"
                className="video-icon text-center"
                onClick={() => {
                  setShowModal((prev) => !prev);
                }}
              >
                <MdOutlineSlowMotionVideo size={35} />
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
                  src={baseURL + service[0].image}
                  height="30%"
                  width="30%"
                />
                <h2>{service[0].heading} </h2>
                {/* <p> { about.txt1 }</p> */}
              </Col>

              <Col xs="5" md="5" className=" each-card py-4 ">
                <img
                  src={baseURL + service[1].image}
                  height="30%"
                  width="30%"
                />
                {/* <h2>100 </h2> */}
                <p> {service[1].heading}</p>
              </Col>

              <Col xs="5" md="5" className=" each-card py-4 ">
                <img
                  src={baseURL + service[2].image}
                  height="30%"
                  width="30%"
                />
                {/* <h2>100 </h2> */}
                <p> {service[2].heading}</p>
              </Col>
              <Col xs="5" md="5" className=" each-card py-4 ">
                <img
                  src={baseURL + service[3].image}
                  height="30%"
                  width="30%"
                />
                {/* <h2>100 </h2> */}
                <p> {service[3].heading}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default Navbar;
