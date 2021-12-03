import React, { useState } from 'react';
import {Button , Row , Col , Container , Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ServicesImg1 from '../../assets/service1.jpg'
import ServicesImg2 from '../../assets/service2.png'
import ServicesImg3 from '../../assets/service3.jpg'
import ServicesImg4 from '../../assets/service4.jpg'
import ServicesImg5 from '../../assets/service5.jpg'
import Modal from './ServicesModal'




const Navbar =()=>{
    const [showModal , setShowModal] = useState(false)
    const servicesArrayDesktopSlide1 =[
        {
            image : ServicesImg1,
            heading : 'Babies and Nannies duo',
            paragraph : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita facere praesentium.',
            btnLink : '/'
        },
        {
            image : ServicesImg2,
            heading : 'Babies and Nannies duo',
            paragraph : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita facere praesentium.',
            btnLink : '/'
        }
    ]
    const servicesArrayDesktopSlide2 =[
        {
            image : ServicesImg3,
            heading : 'Babies and Nannies duo',
            paragraph : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita facere praesentium.',
            btnLink : '/'
        },
        {
            image : ServicesImg4,
            heading : 'Babies and Nannies duo',
            paragraph : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita facere praesentium.',
            btnLink : '/'
        }
    ]
    const servicesArrayDesktopSlide3 =[
        {
            image : ServicesImg5,
            heading : 'Babies and Nannies duo',
            paragraph : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita facere praesentium.',
            btnLink : '/'
        }
    ]
    const servicesArrayMobile =[
        {
            image : ServicesImg1,
            heading : 'Babies and Nannies duo',
            paragraph : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita facere praesentium.',
            btnLink : '/'
        },
        {
            image : ServicesImg2,
            heading : 'Babies and Nannies duo',
            paragraph : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita facere praesentium.',
            btnLink : '/'
        },
        {
            image : ServicesImg3,
            heading : 'Babies and Nannies duo',
            paragraph : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita facere praesentium.',
            btnLink : '/'
        },
        {
            image : ServicesImg4,
            heading : 'Babies and Nannies duo',
            paragraph : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita facere praesentium.',
            btnLink : '/'
        },
        {
            image : ServicesImg5,
            heading : 'Babies and Nannies duo',
            paragraph : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita facere praesentium.',
            btnLink : '/'
        },
    ]
    return (
        <div id="services" className="services">
        <Modal showModal={showModal} setShowModal={setShowModal}/>
        <Container> 
            <h2>Explore different types of sitters who provide services for your requirements. </h2>
            <div className="d-none d-lg-block">

            <Carousel  className="services-slider" controls={false}>
                <Carousel.Item >

                    <Row>
                        {servicesArrayDesktopSlide1.map((value , index)=>{
                            return(
                                <Col xs="12" lg="5" className=" each-slide">
                                    
                                    <Row>
                                        <Col xs="5" className="">
                                            <img src={value.image} alt="" height="270" width="100%" />
                                        </Col>
                                        <Col xs="7" className="service-slider-text">
                                            <h5>{value.heading}</h5>
                                            <p>{value.paragraph}</p>
                                            <Link to={value.btnLink}>
                                            <Button  onClick={()=>{
                                                setShowModal(prev => !prev)
                                            }}>view details</Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Col>
                            )
                        })
                        }
                    </Row>

                </Carousel.Item>    
                <Carousel.Item >

                <Row>
                    {servicesArrayDesktopSlide2.map((value , index)=>{
                        return(
                            <Col xs="12" lg="5" className=" each-slide">
                                
                                <Row>
                                    <Col xs="5" className="">
                                        <img src={value.image} alt="" height="270" width="100%" />
                                    </Col>
                                    <Col xs="7" className="service-slider-text">
                                        <h5>{value.heading}</h5>
                                        <p>{value.paragraph}</p>
                                        <Link to={value.btnLink}>
                                        <Button  onClick={()=>{
                                            setShowModal(prev => !prev)
                                        }}>view details</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                        )
                    })
                    }
                </Row>

            </Carousel.Item> 
            <Carousel.Item >

            <Row>
                {servicesArrayDesktopSlide3.map((value , index)=>{
                    return(
                        <Col xs="12" lg="5" className=" each-slide">
                            
                            <Row>
                                <Col xs="5" className="">
                                    <img src={value.image} alt="" height="270" width="100%" />
                                </Col>
                                <Col xs="7" className="service-slider-text">
                                    <h5>{value.heading}</h5>
                                    <p>{value.paragraph}</p>
                                    <Link to={value.btnLink}>
                                    <Button  onClick={()=>{
                                        setShowModal(prev => !prev)
                                    }}>view details</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    )
                })
                }
            </Row>

            </Carousel.Item>    
            </Carousel>
            </div>   
            <div className="d-block d-lg-none">
            <Carousel className="services-slider" controls={true}>

                {
                    servicesArrayMobile.map(( value , index)=>{
                        return(
                            <Carousel.Item key={index} >
                                <Row>
                                    <Col xs="12" lg="5" className=" each-slide">
                                        <Row>
                                            <Col xs="5" className="">
                                                <img src={value.image} alt="" height="270" width="100%" />
                                            </Col>
                                            <Col xs="7" className="service-slider-text">
                                                <h5>{value.heading}</h5>
                                                <p>{value.paragraph}</p>
                                                <Link to={value.btnLink}>
                                                    <Button
                                                      onClick={()=>{
                                                        setShowModal(prev => !prev)
                                                    }}>view details</Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Col>
            
                                </Row>
        
                            </Carousel.Item>
                        )
                    })
                }

               
               
            </Carousel>
            </div>
        </Container>
    </div>
  


    )
}
export default Navbar; 