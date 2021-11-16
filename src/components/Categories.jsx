import React , {useState} from 'react';
import {Row , Col , Carousel  , Card , Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import HomeApplic from '../assets/home-applic.jpg'
import HeadPhones from '../assets/headphones.jpg'
import SelfieStick from '../assets/selfie-stick.jpg'
import Speakers from '../assets/speakers.jpg'

export const ProductDetails = [
    {
        title : 'Head Phones' , image : HeadPhones
    },
    {
        title : 'Electrons' , image : SelfieStick
    },
    {
        title : 'Speakers' , image : Speakers
    },
   
]
const Shop = () =>{
    return(
       <div className="categories">
            <Container> 
            <h2>Categories </h2>
            <div className="d-none d-lg-block">

            <Carousel  controls={true}>
                <Carousel.Item >
                    <Row>
                {
                    ProductDetails.map((val , index)=>{
                      return(
                        
                            

                           <Col xs="12" md="4" key={index}>
                                <Link to="/shop">
                                    <Card className="each-product">
                                        <Card.Img variant="top" />
                                        <img src={val.image} width="100%" height="280" />
                                        <Card.Body>
                                            <Card.Title> {val.title} </Card.Title>
                                        </Card.Body>
                                    </Card> 
                                </Link>
                            </Col>)
                    })
                } 
                </Row>
                </Carousel.Item>

               
            </Carousel>
            </div>   
            <div className="d-block d-lg-none">
            <Carousel  className="services-slider" controls={false}>
                {
                    ProductDetails.map((val , index)=>{
                      return(
                        <Carousel.Item >

                           <Col xs="12" md="4" key={index}>
                                <Link to="/shop">
                                    <Card className="each-product">
                                        <Card.Img variant="top" />
                                        <img src={val.image} width="100%" height="280" />
                                        <Card.Body>
                                            <Card.Title> {val.title} </Card.Title>
                                        </Card.Body>
                                    </Card> 
                                </Link>
                            </Col>

                            
    
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
export default Shop