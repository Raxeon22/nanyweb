import React , {useEffect , useState}  from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import AboutUs from '../../components/AboutUs'
import Services from '../../components/Services'
import HowItWork from '../../components/HowItWork'
import MobileApp from '../../components/MobileApp';
import FAQ from '../../components/FAQ';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer'
import Popup from '../../components/PageModal'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/Home.css'




const Home = () => {
    const [showModal , setShowModal] = useState(true)

    // useEffect(() => {
       
    // }, [input])

    return(
        
        <div id="navBanner" >
            <Popup showModal={showModal} setShowModal={setShowModal}/>

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