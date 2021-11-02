import React , {useState} from 'react';
import {Button , Row , Col , Nav , Container , Carousel , Tabs , Tab , Collapse  } from 'react-bootstrap';
import BabyIcon from '../../assets/baby-icon.png';
import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.jpg';
import Banner1 from '../../assets/banner-one.jpg'
import Banner2 from '../../assets/banner-two.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import CertifiedUser from '../../assets/certified-user.jpg'
import {NavLink} from 'react-router-dom';
import AppThumb from '../../assets/app-thumb.png'
import '../../css/Home.css'
import FAQ from '../../assets/faq-bg.jpg';
import { GiEarthAfricaEurope } from "react-icons/gi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaHeartbeat , FaPrayingHands, FaPeopleCarry , FaApple, FaGooglePlay} from "react-icons/fa";
import {FiPhoneCall} from "react-icons/fi";
import {AiOutlineMinus , AiOutlinePlus} from "react-icons/ai";
import ServicesImg1 from '../../assets/services-img1.jpg'
import Step1 from '../../assets/step1.png'
import Step2 from '../../assets/step2.png'
import Step3 from '../../assets/step3.png'
import Step4 from '../../assets/step4.png'



const Home = () => {
 const [showNav , setShowNav] = useState(false);    
 const [faqOpen , setFaqOpen] = useState(false);
 const [faqOpen2 , setFaqOpen2] = useState(false);
 const [faqOpen3 , setFaqOpen3] = useState(false);
 const [faqOpen4 , setFaqOpen4] = useState(false);
 const [faqOpen5 , setFaqOpen5] = useState(false);
 const FaqContent = [{
    question : 'How long This Site live?',
    answer : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.',
    state : faqOpen,
    setState : setFaqOpen
 },
 {
    question : 'Can I install anything i want on there?',
    answer : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.',
    state : faqOpen2,
    setState : setFaqOpen2
 },
 {
    question : 'Can i change the domain you me?',
    answer : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.',
    state : faqOpen3,
    setState : setFaqOpen3
 },
 {
    question : 'How can I migrate to another site?',
    answer : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.',
    state : faqOpen4,
    setState : setFaqOpen4
 },
 {
    question : 'How many sites i can create at once?',
    answer : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.',
    state : faqOpen5,
    setState : setFaqOpen5
 }
]
    return(
        <div id="navBanner" > 
           
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
                  <img src={Logo} width="100%" height="90" alt="" />
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
                    <ul className="navbar-nav ">
                        <li className="nav-item ">
                            <NavLink to="/"  className="nav-link" exact activeClassName="active" >Home </NavLink>
                        </li>
                        <li className="nav-item ">
                          <NavLink to="/abous-us" id="sec-1" className="nav-link" exact activeClassName="active" >About </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to="/." className="nav-link" exact activeClassName="active" >Services </NavLink>
                        </li>
                        <li className="nav-item ">
                          <NavLink to="/." className="nav-link" exact activeClassName="active" >Pricing </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/." className="nav-link" exact activeClassName="active" >For Customers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/." className="nav-link" exact activeClassName="active" >For Employees</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/." className="nav-link" exact activeClassName="active" >Contact Us</NavLink>
                        </li>
                        <li className="nav-item pt-1 text-muted d-none d-lg-block">
                            |
                        </li>
                       <li className="nav-item pt-1 number ">
                       <span className="mx-2"><FiPhoneCall/> <a href="" className="mx-2">2051983247</a></span> 

                       </li>
                       <li className="nav-item  ">
                        <Button className="btn mb-4 my-sm-0" >Book a Nanny</Button>

                       </li>
                        
                   
                    </ul>
                   <div className="ml-auto d-inline-flex">
                   
                   </div>
                </div>
            </Nav>
       

            <Carousel className="slider-banner" indicators={false} interval={2000} >
                <Carousel.Item>
                    
                    <img src={Banner2} alt="First Slide" className="first-slide"  width="100%" height="auto"  />
                    <Carousel.Caption>
                        <Row className = "slidercaption" >
                            <Col xs="12">
                                <p className="text-uppercase text-right">here in your neighborehood</p>
                                <h1 className = "font-weight-bold" >Connecteing families <br/> Careing for the child</h1>
                            </Col>
                        </Row>
                        <Row className = "certified-job " >
                            <Col xs="3" className="mt-n5 text-left">
                               <img src={CertifiedUser} className="rounded-circle user-img " width=""  height="" alt="" />
                            </Col>
                            <Col xs="4" className="pt-4">
                                <h2 className="font-weight-bold ">Cerified Babysitter</h2>
                                <p className = "headingl" >Jone | 30 years old | 10+ exp | 30$</p>
                            </Col>
                            <Col xs="5"  className="pt-4">
                                <p className="">" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem id ullam harum, ipsa quam modi quo omnis ducimus" </p>
                            </Col>
                           
                           
                        </Row>  
                       
                    </Carousel.Caption>
                </Carousel.Item>
                
                
                <Carousel.Item>
                    
                    <img src='https://images.pexels.com/photos/6974315/pexels-photo-6974315.jpeg?cs=srgb&dl=pexels-cottonbro-6974315.jpg&fm=jpg' alt="First Slide" className="first-slide" width="100%" height="auto"  />
                    <Carousel.Caption>
                        <Row className = "slidercaption" >
                            <Col xs="12">
                                <p className="text-uppercase text-right">here in your neighborehood</p>
                                <h1 className = "headingl" >Connecteing families <br/> cvareing for your child</h1>
                            </Col>
                        </Row>
                       
                        <Row className = "certified-job  " >
                            <Col xs="3" className="mt-n5 text-left">
                               <img src={CertifiedUser} className="rounded-circle user-img " width="200"  height="200" alt="" />
                            </Col>
                            <Col xs="4" className="pt-4">
                                <h2 className="font-weight-bolder ">Cerified Babysitter</h2>
                                <p className = "headingl" >Jone | 30 years old | 10+ exp | 30$</p>
                            </Col>
                            <Col xs="5"  className="pt-4">
                                <p className="">" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem id ullam harum, ipsa quam modi quo omnis ducimus" </p>
                            </Col>
                           
                           
                        </Row>    
                    </Carousel.Caption>
                    {/* border curved
                    <div class="custom-shape-divider-top-1635422766">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
                        </svg>
                    </div> */}
                 
                </Carousel.Item>
            </Carousel>

            <div id="about-us" data-scroll-index="1">
                <Container>
                    <div className="abous-us">
                        <Row>
                            <Col xs="12" md="6">
                                <h3>
                                    Professional senior care, <br/>
                                    whenever you need it.
                                </h3>
                                <h6>
                                    we this is perhaps the single biggest obstacle that <br/>
                                    all of us must overcome successful.
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Molestiae corporis, recusandae nobis qui repudiandae nam sint hic? Minus sed doloremque neque aspernatur ad ut
                                    accusantium consectetur maxime unde aliquid hic illum tenetur blanditiis non, voluptatem repellat eum veritatis velit 
                                    corporis provident doloribus voluptate repellendus eaque? Nostrum distinctio veniam sit expedita.
                                </p>
                                <Row className="see-our-video">
                                    <Col xs="2" className="video-icon text-center">
                                        <MdOutlineSlowMotionVideo size={35}/>
                                    </Col>
                                    <Col xs="9" className="video-text">see our video</Col>
                                </Row>
                                

                            </Col>
                            <Col xs="12" md="6">
                                <Row className="text-center about-cards justify-content-center">
                                    <Col xs="5" md="5" className=" each-card py-4 "> 
                                       <GiEarthAfricaEurope size={45} />
                                       <h2>100</h2>
                                       <p>Local Partners</p>
                                    </Col>
                                    <Col xs="5" md="5" className=" each-card py-4"> 
                                       <FaHeartbeat size={45} />
                                       <h2>100</h2>
                                       <p>Local Partners</p>
                                    </Col>
                                    <Col xs="5" md="5" className=" each-card py-4"> 
                                       <FaPeopleCarry size={45} />
                                       <h2>100</h2>
                                       <p>Local Partners</p>
                                    </Col>
                                    <Col xs="5" md="5" className=" each-card py-4"> 
                                       <FaPrayingHands size={45} />
                                       <h2>100</h2>
                                       <p>Local Partners</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container>

            </div>

            <div id="services" className="services">
                <Container>
                    <h2>Explore different types of sitters who provide services for your requirements </h2>
                    <div className="d-none d-lg-block">
 
                    <Carousel className="services-slider" controls={false}>
                        <Carousel.Item >
                            
                            <Row>
                                <Col xs="12" lg="5" className=" each-slide">
                                    <Row>
                                        <Col xs="5" className="">
                                            <img src={ServicesImg1} alt="" height="270" width="100%" />
                                        </Col>
                                        <Col xs="7" className="service-slider-text">
                                            <h5>Babies and Nannies duo</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et nulla delectus natus perferendis enim eligendi tempore.</p>
                                            <Button>view details</Button>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="12" lg="5" className=" each-slide">
                                    <Row>
                                        <Col  xs="5" className="">
                                            <img src={ServicesImg1} alt="" height="270" width="100%" />
                                        </Col>
                                        <Col xs="7"className="service-slider-text">
                                            <h5>Personal Care</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et nulla delectus natus perferendis enim eligendi tempore.</p>
                                            <Button>view details</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            
                        </Carousel.Item>
                   

                        <Carousel.Item >

                            <Row>
                                
                                <Col xs="12" lg="5" className=" each-slide">
                                    <Row>
                                        <Col xs="5" className="">
                                            <img src={Banner1} alt="" height="270" width="100%" />
                                        </Col>
                                        <Col xs="7" className="service-slider-text">
                                            <h5>Babies and Nannies duo</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et nulla delectus natus perferendis enim eligendi tempore.</p>
                                            <Button>view details</Button>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="12" lg="5" className=" each-slide">
                                    <Row>
                                        <Col xs="5" className="">
                                            <img src={Banner1} alt="" height="270" width="100%" />
                                        </Col>
                                        <Col xs="7" className="service-slider-text">
                                            <h5>Babies and Nannies duo</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et nulla delectus natus perferendis enim eligendi tempore.</p>
                                            <Button>view details</Button>
                                        </Col>
                                    </Row>
                                </Col>
                               
                            </Row>
                        
                        </Carousel.Item>
                        </Carousel>
                    </div>   
                    <div className="d-block d-lg-none">
                    <Carousel className="services-slider" controls={true}>

                        <Carousel.Item >
                            <Row>
                                <Col xs="12" lg="5" className=" each-slide">
                                    <Row>
                                        <Col xs="5" className="">
                                            <img src={ServicesImg1} alt="" height="270" width="100%" />
                                        </Col>
                                        <Col xs="7" className="service-slider-text">
                                            <h5>Babies and Nannies duo</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et nulla delectus natus perferendis enim eligendi tempore.</p>
                                            <Button>view details</Button>
                                        </Col>
                                    </Row>
                                </Col>
                               
                            </Row>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                               <Col xs="12" lg="5" className=" each-slide">
                                    <Row>
                                        <Col xs="5" className="">
                                            <img src={Banner1} alt="" height="270" width="100%" />
                                        </Col>
                                        <Col xs="7"className="service-slider-text">
                                            <h5>Personal Care</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et nulla delectus natus perferendis enim eligendi tempore.</p>
                                            <Button>view details</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                               <Col xs="12" lg="5" className=" each-slide">
                                    <Row>
                                        <Col xs="5" className="">
                                            <img src={Banner1} alt="" height="270" width="100%" />
                                        </Col>
                                        <Col xs="7"className="service-slider-text">
                                            <h5>Personal Care</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et nulla delectus natus perferendis enim eligendi tempore.</p>
                                            <Button>view details</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                               <Col xs="12" lg="5" className=" each-slide">
                                    <Row>
                                        <Col xs="5" className="">
                                            <img src={Banner1} alt="" height="270" width="100%" />
                                        </Col>
                                        <Col xs="7"className="service-slider-text">
                                            <h5>Personal Care</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et nulla delectus natus perferendis enim eligendi tempore.</p>
                                            <Button>view details</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Carousel.Item>
                   
                        
                 
                    </Carousel>
                    </div>
                </Container>
            </div>

            <div id="how-it-works" className="how-it-works">
              <Container>
                  <h1>How it Works</h1>
                  <div className="step1 d-none d-lg-block">
                      
                  </div>
                    <Row className="text-center">
                      
                      <Col className="each-step" xs="12" lg="3" md="6" >
                          <img src={Step1}  alt="" height="130" width="130" />
                          <span className="badge">01</span>
                          <h5>Join the Network</h5>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, necessitatibus!</p>
                      </Col>
                      <Col className="each-step" xs="12" lg="3" md="6" >
                          <img src={Step2}  alt="" height="130" width="130" />
                          <span className="badge">02</span>

                          <h5>Join the Network</h5>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, necessitatibus!</p>
                      </Col>
                      <Col className="each-step" xs="12" lg="3" md="6" >
                          <img src={Step3}  alt="" height="130" width="130" />
                          <span className="badge">03</span>

                          <h5>Join the Network</h5>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, necessitatibus!</p>
                      </Col>
                      <Col className="each-step" xs="12" lg="3" md="6" >
                          <img src={Step4}  alt="" height="130" width="130" />
                          <span className="badge">04</span>

                          <h5>Join the Network</h5>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, necessitatibus!</p>
                      </Col>
                    </Row>
              </Container>
            </div>
            
            <div id="mob-app" className="mob-app overflow-hidden">
                
            
                <Tabs defaultActiveKey="for-customer" >
                    <Tab eventKey="for-customer" title="For Customer">
                        <Row >
                            <Col xs="12" lg="5" md="6" className="tab-text offset-lg-1">
                                <span className="meet">meet app</span>
                                <h1>Check Our Mobile Application</h1>
                                <div className="list-bar">
                                    <div class="divider grey"></div>

                                    <div class="node green">01</div>
                                    <h6>easy searching</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eum, quaerat omnis doloribus ipsa eaque fuga molestiae ex voluptatibus nam.</p>
                                </div>
                                
                                <div className="list-bar">
                                    <div class="divider grey"></div>
                                    <div class="node green">02</div>
                                    <h6>easy searching</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eum, quaerat omnis doloribus ipsa eaque fuga molestiae ex voluptatibus nam.</p>
                                </div>

                                <div className="list-bar">
                                    <div class="node green">03</div>
                                    <h6>easy searching</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eum, quaerat omnis doloribus ipsa eaque fuga molestiae ex voluptatibus nam.</p>
                                </div>
                                <Row>
                                    <Col xs='6'>
                                        <Button className="w-100">
                                           <Row className="g-0">
                                               <Col xs="3" className="icon-button">
                                                   <FaApple size={35}/>
                                               </Col>
                                               <Col xs="8">
                                                   <span>Download from</span>
                                                   <h5>Apple Store</h5>
                                               </Col>
                                           </Row>
                                        </Button>
                                        
                                    </Col>
                                    <Col xs='6'>
                                        <Button className="w-100">
                                            <Row className="g-0">
                                               <Col xs="3" className="icon-button pt-1">
                                                   <FaGooglePlay size={33}/>
                                               </Col>
                                               <Col xs="8">
                                                   <span>Download from</span>
                                                   <h5>Apple Store</h5>
                                               </Col>
                                           </Row>
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="12" lg="5" md="6" className="tab-img  offset-lg-1">
                                <img src={AppThumb} alt="" />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="for-employee" title="For Employee">
                    <Row >
                            <Col xs="12" lg="5" md="6" className="tab-text offset-lg-1">
                                <span className="meet">meet app</span>
                                <h1>Check Our Mobile Application For Employee</h1>
                                <div className="list-bar">
                                    <div class="divider grey"></div>

                                    <div class="node green">01</div>
                                    <h6>easy searching</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eum, quaerat omnis doloribus ipsa eaque fuga molestiae ex voluptatibus nam.</p>
                                </div>
                                
                                <div className="list-bar">
                                    <div class="divider grey"></div>
                                    <div class="node green">02</div>
                                    <h6>easy searching</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eum, quaerat omnis doloribus ipsa eaque fuga molestiae ex voluptatibus nam.</p>
                                </div>

                                <div className="list-bar">
                                    <div class="node green">03</div>
                                    <h6>easy searching</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eum, quaerat omnis doloribus ipsa eaque fuga molestiae ex voluptatibus nam.</p>
                                </div>
                                <Row>
                                    <Col xs='6'>
                                        <Button className="w-100">
                                           <Row className="g-0">
                                               <Col xs="3" className="icon-button">
                                                   <FaApple size={35}/>
                                               </Col>
                                               <Col xs="8">
                                                   <span>Download from</span>
                                                   <h5>Apple Store</h5>
                                               </Col>
                                           </Row>
                                        </Button>
                                        
                                    </Col>
                                    <Col xs='6'>
                                        <Button className="w-100">
                                            <Row className="g-0">
                                               <Col xs="3" className="icon-button pt-1">
                                                   <FaGooglePlay size={33}/>
                                               </Col>
                                               <Col xs="8">
                                                   <span>Download from</span>
                                                   <h5>Apple Store</h5>
                                               </Col>
                                           </Row>
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="12" lg="5" md="6" className="tab-img  offset-lg-1">
                                <img src={AppThumb} alt="" />
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>

                
            </div>

            <div id="faq" className="faq">
                <Container>
                    <Row>
                        <Col xs="12" md="6">
                            <img src={FAQ} alt="" width="100%" height="500" />
                        </Col>
                        <Col xs="12" md="6" className="heading" >
                            <strong >FAQ</strong>
                            
                            <div className="Qsection">
                                {FaqContent.map(( val , index)=>{
                                return (
                                 <div className="eachQ " onClick={()=> val.setState(!val.state)} aria-expanded={val.state}>
                                 <h6 className="font-bolder"> {val.question} <span className="float-end">{ val.state ? <AiOutlineMinus size={23}/> : <AiOutlinePlus size={23}/> } </span></h6> 
                             
                                    <Collapse in={val.state} >
                                        <div className="">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.</p>
                                        </div>
                                    </Collapse>
                             
                                </div>)
                                })}
                               
                               
                           
                            
                               
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

       
    
        </div>
    )
}
export default Home