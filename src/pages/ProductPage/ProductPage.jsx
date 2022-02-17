import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import parse from "html-react-parser";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import Action from "../../middleware/API";
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
const ProductPage = (props) => {
  const [product, setProduct] = useState(false);
  const [quantity, setQuantity] = useState(1);
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
  }
  console.log();
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

                    { item.color.map((clr) => {
                      return (
                        <div className="form-check">
                          <input
                            style={ { backgroundColor: clr.code } }
                            onChange={ (e) => {
                              // let arra = color
                              if (color.indexOf(e.target.value) !== -1) {
                                let i = color.indexOf(e.target.value);
                                if (i >= 0) {
                                  color.splice(i, 1);
                                }
                                console.log(color); // [1,2,4]
                              } else {
                                color.push(e.target.value)
                              }
                              console.log(color);
                            } }
                            className="form-check-input"
                            type="checkbox"
                            value={ clr.name }
                            id="flexCheckDefault"
                          />
                        </div>
                      );
                    }) }
                  </div>
                  <div className="d-flex mt-2">
                    <span className="product_key mt-2">size:</span>
                    <p className="mt-2"> { item.size[0].length }</p>
                  </div>
                  <hr />
                  <div className="quantity d-flex">
                    <span className="product_key mt-2">Quantity:</span>
                    <i onClick={ () => setQuantity(quantity + 1) }>
                      <AiOutlinePlus />
                    </i>
                    <p className="p-2"> { quantity } </p>
                    <i onClick={ () => setQuantity(quantity - 1) }>
                      <AiOutlineMinus />
                    </i>
                  </div>

                  <hr />
                  <div className="d-flex">
                    <Link
                      onClick={ () => {

                        product[0].quantity = quantity;
                        product[0].color = color;
                        console.log(product);
                      } }
                      to={ {
                        pathname: "/order/step1",
                        state: {
                          product: [product],
                        },
                      } }
                    >
                      <Button>
                        { " " }
                        <FaShoppingCart className="m-1" /> Order Now
                      </Button>
                    </Link>

                    <Button
                      className="mx-1"
                      onClick={ () => {
                        // props.generate(localStorage.getItem("order"));
                        product[0].quantity = quantity;
                        product[0].color = color

                        if (localStorage.getItem("order")) {
                          const content = JSON.parse(
                            localStorage.getItem("order")
                          );

                          content.push(product);
                          localStorage.setItem(
                            "order",
                            JSON.stringify(content)
                          );
                        } else {


                          localStorage.setItem(
                            "order",
                            JSON.stringify([product])
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
                    <p>{ product[0].description }</p>
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
    </>
  );
};
export default ProductPage;
