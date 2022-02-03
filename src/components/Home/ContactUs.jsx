import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Button, Spinner } from "react-bootstrap";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaGooglePlusG, FaFacebookF, FaTwitter } from "react-icons/fa";
import {
  FiPhoneCall,
  FiMail,
} from "react-icons/fi";
import Scroll from "react-scroll";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";

const ContactUs = () => {
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
    console.log(response)
    if (response.data.success == true) {

      setcontact(response.data.data);
    } else {
    }
  };
  const postquery = async () => {

    const response = await Action.post("/query", data, {});

    // if (response.data.success == true) {
    // } else {
    // }
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
                    <FiPhoneCall size={ 45 } />
                  </span>
                </Col>
                <Col xs="9">
                  <h6>Call us</h6>
                  <b className="">
                    { contact.Phone }
                  </b>
                </Col>

              </Row>
              <Row className="each-detail">
                <Col xs="2">
                  <span className="mb-1">
                    <FiMail size={ 45 } />
                  </span>
                </Col>
                <Col xs="9">
                  <h6>Email us</h6>
                  <b className="">
                    { contact.Email }
                  </b>
                </Col>

              </Row>
              <Row className="each-detail">
                <Col xs="2">
                  <span className="mb-1">
                    <HiOutlineLocationMarker size={ 45 } />
                  </span>
                </Col>
                <Col xs="9">
                  <h6>Address</h6>
                  <b className="">
                    { contact.Address }
                  </b>
                </Col>

              </Row>
              <div className="contact-footer-icon d-flex">
                <a href={ contact.fb } target="_blank">
                  <span className="bg-primary">
                    <FaFacebookF size={ 25 } />
                  </span>
                </a>
                <a href={ contact.twitter } target="_blank">
                  <span className="bg-info">
                    <FaTwitter size={ 25 } />
                  </span>
                </a>
                <a href={ contact.google } target="_blank">
                  <span className="bg-danger">
                    <FaGooglePlusG size={ 25 } />
                  </span>
                </a>
                <a href={ contact.linkedin } target="_blank">
                  <span className="bg-dark">
                    <FaLinkedinIn size={ 25 } />
                  </span>
                </a>
              </div>
            </Col>

            <Col xs="12" md={ { offset: 2, span: 6 } } className="contact-inputs text-right">
              <Form>
                <Row>
                  <Col xs="12" md="6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        className="custom-input"
                        type="text"
                        placeholder="Joe"
                        onChange={ (e) => {
                          setdata({ ...data, first_name: e.target.value });
                        } }
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12" md="6">
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        className="custom-input"
                        type="text"
                        placeholder="Doe"
                        onChange={ (e) => {
                          setdata({ ...data, last_name: e.target.value });
                        } }
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
                        onChange={ (e) => {
                          setdata({ ...data, email: e.target.value });
                        } }
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12" md="6">
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        className="custom-input"
                        type="number"
                        placeholder="0000000"
                        onChange={ (e) => {

                          setdata({ ...data, mobile: e.target.value });
                        } }
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
                            onClick={ (e) => {
                              setdata({
                                ...data,
                                way_to_use: e.target.value,
                              });
                            } }
                          />
                        </Col>
                        <Col xs="12" sm="6" md="4">
                          <Form.Check
                            type="checkbox"
                            label="Schedule a Call"
                            value="Schedule a Call"
                            onClick={ (e) => {
                              setdata({
                                ...data,
                                way_to_use: e.target.value,
                              });
                            } }
                          />
                        </Col>
                        <Col xs="12" sm="6" md="4">
                          <Form.Check
                            type="checkbox"
                            label="Come to the Office"
                            value="Come to the Office"
                            onClick={ (e) => {
                              setdata({
                                ...data,
                                way_to_use: e.target.value,
                              });
                            } }
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
                        rows={ 3 }
                        className="custom-input"
                        onChange={ (e) => {
                          setdata({ ...data, message: e.target.value });
                        } }
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12">
                    <Button
                      className="d-flex"
                      variant="primary"
                      type="submit"
                      onClick={ (e) => {

                        postquery();
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
                          setAlert("Message Sent Successfully...");
                        }, 2000);
                        setTimeout(() => {
                          setAlert("");
                        }, 3000);
                      } }
                    >
                      { spin }
                    </Button>
                    <small className="text-success mt-2"> { alert } </small>
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
