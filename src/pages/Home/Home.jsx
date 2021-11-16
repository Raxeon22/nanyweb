import React , {useEffect , useState}  from 'react';
import Banner from '../../components/Banner';
import AboutUs from '../../components/AboutUs'
import Services from '../../components/Services'
import HowItWork from '../../components/HowItWork'
import MobileApp from '../../components/MobileApp';
import FAQ from '../../components/FAQ';
import ContactUs from '../../components/ContactUs';
import Popup from '../../components/PageModal'
import Categories from '../../components/Categories'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/Home.css'




const Home = () => {
    const [showModal , setShowModal] = useState(false)

    // useEffect(() => {
       
    // }, [input])

    return(
        
        <div id="navBanner" >
            <Popup showModal={showModal} setShowModal={setShowModal}/>
            
  
            <Banner/>

            <AboutUs/>
            <Categories/>
            <Services/>
            
            <HowItWork/>


            <MobileApp/>

            <FAQ/>

            <ContactUs/>


            

           

          
         
        </div>
    )
}
export default Home 