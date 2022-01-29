import React, { useEffect, useState } from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";

const Banner = () => {
  const [banner, setbanner] = useState([]);
  const [mobbanner, setmobbanner] = useState([]);
  const fetchbannerdata = async () => {
    const response = await Action.get("/banner/web", {});
    if (response.data.success == true) {
      console.log(response.data.data);
      setbanner(response.data.data);
    } else {
      // setbanner(SliderData);
    }
  };
  const fetchmobbannerdata = async () => {
    const response = await Action.get("/banner/mobile", {});
    if (response.data.success == true) {
      console.log(response.data.data);

      setmobbanner(response.data.data);
    } else {
      // setbanner(SliderData);
    }
  };
  useEffect(async () => {
    fetchbannerdata();
    fetchmobbannerdata();
  }, []);
  return (
    <>
      <div className="d-none d-md-block" id="home">
        <Carousel
          fade
          className="slider-banner"
          indicators={true}
          controls={false}
          interval={3000}
        >
          {banner.map((val, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  src={baseURL + val.image}
                  alt="First Slide"
                  className="first-slide"
                  width="100%"
                  height="550"
                />
                {/* <Carousel.Caption>
                  <Row className="slidercaption">
                    <Col xs="12">
                      <p className="text-uppercase text-right">{val.Bt1}</p>
                      <h1 className="font-weight-bold"> {val.Bt2} </h1>
                    </Col>
                  </Row>
                  <Row className="certified-job ">
                    <Col xs="3" className="mt-n5 text-left">
                      <img
                        src={baseURL + val.Primage}
                        className="rounded-circle user-img "
                        width=""
                        height=""
                        alt=""
                      />
                    </Col>
                    <Col xs="4" className="pt-4">
                      <h2 className="font-weight-bold ">Cerified Babysitter</h2>
                      <p className="headingl">{val.Pt1}</p>
                    </Col>
                    <Col xs="5" className="pt-4">
                      <p className="">{val.Pt2}</p>
                    </Col>
                  </Row>
                </Carousel.Caption> */}
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div className="d-block d-md-none">
        <Carousel
          fade
          className="slider-banner"
          indicators={true}
          controls={false}
          interval={3000}
        >
          {mobbanner.map((val, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  src={baseURL + val.image}
                  alt="First Slide"
                  className="first-slide"
                  width="100%"
                  height="400"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
export default Banner;
