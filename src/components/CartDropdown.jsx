import React , {useState , useRef , useEffect} from 'react'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Products} from '../pages/Shop/Shop'
const items = 2;

const Cart = () => {
    const [isOpen, setisOpen] = useState(false)
  
    const cartDropdown = useRef()

    // useEffect(() => {
    //     const handleEvent = (e) => {
    //       if (cartDropdown.current && !cartDropdown.current.contains(e.target)) {
    //         setisOpen(false);
    //       }
    //     };
    //     document.addEventListener("mousedown", handleEvent);
    
    //     return () => {
    //       document.removeEventListener("mousedown", handleEvent);
    //     };
    //   });
    return(
      <div className="cart">
          <span onClick={()=> setisOpen(prev => !prev)}> <AiOutlineShoppingCart size={26}/>
           <span className="items d-none d-lg-block" >{items}</span> </span>

       { isOpen? 
         <Card  ref={cartDropdown} className="cart-dropdown animate__animated animate__fadeInUp animate__fast">
            <Card.Header>
                <h5>My Cart <span onClick={()=> setisOpen((prev)=>!prev)}> &times;</span></h5>
              
            </Card.Header>
            <Card.Body>
               <Row className="each-item">
                   <Col xs="3" >
                       <img src={Products[0].image} height="60" width="60" alt="" />
                   </Col>
                   <Col xs="9">
                      <h6> {Products[0].title} </h6>
                      price:  {Products[0].price} 
                   </Col>
               </Row>
               <Row className="each-item">
                   <Col xs="3" >
                       <img src={Products[2].image} height="60" width="60" alt="" />
                   </Col>
                   <Col xs="9">
                      <h6> {Products[2].title} </h6>
                      price:  {Products[2].price} 
                   </Col>
               </Row>
               <Link to='/order/step1'>
                  <Button className="mt-3" variant ="light">CHECK OUT</Button> 
                  </Link>
               <Link to='/cart'>
                <Button variant ="light">VIEW ALL CART</Button>
                </Link>
            </Card.Body>
           
        </Card>
        : null}

      </div>
    )
}
export default Cart
