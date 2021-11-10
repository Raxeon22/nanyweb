import React  from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import AboutUs from '../../components/AboutUs'
import Services from '../../components/Services'
import HowItWork from '../../components/HowItWork'
import MobileApp from '../../components/MobileApp';
import FAQ from '../../components/FAQ';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/Home.css'




const Home = () => {


    return(
        
        <div id="navBanner" >

            <Navbar/>

            <Banner/>

            <AboutUs/>
            
            <Services/>
            
            <HowItWork/>

            <MobileApp/>

            <FAQ/>

            <ContactUs/>

            <Footer/>
            

           

          
         
        </div>
    )
}
export default Home 