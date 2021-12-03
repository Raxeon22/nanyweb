import React from 'react';
import {Row , Col , Carousel } from 'react-bootstrap';
import Banner2 from '../../assets/banner-three.jpg'
import Banner3 from '../../assets/banner-one.jpg'
import Banner4 from '../../assets/banner-two.jpg'
import BannerMobile1 from '../../assets/Mobile Responsive 1-01.jpg'
import BannerMobile2 from '../../assets/Mobile Responsive 2-01.jpg'
import BannerMobile3 from '../../assets/Mobile Responsive 3-01.jpg'

const SliderData = [
    {
        img: Banner2

    },
    {
        img: Banner3

    },
    {
        img: Banner4

    },
]

const SliderDataMobile = [
    {
        img: BannerMobile1

    },
    {
        img: BannerMobile2

    },
    {
        img: BannerMobile3

    },
]

const Banner =()=>{
    return (
        <>
        <div className="d-none d-md-block">
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
    </div>
    <div className="d-block d-md-none">
        <Carousel fade className="slider-banner" indicators={true} controls={false} interval={3000} >
            {
                SliderDataMobile.map((val , index)=>{
                    return(
                        <Carousel.Item key={index}>

                            <img src={val.img} alt="First Slide" className="first-slide"  width="100%" height="400"  />
                            </Carousel.Item>
                    )
                })
            }
        </Carousel>

    </div>

    </>
    )
}
export default Banner; 