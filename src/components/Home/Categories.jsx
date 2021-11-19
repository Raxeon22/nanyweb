import React , {useState} from 'react';
import {Row , Col , Carousel  , Card , Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import HomeApplic from '../../assets/home-applic.jpg'
import HeadPhones from '../../assets/headphones.jpg'
import SelfieStick from '../../assets/selfie-stick.jpg'
import Speakers from '../../assets/speakers.jpg'

 const ProductDetails = [
    {
        title : 'Head Phones' , image : 'https://images.pexels.com/photos/1475418/pexels-photo-1475418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        title : 'Electrons' , image : 'https://images.pexels.com/photos/4417768/pexels-photo-4417768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        title : 'Speakers' , image : 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
   
]
const Shop = () =>{
    return(
       <div className="categories">
            <Container > 
            <h2>Categories </h2>
            <div className="">

            <Carousel  controls={false}>
                <Carousel.Item >
                    <Row >
                       <Col className="each-img" md="5">
                           <div className="img-text">
                           <h4> T-shirts  </h4>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                           </div>
                           <img  width="100%" height="520" src={ProductDetails[0].image} alt="" />
                       </Col>
                       <Col className="each-img" md="4">
                       <div className="img-text">
                           <h4> Sweat Shirts </h4>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                           </div>
                           <img  width="100%" height="520" src={ProductDetails[1].image} alt="" />
                       </Col>
                       <Col className="each-img" md="3">
                           <Row>
                               <Col className="each-img" md="12">
                               <div className="img-text-smol">
                           <h4> Caps </h4>
                           <p>Lorem ipsum dolor sit amet . </p>
                           </div>
                           <img  width="100%" height="250"  src={ProductDetails[2].image} alt="" />
                               </Col>
                               <Col className="each-img" md="12">
                               <div className="img-text-smol">
                           <h4> Others </h4>
                           <p>Lorem ipsum dolor sit amet . </p>
                           </div>
                           <img  width="100%" height="250"  className="mt-3" src={ProductDetails[2].image} alt="" />
                               </Col>
                           </Row>
                       </Col>
                    </Row>
                </Carousel.Item>

               
            </Carousel>
            </div>   
            {/* <div className="d-block d-lg-none">
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
            </div> */}
            </Container>
       </div>
    )
}
export default Shop