import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
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
                            <p className='mt-2'>CARE INC SARL est une jeune entreprise camerounaise créée en JUIN 2020, qui a décidé d'accompagner la population africaine dans la lutte contre la propagation du COVID 19</p>
                        </Col>
                        <Col xs="12" md="6" lg="3" className="each-row-f">
                            <h6>Pages</h6>
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
                            <h6>Liens rapides</h6>
                            <ul>
                                <li>
                                    <NavLink to="/shop">Boutique</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cart">Chariot</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"> Accueil</NavLink>
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
                                        <span>Play Store</span>
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