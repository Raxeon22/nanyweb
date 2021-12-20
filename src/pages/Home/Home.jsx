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
import Categories from "../../components/Home/Categories";
import OurProducts from "../../components/Home/OurProducts";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../css/Home.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 6000);
  }, []);

  return (
    <div id="navBanner">
      <Popup showModal={showModal} setShowModal={setShowModal} />
      <Navbar header={true} shop={true} Homelink="home"/>

      <Banner />
      <AboutUs />
      <Services />

      <HowItWork />
      <Categories />
      <OurProducts />
      <MobileApp />
      <FAQ />
      <ContactUs />
    </div>
  );
};
export default Home;
