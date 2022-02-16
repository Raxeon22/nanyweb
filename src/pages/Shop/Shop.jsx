import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Row, Col, Container, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import "../../css/Shop.css";
import ProductSlider from "../../components/Shop/ProductSlider";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";
import Pagination from '../../components/Shop/Pagination'

const Shop = (props) => {


  const [heading, setheading] = useState("");
  const [category, setcategory] = useState([]);
  const [product, setproduct] = useState([]);


  async function fetchcategorydata() {
    const response = await Action.get("/category", {});

    if (response.data.success == true) {
      setcategory(response.data.data);
    } else {
      setcategory([]);
    }
  }
  async function getproduct(k) {
    const response = await Action.get("/product?category=" + k, {});
    if (response.data.success == true) {
      await setproduct(response.data.data);
    } else {
    }
  }
  async function fetchproductdata() {
    const response = await Action.get("/product", {});
    if (response.data.success == true) {
      await setproduct(response.data.data);
    } else {

    }
  }
  useEffect(async () => {
    fetchcategorydata();
    fetchproductdata();
    if (props.location.state) {
      getproduct(props.location.state.item._id);
      setheading(props.location.state.item.heading);
    }
  }, [1]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(3)
  //setting pages into the pagination
  const indexOfLastPage = currentPage * dataPerPage; //5
  const indexOfFirstPage = indexOfLastPage - dataPerPage; //0

  const currentData = product.slice(indexOfFirstPage, indexOfLastPage)
  const totalPages = product.length //15

  //change pages onclick 
  const Paginate = (pageNumber) => { setCurrentPage(pageNumber) }
  return (
    <>
      <Navbar />
      <div className=" products new-arrivals animate__animated animate__fadeInUp animate__fast">
        <Container fluid>
          <Row>
            <Col md="3" xs="12" className="text-right mb-4">
              <div className="filter-by">
                <h6>Filter Results By</h6>
                { category.map((val, index) => {
                  return (
                    <Link
                      to="/shop"
                      key={ index }
                      onClick={ () => {
                        setheading(val.heading);
                        getproduct(val.heading);
                      } }
                    >
                      <p> { val.heading } </p>
                    </Link>
                  );
                }) }
              </div>
            </Col>
            <Col md="9" xs="12" className="shop-cards">
              <h1 className="heading">{ heading }</h1>
              <Row>
                { currentData ? currentData.map((val, index) => {
                  return (
                    <Col xs="12" md="4" sm="6" key={ index }>
                      <Card className="each-card">
                        <Card.Img variant="top" />
                        <Link
                          to={ {
                            pathname: `/shop/product/${ val._id }`
                          } }
                        >
                          <img
                            src={ baseURL + val.image[1] }
                            width="100%"
                            height="280"
                          />
                        </Link>
                        <Card.Body>
                          <Card.Title>
                            <Row>
                              <Col xs="9">
                                <span className="price"> <small>$</small>{ val.price } </span>

                                <p>{ val.name } </p>
                              </Col>
                              <Col xs="2" className="mt-3">
                                <span className="cart_button"
                                  onClick={ () => {
                                    var col = []
                                            val.color.map((clr)=>{
                                              col.push(clr.name)
                                            })
                                            val.color = col;
                                            val.quantity = 1
                                    if (
                                      localStorage.getItem("order")
                                        ? localStorage.getItem("order").length
                                        : -1 > 0
                                    ) {
                                      const content = JSON.parse(
                                        localStorage.getItem("order")
                                      );
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
                                  } }
                                >
                                  <AiOutlineShoppingCart size={ 25 } color=" white" />
                                </span>
                              </Col>
                            </Row>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                }) : <div className="text-center"><Spinner animation="border" variant="dark" /></div> }
              </Row>
              <Pagination
                dataPerPage={ dataPerPage }
                totalPages={ totalPages }
                currentData={ currentData }
                Paginate={ Paginate }
              />
            </Col>
          </Row>
        </Container>
      </div>
      <ProductSlider heading="new arrivals" />
    </>
  );
};
export default Shop;
