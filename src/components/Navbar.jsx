import React , {useState} from 'react';
import {FiPhoneCall} from "react-icons/fi";

import {Button , Row , Col , Nav , Container } from 'react-bootstrap';
import BabyIcon from '../assets/baby-icon.png';
import Logo from '../assets/vdvd-01.png';
import Scroll from 'react-scroll';
import Scrollspy from 'react-scrollspy'
let ScrollLink = Scroll.Link;


const NavLinks = [
    {item : 'Home' , link : 'home'},
    {item : 'About' , link : 'about-us'},
    {item : 'Services' , link : 'services'},
    {item : 'How it Works' , link : 'how-it-works'},
    {item : 'Mobile Aplication' , link : 'mob-app'},
    {item : 'FAQ' , link : 'faq'},
    {item : 'Contact Us' , link : 'contact-us'}
]

const Navbar = () => {
    const [showNav , setShowNav] = useState(false);    

    return(
    <>
        <div className="header-top text-center" id="">

            <span aria-hidden="true " className="float-end px-2 "onClick={()=>{
                document.querySelector('.header-top').classList.add("d-none")
            }} >&times;</span>

            <Container>
                <Row className="justify-content-center py-2">
                    <Col sm="1" xs="1" className="p-0 " style={{textAlign:'right'}}>
                     <img className="" src={BabyIcon} alt="" height="35" width="35" />

                    </Col>
                    <Col sm="3" xs="6" className="p-0">
                      <p className=" pt-2 ">Looking for a babysitting job?</p>

                    </Col>
                    <Col sm="2" xs="8" className="p-0 smol">
                     <Button  variant="light" class="btn  mt-1" type="button" >Book a Nanny</Button>

                    </Col>
                </Row>

            </Container>
        </div>

        <Nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">

            <a className="navbar-brand" href="#">
              <img src={Logo} width="100%" height="130" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
             onClick={()=>{
                const Collapse = document.getElementById('navbarSupportedContent')
                if(showNav){
                    Collapse.classList.remove('show')
                    setShowNav(false)
                }else {
                    Collapse.classList.add('show')
                    setShowNav(true)
                }

             }} >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
            
                <div className="navbar-nav ">
                <Scrollspy 
                className="scrollspy" items={ ['home', 'about-us', 'services', 'how-it-works',  'mob-app', 'faq' , 'contact-us'] } 
                currentClassName="isCurrent">
                    {
                        NavLinks.map((value, index)=>{
                            return(
                             <li className="nav-item">
                                <ScrollLink  
                                className="nav-link cursor-pointer" 
                                exact 
                                activeClassName="active" 
                                to={value.link} href="#" 
                                spy={false} 
                                smooth={false} 
                                offset={50} 
                                duration={500}
                                spyThrottle={500}> 
                                {value.item} 
                                </ScrollLink>
                            </li>
                            )
                        })
                    }
                   
                   <li className="nav-item pt-1 number ">
                   <span className="mx-2"><FiPhoneCall/> <a href="" className="mx-2">2051983247</a></span> 

                   </li>
                   <li className="nav-item  ">
                    <Button className="btn mb-4 my-sm-0" >Book a Nanny</Button>

                   </li>

                </Scrollspy>
                </div>
                

            </div>
        </Nav>

    </>)
}
export default Navbar;