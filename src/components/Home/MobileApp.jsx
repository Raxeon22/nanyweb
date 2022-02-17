import React, { useState, useEffect } from "react";
import { Button, Row, Col, Tabs, Tab, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";
const MobileApp = () => {
  const [forEmployee, setForEmployee] = useState(false);
  const [forCustomer, setForCustomer] = useState(false);
  const [url, setUrl] = useState({});

  useEffect(() => {
    const getForEmployee = async () => {
      try {
        const { data } = await Action.get("/employer");
        setForEmployee(data.data[0])
      } catch (error) {
        console.log(error)
      }
    };
    getForEmployee()
    const getForCustomer = async () => {
      try {
        const { data } = await Action.get("/customer");
        setForCustomer(data.data[0])
      } catch (error) {
        console.log(error)
      }
    };
    getForCustomer()
    const getAppsURL = async () => {
      try {
        const { data } = await Action.get("/setting");
        setUrl(data.data[0])
      } catch (error) {
        console.log(error)
      }
    };
    getAppsURL()
  }, [])

  return (
    <div id="mob-app" className="mob-app overflow-hidden">
      <Tabs defaultActiveKey="for-customer">
        <Tab eventKey="for-customer" title="For Customer">
          { forCustomer ?
            <Row>
              <Col xs="12" lg="5" md="6" className="tab-text offset-lg-1">
                <span className="meet">meet app</span>
                <h1>Check Our Mobile Application</h1>
                <div className="list-bar">
                  <div class="divider grey"></div>

                  <div class="node green">01</div>
                  <h6>{ forCustomer.heading1 }</h6>
                  <p>
                    { forCustomer.text1 }
                  </p>
                </div>

                <div className="list-bar">
                  <div class="divider grey"></div>
                  <div class="node green">02</div>
                  <h6>{ forCustomer.heading2 }</h6>
                  <p>
                    { forCustomer.text2 }
                  </p>
                </div>

                <div className="list-bar">
                  <div class="divider grey"></div>

                  <div class="node green">03</div>
                  <h6>{ forCustomer.heading3 }</h6>
                  <p>
                    { forCustomer.text3 }
                  </p>
                </div>
                <div className="list-bar">
                  <div class="node green">04</div>
                  <h6>{ forCustomer.heading4 }</h6>
                  <p>
                    { forCustomer.text4 }
                  </p>
                </div>
                <Row>
                  <Col xs="6">
                    <Link to={ url.ios_url }>
                      <Button className="w-100">
                        <Row className="g-0">
                          <Col xs="12" sm="2" className="icon-button mt-md-2">
                            <FaApple size={ 30 } />
                          </Col>
                          <Col sm="8" xs="12" >
                            <span>Download from</span>
                            <h5>Apple Store</h5>
                          </Col>
                        </Row>
                      </Button>
                    </Link>
                  </Col>
                  <Col xs="6">
                    <Link to={ url.android_url }>
                      <Button className="w-100">
                        <Row className="g-0">
                          <Col xs="12" sm="2" className="icon-button mt-md-2 pt-0">
                            <FaGooglePlay size={ 28 } />
                          </Col>
                          <Col sm="8" xs="12">
                            <span>Download from</span>
                            <h5>Play Store</h5>
                          </Col>
                        </Row>
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col xs="12" lg="5" md="6" className="tab-img  offset-lg-1">
                <img src={ baseURL + forCustomer.image } alt="" />
              </Col>
            </Row>
            : <div className="text-center"><Spinner animation="border" variant="dark" /></div> }
        </Tab>
        <Tab eventKey="for-employee" title="For Employee">
          { forEmployee ? <Row>
            <Col xs="12" lg="5" md="6" className="tab-text offset-lg-1">
              <span className="meet">meet app</span>
              <h1>Check Our Mobile Application For Employee</h1>
              <div className="list-bar">
                <div class="divider grey"></div>

                <div class="node green">01</div>
                <h6>{ forEmployee.heading1 }</h6>
                <p>
                  { forEmployee.text1 }
                </p>
              </div>

              <div className="list-bar">
                <div class="divider grey"></div>
                <div class="node green">02</div>
                <h6>{ forEmployee.heading2 }</h6>
                <p>
                  { forEmployee.text2 }
                </p>
              </div>

              <div className="list-bar">
                <div class="divider grey"></div>

                <div class="node green">03</div>
                <h6>{ forEmployee.heading3 }</h6>
                <p>
                  { forEmployee.text3 }
                </p>
              </div>
              <div className="list-bar">
                <div class="node green">04</div>
                <h6>{ forEmployee.heading4 }</h6>
                <p>
                  { forEmployee.text4 }
                </p>
              </div>
              <Row>
                <Col xs="6">
                  <Link to={ url.ios_url }>
                    <Button className="w-100">
                      <Row className="g-0">
                        <Col xs="12" sm="2" className="icon-button  mt-md-2">
                          <FaApple size={ 30 } />
                        </Col>
                        <Col xs="12" sm="8">
                          <span>Download from</span>
                          <h5>Apple Store</h5>
                        </Col>
                      </Row>
                    </Button>
                  </Link>
                </Col>
                <Col xs="6">
                  <Link to={ url.android_url }>
                    <Button className="w-100">
                      <Row className="g-0">
                        <Col xs="3" sm="2" className="icon-button pt-0  mt-md-2">
                          <FaGooglePlay size={ 28 } />
                        </Col>
                        <Col xs="12" sm="8">
                          <span>Download from</span>
                          <h5>Play Store</h5>
                        </Col>
                      </Row>
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col xs="12" lg="5" md="6" className="tab-img  offset-lg-1">
              <img src={ baseURL + forEmployee.image } alt="" />
            </Col>
          </Row>
            : <div className="text-center"><Spinner animation="border" variant="dark" /></div> }
        </Tab>
      </Tabs>
    </div>
  );
};
export default MobileApp;
