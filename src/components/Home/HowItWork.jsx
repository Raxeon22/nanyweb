import React, { useEffect, useState } from "react";
import { Row, Col, Container, Spinner } from "react-bootstrap";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";

const HowItWork = () => {
  const [works, setworks] = useState(false);

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
        { works ?
          <>
            <div className="step1 d-none d-lg-block"></div>
            <Row className="text-center">
              { works.map((item, index) => {
                return (
                  <Col className="each-step" xs="12" lg="3" md="6">
                    <img
                      src={ baseURL + item.icon }
                      alt=""
                      height="150"
                      width="150"
                    />
                    <span className="badge">{ index + 1 }</span>
                    <h5>{ item.heading }</h5>
                    <p> { item.text } </p>
                  </Col>
                );
              }) }

            </Row>
          </> : <div className="text-center"><Spinner animation="border" variant="light" /></div> }
      </Container>
    </div>
  );
};
export default HowItWork;
