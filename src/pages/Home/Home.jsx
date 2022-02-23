import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Home/Banner";
import AboutUs from "../../components/Home/AboutUs";
import Services from "../../components/Home/Services";
import HowItWork from "../../components/Home/HowItWork";
import MobileApp from "../../components/Home/MobileApp";
import FAQ from "../../components/Home/FAQ";
import ContactUs from "../../components/Home/ContactUs";
import Popup from "../../components/Home/PageModal";
import Bannerimg from '../../assets/marketBanner.jpg'
import Categories from "../../components/Home/Categories";
import OurProducts from "../../components/Home/OurProducts";
import Footer from "../../components/Footer"
import "bootstrap/dist/css/bootstrap.min.css";

import "../../css/Home.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setdata] = useState([])
  const updatedata = () => {
    console.log("Munib");
    setdata(localStorage.getItem("order"))
  }
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 6000);
  }, [data]);

  return (
    <div id="navBanner">
      <div className="modal">
        <div
          className="modal-popup animate__animated animate__slideInDown"
        >
          <div>
            <span
              aria-hidden={ true }
              className="float-end px-2 "
              onClick={ () => {
                setShowModal((prev) => !prev);
              } }
            >
              &times;
            </span>
          </div>
          <div className="popup text-center">
            <img src={ Bannerimg } alt="" width="300" height="360" />
            {/* <br />
              <div className="float-end mt-3">
                <Button>get a clue</Button>
              </div> */}
          </div>
        </div>
      </div>
      <Navbar header={ true } shop={ true } Homelink="home" />
      <Banner />
      <AboutUs />
      <Services />
      <HowItWork />
      <Categories />
      <OurProducts generate={ updatedata } />
      <MobileApp />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
};
export default Home;
