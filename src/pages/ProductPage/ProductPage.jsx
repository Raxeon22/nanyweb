import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import Action from "../../middleware/API";
import parse from 'html-react-parser'
import {
  Row,
  Col,
  Container,
  Button,
  Tabs,
  Tab,
  Spinner,
} from "react-bootstrap";
import ProductPageSlider from "../../components/Shop/Product-page/ProductPageSlider";
import ProductSlider from "../../components/Shop/ProductSlider";
import { FaShoppingCart } from "react-icons/fa";

import { useParams } from "react-router-dom";
const o = parse('<h2>deidhei</h2>')
const ProductPage = (props) => {
  const [product, setProduct] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setsize] = useState([]);
  const [productQuantity, setProductQuatity] = useState(1);
  const [color, setColor] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await Action.get(`/product?_id=${ id }`);
        setProduct(data.data);
        setProductQuatity(data.data[0].quantity)

      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);
  if (quantity < 1) {
    alert("quantity cannot be in minus");
    setQuantity(1);
  } else if (quantity > productQuantity) {
    alert("Quantity Exceed");
    setQuantity(productQuantity)
  }

  //get all sizes
  const checkSize = (e, val) => {
    if (e.target.checked) {
      setsize([...size, val]);
    } else {
      setsize(size.filter(value => value !== val));
    }

  }
  //get all colors
  const checkColor = (e, val) => {
    if (e.target.checked) {
      setColor([...color, val]);
    } else {
      setColor(color.filter(value => value !== val));
    }
  }
  return (
    <>
      <Navbar header={ false } shop={ false } />
      { product ? (
        product.map((item, index) => {
          return (
            <Container>
              <Row className="indiv-product">
                <Col xs="12" lg="5" md="6">
                  <ProductPageSlider images={ item.image } />
                </Col>
                <Col xs="12" lg="7" md="6" className="product-about">
                  <h4 className="product-name">{ item.name }</h4>
                  <hr />
                  {/* <p className="instock">
              { product.quantity > 0 ? "In Stock" : "Out Of Stock" }
            </p> */}
                  <div className="d-flex">
                    <span className="product_key mt-2">price:</span>
                    <h3>
                      { item.price }
                      <small>$</small>{ " " }
                    </h3>
                  </div>
                  <div className="color d-flex">
                    <span className="product_key mt-1"> colors: </span>

                    {
                      item.color.map((clr) => {

                        return (
                          <div className="form-check" key={ clr.code }>
                            <input
                              style={ { backgroundColor: clr.code } }
                              custom
                              id={ `checkbox${ clr }` }
                              checked={ clr._color }
                              onChange={ e => checkColor(e, clr.color) }
                              className="form-check-input"
                              type="checkbox"
                              value={ clr.color }
                            />
                          </div>
                        );
                      }) }
                  </div>

                  {
                    item.size.map((val, index) => {
                      return (
                        <div className="d-flex mt-2 size">
                          <span className="product_key mt-2">{ Object.keys(val)[index] }:</span>
                          {
                            Object.values(val)[index].map((v, i) => {
                              return (
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"

                                    custom
                                    id={ `checkbox${ val }` }
                                    checked={ v._size }
                                    onChange={ e => checkSize(e, v) }
                                  // onClick={ (e) => {
                                  //   console.log(size)
                                  //   if (e.target.checked) {
                                  //     let i = size.indexOf(e.target.value);
                                  //     size.splice(i, 1)
                                  //     setsize([e.target.value])

                                  //   } else {
                                  //     // let s = [...size]
                                  //     setsize([])
                                  //     // setsize(s)

                                  //   }

                                  // } }
                                  />
                                  <label>{ v } </label>
                                </div>)
                            }) }
                        </div>
                      );
                    }) }
                  <hr />
                  <div className="quantity d-flex">
                    <span className="product_key mt-2">Quantity:</span>
                    <i onClick={ () => {
                      setQuantity(quantity + 1)
                    } }>
                      <AiOutlinePlus />
                    </i>
                    <p className="p-2"> { quantity } </p>
                    <i onClick={ () => setQuantity(quantity - 1) }>
                      <AiOutlineMinus />
                    </i>
                  </div>

                  <hr />
                  <div className="d-flex">
                    { !(color.length === 0 || size.length === 0) ?
                      <Link

                        to={ {
                          pathname: "/order/step1",
                          state: {
                            product: [product[0]],
                          },
                        } }
                      >
                        <Button

                          onClick={ () => {
                            product[0].quantity = quantity;
                            product[0].color = color;
                            product[0].size = size;


                          } }>
                          { " " }
                          <FaShoppingCart className="m-1" /> Order Now
                        </Button>
                      </Link> : <Button disabled><FaShoppingCart className="m-1" /> Order Now </Button>
                    }

                    <Button
                      disabled={ !(color.length === 0 || size.length === 0) ? false : true }
                      className="mx-3"
                      onClick={ () => {
                        // props.generate(localStorage.getItem("order"));
                        product[0].quantity = quantity;
                        product[0].color = color
                        product[0].size = size;
                        if (localStorage.getItem("order")) {
                          const content = JSON.parse(
                            localStorage.getItem("order")
                          );

                          content.push(product[0]);
                          localStorage.setItem(
                            "order",
                            JSON.stringify(content)
                          );
                        } else {


                          localStorage.setItem(
                            "order",
                            JSON.stringify(product)
                          );
                        }
                      } }
                    >
                      <FiShoppingBag className="m-1" /> Add to cart
                    </Button>
                  </div>
                  {/* <div className="social-icons mt-5">
              <FaFacebook size="25" color="blue" className="m-1" />
              <FaTwitter size="25" color="primary" className="m-1" />
              <FaLinkedin size="25" color="gray" className="m-1" />
              <FaInstagram size="25" color="red" className="m-1" />
            </div> */}
                </Col>
              </Row>
              <div className="product-details">
                <Tabs defaultActiveKey="description">
                  <Tab eventKey="description" title="Description">
                    <p>{ parse(product[0].comments) }</p>
                  </Tab>

                  <Tab eventKey="policy" title="Return Policy">
                    <p>return policy</p>
                  </Tab>
                </Tabs>
              </div>
            </Container>
          );
        })
      ) : (
        <div className="text-center">
          <Spinner animation="border" variant="dark" />
        </div>
      ) }
      <ProductSlider heading="related products" />
      <Footer />
    </>
  );
};
export default ProductPage;
