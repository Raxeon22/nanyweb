import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Step1 from "../../assets/step1.png";
import Step2 from "../../assets/step2.png";
import Step3 from "../../assets/step3.png";
import Step4 from "../../assets/step4.png";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";

const HowItWork = () => {
  const [works, setworks] = useState([]);
  const [text, settext] = useState();

  async function fetchworkdata() {
    const response = await Action.get("/Work", {});
    if (response.data.success == true) {
      settext(response.data.data[0].text);
      setworks(response.data.data[0].works);
    } else {
      setworks([]);
    }
  }

  useEffect(async () => {
    fetchworkdata();
  });

  return (
    <div id="how-it-works" className="how-it-works">
      <Container>
        <h1>{text}</h1>
        <div className="step1 d-none d-lg-block"></div>
        <Row className="text-center">
          {works.map((item, index) => {
            return (
              <Col className="each-step" xs="12" lg="3" md="6">
                <img
                  src={baseURL + item.icon}
                  alt=""
                  height="130"
                  width="130"
                />
                <span className="badge">{index + 1}</span>
                <h5>{item.text}</h5>
              </Col>
            );
          })}
          {/* <Col className="each-step" xs="12" lg="3" md="6">
            <img src={Step2} alt="" height="130" width="130" />
            <span className="badge">02</span>

            <h5>Join the Network</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, necessitatibus!
            </p>
          </Col>
          <Col className="each-step" xs="12" lg="3" md="6">
            <img src={Step3} alt="" height="130" width="130" />
            <span className="badge">03</span>

            <h5>Join the Network</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, necessitatibus!
            </p>
          </Col>
          <Col className="each-step" xs="12" lg="3" md="6">
            <img src={Step4} alt="" height="130" width="130" />
            <span className="badge">04</span>

            <h5>Join the Network</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, necessitatibus!
            </p>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};
export default HowItWork;
