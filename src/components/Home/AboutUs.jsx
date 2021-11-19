import React, { useState } from 'react';
import { FaHeartbeat , FaPrayingHands, FaPeopleCarry } from "react-icons/fa";
import { Row , Col , Container } from 'react-bootstrap';
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import Modal from './VideoModal'

import { GiEarthAfricaEurope } from "react-icons/gi";

const AboutCards = [
    {
    icon: < GiEarthAfricaEurope size={45}/>,
    number : 100,
    text : 'Local Partners'
   },
   {
    icon:  <FaHeartbeat size={45}/>,
    number : 100,
    text : 'Local Partners'
   },
   {
    icon:  <FaPeopleCarry size={45}/>,
    number : 100,
    text : 'Local Partners'
   },
   {
    icon:  <FaPrayingHands size={45}/>,
    number : 100,
    text : 'Local Partners'
   },
]

const Navbar =()=>{
    const [showModal , setShowModal] = useState(false)
    return (

        <Container id="about-us">
            <div className="about-us">
                <Modal showModal={showModal} setShowModal={setShowModal}  />
                <Row>
                    <Col xs="12" md="6">
                        <h3>
                            Professional senior care, <br/>
                            whenever you need it.
                        </h3>
                        <h6>
                            we this is perhaps the single biggest obstacle that <br/>
                            all of us must overcome successful.
                        </h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Molestiae corporis, recusandae nobis qui repudiandae nam sint hic? Minus sed doloremque neque aspernatur ad ut
                            accusantium consectetur maxime unde aliquid hic illum tenetur blanditiis non, voluptatem repellat eum veritatis velit 
                            corporis provident doloribus voluptate repellendus eaque? Nostrum distinctio veniam sit expedita.
                        </p>
                        <Row className="see-our-video">
                            <Col xs="2" className="video-icon text-center"
                             onClick={()=>{
                                 setShowModal(prev => !prev)
                             }}>
                                <MdOutlineSlowMotionVideo size={35}/>
                            </Col>
                            <Col xs="9" className="video-text">see our video</Col>
                        </Row>


                    </Col>
                    <Col xs="12" md="6">
                        <Row className="text-center about-cards justify-content-center">
                            {
                                AboutCards.map((val , index)=>{
                                    return(
                                        <Col xs="5" md="5" className=" each-card py-4 "> 
                                         {val.icon}
                                        <h2> {val.number} </h2>
                                        <p> {val.text}</p>
                                        </Col>
                                    )
                                })
                            }

                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>


    )
}
export default Navbar; 