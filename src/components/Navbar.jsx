import React, { useState, useRef, useEffect } from "react";
import Cart from "./CartDropdown";
import { Button, Row, Col, Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/logoFinal.png";
import Scroll from "react-scroll";
import Scrollspy from "react-scrollspy";
import { NavLink, Link } from "react-router-dom";
import Action from "../middleware/API";
import baseURL from "../middleware/BaseURL";
let ScrollLink = Scroll.Link;
const NavLinks = [
  { item: "À propos de nous", link: "about-us" },
  { item: "Prestations de service", link: "services" },
  { item: "Application mobile", link: "mob-app" },
  { item: "FAQ", link: "faq" },
  { item: "Nous contacter", link: "contact-us" },
];


const Navigation = (props) => {
  const [showProducts, setShowProducts] = useState(false);
  const [topheader, settopheader] = useState({
    image: "",
    text: "",
    buttontext: "",
    link: "",
  });
  const products = useRef(null);
  const shop = useRef();

  const fetchtopheader = async () => {
    const response = await Action.get("/topheader", {});
    if (response.data.success === true) {
      settopheader(response.data.data[0]);


    } else {

      settopheader([]);
    }
  }
  useEffect(() => {
    fetchtopheader();
    const handleEvent = async (e) => {
      if (products.current && !products.current.contains(e.target)) {
        setShowProducts(false);
        //shop.current.classList.remove("shop");
      }
    };
    document.addEventListener("mousedown", handleEvent);

    return () => {
      // document.removeEventListener("scroll", handleEventLanguage);
      document.removeEventListener("mousedown", handleEvent);
    };



  }, []);

  if (showProducts) {
    shop.current.classList.add("shop");
  }

  return (
    <>
      <div className="sticky">

        <div className="header-top text-center" style={ { display: 'block' } }>
          {/* <span
            aria-hidden={ true }
            className="float-end px-2 "
            onClick={ () => {
              topHeader.current.style.display = "none";
              lanTop.style.top = "10px"

            } }
          >
            &times;
          </span> */}

          <Container>
            <Row className="justify-content-center pt-2">
              <Col
                md="2"
                xs="2"
                sm="2"
                className="p-0 "
                style={ { textAlign: "right" } }
              >
                <img
                  className=""
                  src={ baseURL + topheader.image }
                  alt=""
                  height="35"
                  width="35"
                />
              </Col>
              <Col md="4" lg="3" xs="6" sm="8" className="p-0">
                <p className=" pt-2 "> { topheader.text } </p>
              </Col>
              <Col md="2" xs="3" sm="2" className="p-0 smol" target="_blank">
                <Link to={ topheader.link }>
                  <Button
                    className="my-1"
                  >
                    { topheader.button_text }
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="top-f-nav">
          <Navbar bg="light" expand="lg" >
            <Container>
              <Navbar.Brand href="#">
                <img src={ Logo } width="100%" height="80" alt="" />
              </Navbar.Brand>
              <div className="d-lg-none d-block mobile-cart">
                <Cart />
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav" style={ { justifyContent: "end" } }>
                <Nav className="">
                  <Scrollspy
                    className="scrollspy"
                    items={ [
                      "SUR",
                      "Prestations de service",
                      "Application mobile",
                      "faq",
                      "Nous contacter",
                    ] }
                    currentClassName="isCurrent"
                  >
                    <li className="nav-item">
                      {/* <ScrollLink
                    className="nav-link cursor-pointer"
                    exact
                    to={props.Homelink}
                    href="#"
                    spy={false}
                    smooth={false}
                    offset={50}
                    duration={500}
                    spyThrottle={500}
                  >
                    Home
                  </ScrollLink> */}
                      <NavLink to="/" className="nav-link ">
                        Accueil
                      </NavLink>
                    </li>
                    { NavLinks.map((value, index) => {
                      return (
                        <li className="nav-item" key={ value.toString() }>
                          <ScrollLink
                            className="nav-link cursor-pointer"
                            exact
                            to={ value.link }
                            href="/"
                            spy={ false }
                            smooth={ false }
                            offset={ 50 }
                            duration={ 500 }
                            spyThrottle={ 500 }
                          >
                            { value.item }
                          </ScrollLink>
                        </li>
                      );
                    }) }

                    <li className="nav-item">
                      <NavLink
                        to="/shop"
                        className="nav-link "
                        ref={ shop }
                        onMouseEnter={ () => {
                          if (props.shop) {
                            setShowProducts(true);
                          }
                        } }
                      >
                        { " " }
                        Boutique{ " " }

                      </NavLink>
                    </li>

                    {/* shopping cart  */ }
                    <li className="nav-item d-lg-block d-none">
                      <Cart />
                    </li>
                    {/* <li className="nav-item  ">
                    <Button className="btn mb-4 my-sm-0">Book a Nanny</Button>
                  </li> */}
                  </Scrollspy>
                </Nav >
              </Navbar.Collapse>
            </Container>
          </Navbar></div>
      </div>
      {/* { showProducts ? (
        <div
          className="product-cards animate__animated animate__fadeInUp animate__fast	"
          ref={ products }
        >
          <ProductSlider />
        </div>
      ) : null } */}
    </>


  );
};
export default Navigation;
