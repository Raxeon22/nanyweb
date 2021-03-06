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
import Footer from '../../components/Footer'

const Shop = (props) => {


  const [heading, setheading] = useState("");
  const [category, setcategory] = useState([]);
  const [product, setproduct] = useState([]);


  async function fetchcategorydata() {
    const response = await Action.get("/category", {});

    if (response.data.success === true) {
      setcategory(response.data.data);
    } else {
      setcategory([]);
    }
  }
  async function getproduct(k) {
    const response = await Action.get("/product?category=" + k, {});
    if (response.data.success === true) {
      await setproduct(response.data.data);
    } else {
    }
  }
  async function fetchproductdata() {
    const response = await Action.get("/product", {});
    if (response.data.success === true) {
      await setproduct(response.data.data);
    } else {

    }
  }
  useEffect(() => {
    fetchcategorydata();
    fetchproductdata();
    if (props.location.state) {
      getproduct(props.location.state.item._id);
      setheading(props.location.state.item.heading);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
            <Col md="6" lg="3" xs="12" className="text-right mb-4">
              <div className="filter-by">
                <h6>Filtrer les R??sultats par</h6>
                { category.map((val, index) => {
                  return (
                    <Link
                      to="/shop"
                      key={ val._id }
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
            <Col md="12" xs="12" lg="9" className="shop-cards">
              <h1 className="heading">{ heading }</h1>
              <Row>
                { currentData ? currentData.map((val, index) => {
                  return (
                    <Col xs="12" md="6" lg="4" sm="6" key={ val._id } >
                      <Card className="each-card">
                        <Card.Img variant="top" />
                        <Link
                          to={ {
                            pathname: `/shop/product/${ val._id }`
                          } }
                        >
                          <img
                            src={ baseURL + val.image[0] }
                            width="100%"
                            height="280"
                            alt="products"
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
                                <Link
                                  to={ {
                                    pathname: `/shop/product/${ val._id }`
                                  } }
                                >
                                  <span className="cart_button" >
                                    <AiOutlineShoppingCart size={ 25 } color=" white" />
                                  </span>
                                </Link>
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
                setDataPerPage={ setDataPerPage }
              />
            </Col>
          </Row>
        </Container>
      </div >
      <ProductSlider heading="NOUVELLES ARRIV??ES" />
      <Footer />
    </>
  );
};
export default Shop;
