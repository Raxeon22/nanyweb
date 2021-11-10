import React from 'react';
import {Row , Col , Carousel , Container } from 'react-bootstrap';
import { FaHeartbeat , FaPrayingHands, FaPeopleCarry , FaApple, FaGooglePlay , FaLinkedinIn, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import Step1 from '../assets/step1.png'
import Step2 from '../assets/step2.png'
import Step3 from '../assets/step3.png'
import Step4 from '../assets/step4.png'


const HowItWork =()=>{
    return (
        <div id="how-it-works" className="how-it-works">
        <Container>
            <h1>How it Works</h1>
            <div className="step1 d-none d-lg-block">

            </div>
              <Row className="text-center">

                <Col className="each-step" xs="12" lg="3" md="6" >
                    <img src={Step1}  alt="" height="130" width="130" />
                    <span className="badge">01</span>
                    <h5>Join the Network</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, necessitatibus!</p>
                </Col>
                <Col className="each-step" xs="12" lg="3" md="6" >
                    <img src={Step2}  alt="" height="130" width="130" />
                    <span className="badge">02</span>

                    <h5>Join the Network</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, necessitatibus!</p>
                </Col>
                <Col className="each-step" xs="12" lg="3" md="6" >
                    <img src={Step3}  alt="" height="130" width="130" />
                    <span className="badge">03</span>

                    <h5>Join the Network</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, necessitatibus!</p>
                </Col>
                <Col className="each-step" xs="12" lg="3" md="6" >
                    <img src={Step4}  alt="" height="130" width="130" />
                    <span className="badge">04</span>

                    <h5>Join the Network</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, necessitatibus!</p>
                </Col>
              </Row>
        </Container>
      </div>
    )
}
export default HowItWork; 