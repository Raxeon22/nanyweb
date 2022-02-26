import React, { useEffect, useState } from "react";
import { Spinner, Carousel } from "react-bootstrap";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";

const Banner = () => {
  const [banner, setbanner] = useState(false);
  const [mobbanner, setmobbanner] = useState(false);


  useEffect(() => {
    const fetchbannerdata = async () => {
      const response = await Action.get("/banner/web?lang=French", {});
      if (response.data.success === true) {
        setbanner(response.data.data);
      } else {
        // setbanner(false);
      }
    };
    fetchbannerdata();
    const fetchmobbannerdata = async () => {
      const response = await Action.get("/banner/mobile", {});
      if (response.data.success === true) {

        setmobbanner(response.data.data);
      } else {
        setmobbanner(false);
      }
    };
    fetchmobbannerdata();
  }, []);
  return (
    <>
      { banner ?
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
        : <div className="text-center"><Spinner animation="border" variant="dark" /></div> }

      <div className="d-block d-md-none">
        { mobbanner ?
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
          </Carousel> : <div className="text-center"><Spinner animation="grow" variant="dark" /></div> }
      </div>

    </>
  );
};
export default Banner;
