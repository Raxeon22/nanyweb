import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Button, Spinner } from "react-bootstrap";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  FaLinkedinIn,
  FaGooglePlusG,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import Scroll from "react-scroll";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";
import { useHistory } from "react-router-dom";

const ContactUs = () => {
  let history = useHistory();

  const [alert, setAlert] = useState("");
  const [spin, setSpin] = useState("Send Message");
  const [contact, setcontact] = useState([]);
  const [data, setdata] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    way_to_use: "",
    message: "",
  });
  const getcontact = async () => {
    const response = await Action.get("/setting", {});
    console.log(response);
    if (response.data.success == true) {
      console.log(response.data.data);
      setcontact(response.data.data[0]);
    } else {
    }
  };
  const postquery = async () => {
    const response = await Action.post("/query", data, {});

    if (response.data.success == true) {
      return setAlert(response.data.message);
    } else {
      return setAlert(response.data.message);
    }
  };

  useEffect(async () => {
    await getcontact();
  }, []);

  return (
    <Scroll.Element id="contact-us">
      <div className="contact-us">
        <Container>
          <h3>Contact Us</h3>
          <p>We will get to you asap!</p>
          <Row className="contact-form mt-5">
            <Col md="4" sm="12" className=" text-dark  contact-details">
              <Row className="each-detail">
                <Col xs="2">
                  <span className="mb-1">
                    <FiPhoneCall size={45} />
                  </span>
                </Col>
                <Col xs="9">
                  <h6>{contact.Phone}</h6>
                </Col>
              </Row>
              <Row className="each-detail">
                <Col xs="2">
                  <span className="mb-1">
                    <FiMail size={45} />
                  </span>
                </Col>
                <Col xs="9">
                  <h6>{contact.Email}</h6>
                </Col>
              </Row>
              <Row className="each-detail">
                <Col xs="2">
                  <span className="mb-1">
                    <HiOutlineLocationMarker size={45} />
                  </span>
                </Col>
                <Col xs="9">
                  <h6>{contact.Address}</h6>
                </Col>
              </Row>
              <div className="contact-footer-icon d-flex">
                <a href={contact.fb} target="_blank">
                  <span className="bg-primary">
                    <FaFacebookF size={25} />
                  </span>
                </a>
                <a href={contact.twitter} target="_blank">
                  <span className="bg-info">
                    <FaTwitter size={25} />
                  </span>
                </a>
                <a href={contact.google} target="_blank">
                  <span className="bg-danger">
                    <FaGooglePlusG size={25} />
                  </span>
                </a>
                <a href={contact.linkedin} target="_blank">
                  <span className="bg-dark">
                    <FaLinkedinIn size={25} />
                  </span>
                </a>
              </div>
            </Col>

            <Col
              xs="12"
              md={{ offset: 2, span: 6 }}
              className="contact-inputs text-right"
            >
              <Form>
                <Row>
                  <Col xs="12" md="6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        className="custom-input"
                        type="text"
                        placeholder="Joe"
                        value={data.first_name}
                        onChange={(e) => {
                          setdata({ ...data, first_name: e.target.value });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12" md="6">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        className="custom-input"
                        type="text"
                        placeholder="Doe"
                        value={data.last_name}
                        onChange={(e) => {
                          setdata({ ...data, last_name: e.target.value });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12" md="6">
                    <Form.Group className="mb-3">
                      <Form.Label>Email </Form.Label>
                      <Form.Control
                        className="custom-input"
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) => {
                          setdata({ ...data, email: e.target.value });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12" md="6">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        className="custom-input"
                        type="number"
                        placeholder="0000000"
                        onChange={(e) => {
                          setdata({ ...data, mobile: e.target.value });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12">
                    <Form.Group className="mb-3">
                      <h6>What is the best way for you to contact us?</h6>
                      <Row className="my-4 check-custom">
                        <Col xs="12" sm="6" md="4">
                          <Form.Check
                            type="checkbox"
                            label="Schedule a Meeting"
                            value="Schedule a Meeting"
                            onClick={(e) => {
                              setdata({
                                ...data,
                                way_to_use: e.target.value,
                              });
                            }}
                          />
                        </Col>
                        <Col xs="12" sm="6" md="4">
                          <Form.Check
                            type="checkbox"
                            label="Schedule a Call"
                            value="Schedule a Call"
                            onClick={(e) => {
                              setdata({
                                ...data,
                                way_to_use: e.target.value,
                              });
                            }}
                          />
                        </Col>
                        <Col xs="12" sm="6" md="4">
                          <Form.Check
                            type="checkbox"
                            label="Come to the Office"
                            value="Come to the Office"
                            onClick={(e) => {
                              setdata({
                                ...data,
                                way_to_use: e.target.value,
                              });
                            }}
                          />
                        </Col>
                      </Row>
                    </Form.Group>
                  </Col>
                  <Col xs="12">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        className="custom-input"
                        onChange={(e) => {
                          setdata({ ...data, message: e.target.value });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12">
                    <Button
                      className="d-flex"
                      variant="primary"
                      type="submit"
                      onClick={(e) => {
                        setSpin(
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            className="mx-4"
                          />
                        );
                        e.preventDefault();
                        setTimeout(() => {
                          setSpin("Send Message");
                          postquery();
                        }, 2000);
                        setTimeout(() => {
                          setdata({ ...data, first_name: " " });
                          setdata({ ...data, last_name: " " });
                          setdata({ ...data, mobile: " " });
                          setdata({ ...data, email: " " });
                          setdata({ ...data, way_to_use: " " });
                          setdata({ ...data, message: " " });
                        }, 3000);
                      }}
                    >
                      {spin}
                    </Button>
                    <small className="text-success mt-2"> {alert} </small>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </Scroll.Element>
  );
};
export default ContactUs;
