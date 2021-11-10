import React , {useState} from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import AboutUs from '../../components/AboutUs'
import Services from '../../components/Services'
import HowItWork from '../../components/HowItWork'

import {Button , Row , Col , Nav , Container , Carousel , Tabs , Tab , Collapse , Form } from 'react-bootstrap';
import BabyIcon from '../../assets/baby-icon.png';
import Logo from '../../assets/logo2.png';
import Banner1 from '../../assets/banner-one.jpg'
import Banner2 from '../../assets/banner-two.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import AppThumb from '../../assets/app-thumb.png'
import '../../css/Home.css'
import FAQ from '../../assets/faq-bg.jpg';
import {HiOutlineLocationMarker } from "react-icons/hi";
import { FaHeartbeat , FaPrayingHands, FaPeopleCarry , FaApple, FaGooglePlay , FaLinkedinIn, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import {FiPhoneCall  , FiMail ,  FiFacebook , FiInstagram , FiTwitter, FiLinkedin} from "react-icons/fi";
import {AiOutlineMinus , AiOutlinePlus} from "react-icons/ai";
import ServicesImg1 from '../../assets/services-img1.jpg'

import Map from '../../components/GoogleMap'
import Scroll from 'react-scroll';
let ScrollLink = Scroll.Link;



const Home = () => {

 const [showNav , setShowNav] = useState(false);    
 const [faqOpen , setFaqOpen] = useState(false);
 const [faqOpen2 , setFaqOpen2] = useState(false);
 const [faqOpen3 , setFaqOpen3] = useState(false);
 const [faqOpen4 , setFaqOpen4] = useState(false);
 const [faqOpen5 , setFaqOpen5] = useState(false);
 const FaqContent = [{
    question : 'How long This Site live?',
    answer : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.',
    state : faqOpen,
    setState : setFaqOpen
 },
 {
    question : 'Can I install anything i want on there?',
    answer : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.',
    state : faqOpen2,
    setState : setFaqOpen2
 },
 {
    question : 'Can i change the domain you me?',
    answer : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.',
    state : faqOpen3,
    setState : setFaqOpen3
 },
 {
    question : 'How can I migrate to another site?',
    answer : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.',
    state : faqOpen4,
    setState : setFaqOpen4
 },
 {
    question : 'How many sites i can create at once?',
    answer : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.',
    state : faqOpen5,
    setState : setFaqOpen5
 }
]
    return(
        
        <div id="navBanner" >

          <Navbar/>

          <Banner/>

          <AboutUs/>
        
          <Services/>
          
          <HowItWork/>
            

            <div id="mob-app" className="mob-app overflow-hidden">


                <Tabs defaultActiveKey="for-customer" >
                    <Tab eventKey="for-customer" title="For Customer">
                        <Row >
                            <Col xs="12" lg="5" md="6" className="tab-text offset-lg-1">
                                <span className="meet">meet app</span>
                                <h1>Check Our Mobile Application</h1>
                                <div className="list-bar">
                                    <div class="divider grey"></div>

                                    <div class="node green">01</div>
                                    <h6>easy searching</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eum, quaerat omnis doloribus ipsa eaque fuga molestiae ex voluptatibus nam.</p>
                                </div>

                                <div className="list-bar">
                                    <div class="divider grey"></div>
                                    <div class="node green">02</div>
                                    <h6>easy searching</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eum, quaerat omnis doloribus ipsa eaque fuga molestiae ex voluptatibus nam.</p>
                                </div>

                                <div className="list-bar">
                                    <div class="node green">03</div>
                                    <h6>easy searching</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eum, quaerat omnis doloribus ipsa eaque fuga molestiae ex voluptatibus nam.</p>
                                </div>
                                <Row>
                                    <Col xs='6'>
                                        <Button className="w-100">
                                           <Row className="g-0">
                                               <Col xs="3" className="icon-button">
                                                   <FaApple size={35}/>
                                               </Col>
                                               <Col xs="8">
                                                   <span>Download from</span>
                                                   <h5>Apple Store</h5>
                                               </Col>
                                           </Row>
                                        </Button>

                                    </Col>
                                    <Col xs='6'>
                                        <Button className="w-100">
                                            <Row className="g-0">
                                               <Col xs="3" className="icon-button pt-1">
                                                   <FaGooglePlay size={33}/>
                                               </Col>
                                               <Col xs="8">
                                                   <span>Download from</span>
                                                   <h5>Apple Store</h5>
                                               </Col>
                                           </Row>
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="12" lg="5" md="6" className="tab-img  offset-lg-1">
                                <img src={AppThumb} alt="" />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="for-employee" title="For Employee">
                    <Row >
                            <Col xs="12" lg="5" md="6" className="tab-text offset-lg-1">
                                <span className="meet">meet app</span>
                                <h1>Check Our Mobile Application For Employee</h1>
                                <div className="list-bar">
                                    <div class="divider grey"></div>

                                    <div class="node green">01</div>
                                    <h6>easy searching</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eum, quaerat omnis doloribus ipsa eaque fuga molestiae ex voluptatibus nam.</p>
                                </div>

                                <div className="list-bar">
                                    <div class="divider grey"></div>
                                    <div class="node green">02</div>
                                    <h6>easy searching</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eum, quaerat omnis doloribus ipsa eaque fuga molestiae ex voluptatibus nam.</p>
                                </div>

                                <div className="list-bar">
                                    <div class="node green">03</div>
                                    <h6>easy searching</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eum, quaerat omnis doloribus ipsa eaque fuga molestiae ex voluptatibus nam.</p>
                                </div>
                                <Row>
                                    <Col xs='6'>
                                        <Button className="w-100">
                                           <Row className="g-0">
                                               <Col xs="3" className="icon-button">
                                                   <FaApple size={35}/>
                                               </Col>
                                               <Col xs="8">
                                                   <span>Download from</span>
                                                   <h5>Apple Store</h5>
                                               </Col>
                                           </Row>
                                        </Button>

                                    </Col>
                                    <Col xs='6'>
                                        <Button className="w-100">
                                            <Row className="g-0">
                                               <Col xs="3" className="icon-button pt-1">
                                                   <FaGooglePlay size={33}/>
                                               </Col>
                                               <Col xs="8">
                                                   <span>Download from</span>
                                                   <h5>Apple Store</h5>
                                               </Col>
                                           </Row>
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="12" lg="5" md="6" className="tab-img  offset-lg-1">
                                <img src={AppThumb} alt="" />
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>


            </div>

            <div id="faq" className="faq">
                <Container>
                    <Row>
                        <Col xs="12" md="6">
                            <img src={FAQ} alt="" width="100%" height="500" />
                        </Col>
                        <Col xs="12" md="6" className="heading" >
                            <strong >FAQ</strong>

                            <div className="Qsection">
                                {FaqContent.map(( val , index)=>{
                                return (
                                 <div className="eachQ " onClick={()=> val.setState(!val.state)} aria-expanded={val.state}>
                                 <h6 className="font-bolder"> {val.question} <span className="float-end">{ val.state ? <AiOutlineMinus size={23}/> : <AiOutlinePlus size={23}/> } </span></h6> 

                                    <Collapse in={val.state} >
                                        <div className="">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.</p>
                                        </div>
                                    </Collapse>

                                </div>)
                                })}





                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
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
                                                <Form.Check type="checkbox" label="web design" />
                                                </Col>
                                                <Col  xs="12" sm="6" md="4">
                                                <Form.Check type="checkbox" label="web design" />
                                                </Col>
                                                <Col  xs="12" sm="6" md="4">
                                                <Form.Check type="checkbox" label="web design" />
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
                                            <Col xs="12" style={{textAlign:"end"}}>
                                                <Button variant="primary" type="submit">
                                                   Send message
                                                </Button>
                                            </Col>
                                        </Row>





                                    </Form>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    </Container>
                    <div className="map d-none d-lg-block">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10203.369712058646!2d-109.1695167545078!3d51.46931049245444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x530e4005679914b5%3A0x794e319962187ba9!2sTravelodge%20by%20Wyndham%20Kindersley!5e0!3m2!1sen!2s!4v1635936099584!5m2!1sen!2s" width="100%" height="100%"  allowfullscreen="" loading="lazy"></iframe>
                    </div>

                </div>
            </Scroll.Element >
            <Scroll.Element id="footer" >
                <footer>
                    <Container>
                        <Row>
                            <Col xs="12" md="6" lg="3" className="each-row-f">
                                <img src={Logo} alt="logo" width="180" height="160"  />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto repellat ab Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </Col>
                            <Col xs="12" md="6" lg="3" className="each-row-f">
                                <h6>Support</h6>
                                <ul>
                                    <li>
                                      <NavLink to="#">Privacy policy</NavLink>
                                    </li>
                                    <li>
                                     <NavLink to="#">Terms and Conditions</NavLink>
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
                               <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control className="custom-input" type="text" placeholder="Your Email" />

                                </Form.Group>
                                <div style={{textAlign:"end"}}>
                                    <Button>
                                        Submit
                                    </Button>
                                </div>
                                <Row>
                                    <Col xs="6" className="my-3 footer-button"  >
                                        <Button variant="light" className=" d-flex w-100 ">
                                            <FaApple size={22}/>
                                            <span>Apple Store</span>
                                        </Button>
                                    </Col>
                                    <Col xs="6" className="my-3 footer-button"  >
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


        </div>
    )
}
export default Home 