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

  async function fetchworkdata() {
    const response = await Action.get("/Work", {});
    if (response.data.success == true) {
      setworks(response.data.data);
    } else {
      setworks([]);
    }
  }

  useEffect(async () => {
    fetchworkdata();
  }, []);

  return (
    <div id="how-it-works" className="how-it-works">
      <Container>
        <h1>How It Works</h1>
        <div className="step1 d-none d-lg-block"></div>
        <Row className="text-center">
          {!works?null:works.map((item, index) => {
            return (
              <Col className="each-step" xs="12" lg="3" md="6">
                <img
                  src={ baseURL + item.icon }
                  alt=""
                  height="130"
                  width="130"
                />
                <span className="badge">{ index + 1 }</span>
                <h5>{ item.heading }</h5>
                <p> { item.text } </p>
              </Col>
            );
          }) }

        </Row>
      </Container>
    </div>
  );
};
export default HowItWork;
