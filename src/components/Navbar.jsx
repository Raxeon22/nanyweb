import React , {useState , useRef , useEffect} from 'react';
import Cart from './CartDropdown';
import {RiArrowDownSLine} from 'react-icons/ri'
import HeadPhones from '../assets/headphones.jpg'
import SelfieStick from '../assets/selfie-stick.jpg'
import Speakers from '../assets/speakers.jpg'
import {Button , Row , Col , Nav , Container , Card} from 'react-bootstrap';
import BabyIcon from '../assets/topimg.jpg';
import Logo from '../assets/logo2.png';
import Scroll from 'react-scroll';
import Scrollspy from 'react-scrollspy'
import {NavLink, Link} from 'react-router-dom'
let ScrollLink = Scroll.Link;


const NavLinks = [
    {item : 'About' , link : 'about-us'},
    {item : 'Services' , link : 'services'},
    {item : 'Mobile Aplication' , link : 'mob-app'},
    {item : 'FAQ' , link : 'faq'},
    {item : 'Contact Us' , link : 'contact-us'}
]

 export const ProductDetails = [
    {
        title : 'Head Phones' , image : HeadPhones
    },
    {
        title : 'Electrons' , image : SelfieStick
    },
    {
        title : 'Speakers' , image : Speakers
    },
]

const Navbar = (props) => {
    const [showNav , setShowNav] = useState(false);  
    const [showProducts , setShowProducts] = useState(false) 
    const menuMobile = useRef() 
    const topHeader = useRef()
    const navbar = useRef()
    const products = useRef(null)
    const shop = useRef()

    useEffect(() => {
        const handleEvent = (e) => {
            if (products.current && !products.current.contains(e.target)) {
              setShowProducts(false);
              shop.current.classList.remove('shop')
            }
          };
          document.addEventListener("mousedown", handleEvent);
      
          return () => {
            document.removeEventListener("mousedown", handleEvent);
          };
    } )

    if(showProducts){
        shop.current.classList.add('shop')

    }

    return(
    <>
       {  props.header ?  <div ref={topHeader} className="header-top text-center"  id="">

            <span aria-hidden={true} className="float-end px-2 "onClick={()=>{
               topHeader.current.classList.add("d-none")
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
        </div> : null}
         <div className="top-f-nav">
        <Nav ref={navbar}  className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
            <Container>

                <a className="navbar-brand" href="#">
                <img src={Logo} width="220" height="90" alt="" />
                </a>
                <li className="nav-item pt-1 number d-lg-none d-block ">
                    <Cart/>

                    </li>
                <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                onClick={()=>{
                    const Collapse = menuMobile.current
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

                <div ref={menuMobile} className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                
                    <div className="navbar-nav ">
                   
                    <Scrollspy 
                    className="scrollspy" items={ ['home', 'about-us', 'services', 'how-it-works',  'mob-app', 'faq' , 'contact-us'] } 
                    currentClassName="isCurrent"> 
                    <li className="nav-item"    >
                        <NavLink to="/"  className="nav-link "   > Home </NavLink>
                    </li> 
                        {
                            NavLinks.map((value, index)=>{
                                return(
                                <li className="nav-item" key={index}>
                                    <ScrollLink  
                                    className="nav-link cursor-pointer" 
                                    exact 
                                    to={value.link} href="/" 
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
                    
                    <li className="nav-item"    >
                        <NavLink to="/shop" className="nav-link " ref={shop} onMouseEnter={()=> {
                            if(props.shop){
                            setShowProducts(true)}
                            }}  > Shop   { props.shop ? <span> <RiArrowDownSLine size={20} /> </span> : null} </NavLink>
                    </li> 

                    {/* shopping cart  */}
                    <li className="nav-item pt-1 number d-none d-lg-block ">
                    <Cart/>

                    </li>
                    <li className="nav-item  ">
                        <Button className="btn mb-4 my-sm-0" >Book a Nanny</Button>

                    </li>

                    </Scrollspy>
                    </div>
                    

                </div>
             
            </Container>
        </Nav>
       {showProducts ?
       <div className="product-cards animate__animated animate__fadeInDown animate__fast	" ref={products}>
        <Container>
            <Row>
                {
                    ProductDetails.map((val, index)=>{
                        return(
                            <Col xs="12" md="4" key={index}>
                                <Link to="/shop">
                                    <Card className="each-product">
                                        <Card.Img variant="top" />
                                        <img src={val.image} width="100%" height="280" />
                                        <Card.Body>
                                            <Card.Title> {val.title} </Card.Title>
                                        </Card.Body>
                                    </Card> 
                                </Link>
                            </Col>
                        )
                    })
                }
                
            </Row>
           
        </Container>
        </div>
        : null}
         </div>

    </>)
}
export default Navbar;