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
          indicators={ true }
          controls={ false }
          interval={ 3000 }
        >
          { banner.map((val, index) => {
            return (
              <Carousel.Item key={ index }>
                <img
                  src={ baseURL + val.image }
                  alt="First Slide"
                  className="first-slide"
                  width="100%"
                  height="550"
                />
              </Carousel.Item>
            );
          }) }
        </Carousel>
      </div>
      <div className="d-block d-md-none">
        <Carousel
          fade
          className="slider-banner"
          indicators={ true }
          controls={ false }
          interval={ 3000 }
        >
          { mobbanner.map((val, index) => {
            return (
              <Carousel.Item key={ index }>
                <img
                  src={ baseURL + val.image }
                  alt="First Slide"
                  className="first-slide"
                  width="100%"
                  height="400"
                />
              </Carousel.Item>
            );
          }) }
        </Carousel>
      </div>
    </>
  );
};
export default Banner;
