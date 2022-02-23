import React, { useEffect, useState } from "react";
import {
  Tabs,
  Tab,
  Container,
  Card,
  Row,
  Col
} from "react-bootstrap";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";
import ProductSlider from "../Shop/ProductSlider";
var settings = {
  dots: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  speed: 500,
  arrows: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Shop = (props) => {
  const [category, setcategory] = useState([]);
  const [key, setKey] = useState('productSlider');

  const [product, setproduct] = useState([]);


  async function getproduct(k) {
    const response = await Action.get("/product?category=" + k, {});
    // console.log(response);
    if (response.data.success === true) {
      setproduct(response.data.data);
    } else {
    }
  }

  useEffect(() => {
    async function fetchproductdata() {
      const action = await Action.get("/category", {});

      if (action.data.success === true) {
        setcategory(action.data.data);
      } else {
        // setcategory([]);
      }
    }
    fetchproductdata();
  }, []);
  return (
    <div className="our-products">
      <Container>
        <h1 className="before_line">Nos Produits</h1>
        <p>Il y a quelque chose de parfait pour chaque entreprise, marque ou événement.</p>
        <div className="">
          <div className="prod-tabs">
            <Tabs
              activeKey={ key }
              onSelect={ (k) => {
                console.log(k);
                getproduct(k);
                setKey(k);
                console.log(k)
              } }
            >    <Tab eventKey='productSlider' >
                <ProductSlider show={ 3 } />
              </Tab>
              { category.map((item) => {
                return (
                  <Tab eventKey={ item.heading } title={ item.heading }>

                    <div className="new-arrivals">
                      <h3> { props.heading } </h3>
                      <Slider className="react-slider" { ...settings }>
                        { product.map((val) => {
                          return (
                            <div className="each-slid">
                              <Card className="each-card">
                                <Card.Img variant="top" />
                                <Link to={ `/shop/product/${ val._id }` }  >
                                  <img src={ baseURL + val.image[0] } alt="" width="100%" height="280" />
                                </Link>
                                <Card.Body>
                                  <Card.Title >
                                    <Row>
                                      <Col xs="9" style={ { textAlign: "left" } }>
                                        <span className="price"> <small>$</small>{ val.price } </span>

                                        <p>{ val.name } </p>
                                      </Col>
                                      <Col xs="2" className="mt-3">
                                        <span className="cart_button"
                                          onClick={ () => {
                                            var col = []
                                            col.push(val.color[0].name)
                                            val.color = col;
                                            val.quantity = 1
                                            val.size = val.size[0].length[0]
                                            if (
                                              localStorage.getItem("order")
                                                ? localStorage.getItem("order").length
                                                : -1 > 0
                                            ) {
                                              const content = JSON.parse(
                                                localStorage.getItem("order")
                                              );
                                              console.log(val);
                                              content.push(val);
                                              localStorage.setItem(
                                                "order",
                                                JSON.stringify(content)
                                              );
                                            } else {
                                              localStorage.setItem(
                                                "order",
                                                JSON.stringify([val])
                                              );
                                            }
                                            // window.location.reload()
                                          } }
                                        >
                                          <AiOutlineShoppingCart size={ 25 } color=" white" />
                                        </span>
                                      </Col>
                                    </Row>
                                  </Card.Title>
                                </Card.Body>
                              </Card>
                            </div>
                          );
                        }) }
                      </Slider>
                    </div>

                  </Tab>
                );
              }) }
            </Tabs>
            {/* <Tab eventKey="sweat-shirts" title={<GiMonclerJacket />}>
              <p>return policy</p>
            </Tab>
            <Tab eventKey="head-wear" title={<GiBilledCap />}>
              <p>return policy</p>
            </Tab>
            <Tab eventKey="polos" title={<GiPoloShirt />}>
              <p>return policy</p>
            </Tab>
            <Tab eventKey="accessories" title={<GiJewelCrown />}>
              <p>return policy</p>
            </Tab> */}
          </div>
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
  );
};
export default Shop;
