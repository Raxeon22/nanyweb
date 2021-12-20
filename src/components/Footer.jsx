import React from 'react';
import { Row , Col , Container , Form , Button } from 'react-bootstrap';
import Logo2 from '../assets/logoFinal.png';
import {NavLink} from 'react-router-dom';
import { FaApple, FaGooglePlay } from "react-icons/fa";

import Scroll from 'react-scroll';

const ContactUs =()=>{
 
    return (
        <Scroll.Element id="footer" >
        <footer>
            <Container>
                <Row>
                    <Col xs="12" md="6" lg="3" className="each-row-f">
                        <img src={Logo2} alt="logo" width="160" height="auto"  />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto repellat ab Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </Col>
                    <Col xs="12" md="6" lg="3" className="each-row-f">
                        <h6>Support</h6>
                        <ul>
                            <li>
                              <NavLink to="/policy">Privacy policy</NavLink>
                            </li>
                            <li>
                             <NavLink to="/terms">Terms and Conditions</NavLink>
                            </li>

                        </ul>
                    </Col>
                    <Col xs="12" md="6" lg="3" className="each-row-f">
                        <h6>About</h6>
                        <ul>
                            <li>
                              <NavLink to="#">About us</NavLink>
                            </li>
                            <li>
                             <NavLink to="#">How it works</NavLink>
                            </li>
                            <li>
                             <NavLink to="#">Services</NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col xs="12" md="6" lg="3" className="each-row-f">
                       {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className="custom-input" type="text" placeholder="Your Email" />

                        </Form.Group>
                        <div style={{textAlign:"end"}}>
                            <Button>
                                Submit
                            </Button>
                        </div> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minus perspiciatis neque odio iste eius rerum molestias voluptate, eaque veritatis ipsa debitis.</p>
                        <Row>
                            <Col xs="6" className="my-1 footer-button"  >
                                <Button variant="light" className=" d-flex w-100 ">
                                    <FaApple size={22}/>
                                    <span>Apple Store</span>
                                </Button>
                            </Col>
                            <Col xs="6" className="my-1 footer-button"  >
                                <Button className=" d-flex w-100 "  variant="light">
                                    <FaGooglePlay size={22}/>
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