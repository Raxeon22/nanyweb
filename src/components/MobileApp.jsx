import React from 'react';
import {Button , Row , Col , Tabs , Tab  } from 'react-bootstrap';
import AppThumb from '../assets/app-thumb.png'
import {  FaApple, FaGooglePlay } from "react-icons/fa";



const MobileApp =()=>{

    return (
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
  


    )
}
export default MobileApp; 