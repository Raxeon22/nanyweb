import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container, Carousel, Spinner } from "react-bootstrap";
import parse from 'html-react-parser'
import Modal from "./ServicesModal";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [service, setservice] = useState(false);
  const [modalContent, setModalContent] = useState({
    heading: '',
    para: ''
  });


  useEffect(() => {
    async function fetchservicedata() {
      const response = await Action.get("/service", {});
      if (response.data.success === true) {
        setservice(response.data.data);
      } else {
        setservice([]);
      }
    }
    fetchservicedata();
  }, []);
  return (
    <div id="services" className="services">
      <Modal showModal={ showModal } setShowModal={ setShowModal } modalContent={ modalContent } />
      <Container>
        <h2>Nos Services</h2>
        { service ?
          <>
            <div className="d-none d-lg-block">
              <Carousel className="services-slider" interval={ 4000 } controls={ false }>


                { service.map((value, index) => {

                  if (index % 2 === 0 || !service[index + 1]) {

                    return (
                      <Carousel.Item>
                        <Row>
                          <Col xs="12" lg="5" md="6" className=" each-slide">
                            <Row className="">
                              <Col xs="5" className="">
                                <img
                                  src={ baseURL + value.image }
                                  alt=""
                                  height="280"
                                  width="220"
                                />
                              </Col>
                              <Col xs="7" className="service-slider-text">
                                <h5>{ value.heading }</h5>
                                <p>{ parse(value.paragraph) }</p>
                                {/* <Link to={value.btnLink}> */ }
                                <Button
                                  onClick={ () => {
                                    setShowModal((prev) => !prev);
                                    setModalContent({
                                      heading: value.heading,
                                      para: value.paragraph
                                    })
                                  } }
                                >
                                  view details
                                </Button>
                                {/* </Link> */ }
                              </Col>
                            </Row>
                          </Col>
                          <>
                            {
                              (service[index + 1] ? (

                                <Col xs="12" lg="5" md="6" className="each-slide">
                                  <Row>
                                    <Col xs="5" className="">
                                      <img
                                        src={ baseURL + service[index + 1].image }
                                        alt=""
                                        height="250"
                                        width="100%"
                                      />
                                    </Col>
                                    <Col xs="7" className="service-slider-text">
                                      <h5>{ service[index + 1].heading }</h5>
                                      <p>{ parse(service[index + 1].paragraph) }</p>
                                      <Button
                                        onClick={ () => {
                                          setShowModal((prev) => !prev);
                                          setModalContent({
                                            heading: service[index + 1].heading,
                                            para: service[index + 1].paragraph
                                          })
                                        } }
                                      >
                                        view details
                                      </Button>
                                    </Col>
                                  </Row>
                                </Col>
                              ) : null
                              )
                            }
                          </>
                        </Row>
                      </Carousel.Item>
                    );
                  } else {
                    return null
                  }
                }) }


              </Carousel>
            </div>
            <div className="d-block d-lg-none">
              <Carousel className="services-slider" controls={ true }>
                { service.map((value, index) => {
                  return (
                    <Carousel.Item key={ index }>
                      <Row>
                        <Col xs="12" lg="5" className=" each-slide">
                          <Row className="justify-content-center">
                            <Col xs="6" className="">
                              <img
                                src={ baseURL + value.image }
                                alt=""
                                height="160"
                                width="100%"
                              />
                            </Col>
                            <Col xs="12" className="service-slider-text">
                              <h5>{ value.heading }</h5>
                              <p>{ parse(value.paragraph) }</p>
                              <Button
                                onClick={ () => {
                                  setShowModal((prev) => !prev);
                                  setModalContent({
                                    heading: value.heading,
                                    para: value.paragraph
                                  })

                                } }
                              >
                                view details
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Carousel.Item>
                  );
                }) }
              </Carousel>
            </div>
          </> : <div className="text-center"><Spinner animation="grow" variant="light" /></div> }
      </Container>
    </div>
  );
};
export default Navbar;
