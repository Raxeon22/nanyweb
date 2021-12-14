import React, {useState} from 'react';
import { Row , Col , Container ,Form , Button, Spinner } from 'react-bootstrap';
import {HiOutlineLocationMarker } from "react-icons/hi";


import {  FaLinkedinIn} from "react-icons/fa";
import {FiPhoneCall  , FiMail ,  FiFacebook , FiInstagram , FiTwitter} from "react-icons/fi";
import Scroll from 'react-scroll';

const ContactUs =()=>{
    const [alert, setAlert] = useState('')
    const [spin, setSpin] =  useState('Send Message' )


    return (
        <Scroll.Element id="contact-us" >
        <div className="contact-us">
            <Container>
            <Row className="contact-form justify-content-end">
                <Col md="12" lg="8" xs="12" className=" text-light">
                    <Row>
                        <Col xs="12" md="5" className="contact-details">
                            <h4>Contact Information</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, expedita quam laboriosam minima enim officia.</p>
                            <b className="d-flex"> <span className="mb-1" ><FiPhoneCall size={23}/>  </span>02232613728 </b>
                            <b className="d-flex"> <span className="mb-1"><FiMail size={23}/>  </span>helloworld@gmail.com</b>
                            <b className="d-flex"> <span className="mb-1"><HiOutlineLocationMarker size={23}/>  </span>103 street new york </b>

                            <div className="contact-footer-icon d-flex">
                                <span ><FiFacebook size={22} />  </span>
                                <span ><FiInstagram size={22} />  </span>
                                <span ><FiTwitter size={22} />  </span>
                                <span ><FaLinkedinIn size={22} />  </span>
                            </div>
                        </Col>
                        <Col xs="12"md="7" className="contact-inputs ">
                            <Form>
                                <Row>
                                    <Col xs="12" md="6">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control className="custom-input" type="text" placeholder="Joe" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="12" md="6">
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control className="custom-input" type="text" placeholder="Doe" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="12" md="6">
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Email </Form.Label>
                                            <Form.Control className="custom-input" type="email" placeholder="Enter email" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="12" md="6">
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control className="custom-input" type="number" placeholder="0000000" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="12">
                                    <Form.Group className="mb-3" >
                                     <h6>What web do you use?</h6>
                                     <Row className="my-4 check-custom">
                                        <Col  xs="12" sm="6" md="4">
                                        <Form.Check type="checkbox" label="Schedule a Meeting" />
                                        </Col>
                                        <Col  xs="12" sm="6" md="4">
                                        <Form.Check type="checkbox" label="Schedule a Call" />
                                        </Col>
                                        <Col  xs="12" sm="6" md="4">
                                        <Form.Check type="checkbox" label="Come to the Office" />
                                        </Col>


                                     </Row>

                                    </Form.Group>
                                    </Col>
                                    <Col xs="12">
                                       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} className="custom-input" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="12">
                                        <Button className="d-flex" variant="primary" type="submit" onClick={(e)=>{ 
                                            setSpin( <Spinner as="span" animation="border" size="sm" role="status" className='mx-4'/>)
                                            e.preventDefault()
                                            setTimeout(()=> {
                                                setSpin( 'Send Message') 
                                                setAlert('Message Sent Successfully...')
                                            }, 2000 )
                                            setTimeout(()=>{
                                                setAlert('')
                                            }, 3000)
                                        }
                                        }>
                                           {spin}
                                          
                                        </Button>
                                        <small className='text-success mt-2'> {alert} </small>
                                    </Col>
                                </Row>
                            </Form>

                        </Col>
                    </Row>
                </Col>
            </Row>
            </Container>
            <div className="map d-none d-lg-block">
              <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10203.369712058646!2d-109.1695167545078!3d51.46931049245444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x530e4005679914b5%3A0x794e319962187ba9!2sTravelodge%20by%20Wyndham%20Kindersley!5e0!3m2!1sen!2s!4v1635936099584!5m2!1sen!2s" width="100%" height="100%"   loading="lazy"></iframe>
            </div>

        </div>
    </Scroll.Element >
    )
}
export default ContactUs;