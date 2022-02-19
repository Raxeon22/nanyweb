import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import Logo from "../assets/logoFinal.png";
import { NavLink } from 'react-router-dom';
import { FaApple, FaGooglePlay } from "react-icons/fa";

import Scroll from 'react-scroll';

const ContactUs = () => {

    return (
        <Scroll.Element id="footer" >
            <footer>
                <Container>
                    <Row>
                        <Col xs="12" md="6" lg="3" className="each-row-f">
                            <img src={ Logo } alt="logo" width="160" height="auto" />
                            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto repellat ab Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </Col>
                        <Col xs="12" md="6" lg="3" className="each-row-f">
                            <h6>Support</h6>
                            <ul>
                                <li>
                                    <NavLink to="/policy">Politique de confidentialité</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/terms-condition">Termes et conditions</NavLink>
                                </li>

                            </ul>
                        </Col>
                        <Col xs="12" md="6" lg="3" className="each-row-f">
                            <h6>Sur</h6>
                            <ul>
                                <li>
                                    <NavLink to="/">À propos de nous</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Comment ça fonctionne</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Prestations de service</NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col xs="12" md="6" lg="3" className="each-row-f mt-4">
                            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className="custom-input" type="text" placeholder="Your Email" />

                        </Form.Group>
                        <div style={{textAlign:"end"}}>
                            <Button>
                                Submit
                            </Button>
                        </div> */}
                            <p>Téléchargez notre application..</p>
                            <Row>
                                <Col xs="6" className="my-1 footer-button"  >
                                    <Button variant="light" className=" d-flex w-100 ">
                                        <FaApple size={ 22 } />
                                        <span>Apple Store</span>
                                    </Button>
                                </Col>
                                <Col xs="6" className="my-1 footer-button"  >
                                    <Button className=" d-flex w-100 " variant="light">
                                        <FaGooglePlay size={ 22 } />
                                        <span>Google Store</span>
                                    </Button>
                                </Col>
                            </Row>

                        </Col>
                        <Col xs="12" className="footer-widget">
                            Copyright © 2021 All rights reserved | Raxeon
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Scroll.Element>


    )
}
export default ContactUs; 