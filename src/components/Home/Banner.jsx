import React from 'react';
import {Row , Col , Carousel } from 'react-bootstrap';
import Banner2 from '../../assets/banner-three.jpg'
import Banner3 from '../../assets/banner-one.jpg'

const SliderData = [
    {
        img: Banner2,
        heading1 : 'here in your neighborehood',
        heading2 : 'Connecteing families ',
        heading3 : 'Careing for the child'

    },
    {
        img: Banner3,
        heading1 : 'here in your neighborehood',
        heading2 : 'Connecteing families ',
        heading3 : 'Careing for the child'

    },
    {
        img: Banner2,
        heading1 : 'here in your neighborehood',
        heading2 : 'Connecteing families ',
        heading3 : 'Careing for the child'

    },
]

const Banner =()=>{
    return (
        <Carousel fade className="slider-banner" indicators={true} controls={false} interval={3000} >
            {
                SliderData.map((val , index)=>{
                    return(
                        <Carousel.Item key={index}>

                            <img src={val.img} alt="First Slide" className="first-slide"  width="100%" height="550"  />
                            {/* <Carousel.Caption>
                                <Row className = "slidercaption" >
                                    <Col xs="12">
                                        <p className="text-uppercase text-right">{val.heading1}</p>
                                        <h1 className = "font-weight-bold" > {val.heading2} <br/> {val.heading3} </h1>
                                    </Col>
                                </Row>
                                {/* <Row className = "certified-job " >
                                    <Col xs="3" className="mt-n5 text-left">
                                    <img src={CertifiedUser} className="rounded-circle user-img " width=""  height="" alt="" />
                                    </Col>
                                    <Col xs="4" className="pt-4">
                                        <h2 className="font-weight-bold ">Cerified Babysitter</h2>
                                        <p className = "headingl" >Jone | 30 years old | 10+ exp | 30$</p>
                                    </Col>
                                    <Col xs="5"  className="pt-4">
                                        <p className="">" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem id ullam harum, ipsa quam modi quo omnis ducimus" </p>
                                    </Col>


                                </Row>   

                            </Carousel.Caption> */}
                        </Carousel.Item>
                    )
                })
            }

    </Carousel>
    )
}
export default Banner; 