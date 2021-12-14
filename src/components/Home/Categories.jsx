import React , {useState} from 'react';
import {Row , Col , Carousel  , Card , Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import HomeApplic from '../../assets/home-applic.jpg'
import HeadPhones from '../../assets/headphones.jpg'
import SelfieStick from '../../assets/selfie-stick.jpg'
import Speakers from '../../assets/speakers.jpg'
import {RiTShirt2Line} from 'react-icons/ri'
import {GiMonclerJacket , GiBilledCap, GiPoloShirt, GiJewelCrown} from 'react-icons/gi'

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
const bleh = <b><RiTShirt2Line size="30"/>T Shirts</b> 

const Shop = () =>{
    return(
       <div className="categories">
            <Container > 
            <h2>Categories </h2>
            <div className="">
            <div className="cate-tabs d-none d-lg-block">
               
                <Carousel  indicators={false} controls={false} interval={2000} >
                <Carousel.Item >
                    <Row >
                       <Col className="each-img" md="3">
                           <div className="img-text">
                           <h4> T-shirts  </h4>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                           </div>
                           <img  width="100%" height="400" src={ProductDetails[0].image} alt="" />
                       </Col>
                       <Col className="each-img" md="3">
                       <div className="img-text">
                           <h4> Sweat Shirts </h4>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                           </div>
                           <img  width="100%" height="400" src={ProductDetails[1].image} alt="" />
                       </Col>
                       <Col className="each-img" md="3">
                       <div className="img-text">
                           <h4> Sweat Shirts </h4>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                           </div>
                           <img  width="100%" height="400" src={ProductDetails[1].image} alt="" />
                       </Col>
                       <Col className="each-img" md="3">
                       <div className="img-text">
                           <h4> Sweat Shirts </h4>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                           </div>
                           <img  width="100%" height="400" src={ProductDetails[1].image} alt="" />
                       </Col>
                    </Row>
                </Carousel.Item>
               

               
            </Carousel>
                   
            </div>

           
            </div>
            {/* categories for mobile   */}
            <div className="d-block d-lg-none">
            <Carousel  className="cate-tabs" >
                {
                    ProductDetails.map((val , index)=>{
                      return(
                        <Carousel.Item >

                            <Row >
                                <Col className="each-img" md="3">
                                    <div className="img-text">
                                    <h4> T-shirts  </h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    </div>
                                    <img  width="100%" height="500" src={val.image} alt="" />
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
export default Shop