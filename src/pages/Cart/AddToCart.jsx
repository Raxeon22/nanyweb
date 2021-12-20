import React from 'react';
import { Row , Col, Container , Button } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import HeadPhones from '../../assets/headphones.jpg'
import SelfieStick from '../../assets/selfie-stick.jpg'
import Speakers from '../../assets/speakers.jpg'
import { Link } from 'react-router-dom';
const total = 40.0
const cartDetails = [
    {
        image: HeadPhones,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, possimus.',
        price : '$60',
        quantity : '2',
        total : '$120'
    },
    {
        image: SelfieStick,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, possimus.',
        price : '$60',
        quantity : '1',
        total : '$60'
    },
    {
        image: Speakers,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, possimus.',
        price : '$80',
        quantity : '3',
        total : '$320'
    },
]
const AddToCart = () => {
    return(
        <>
        <Navbar header={true} shop={true} Homelink="home"/>

        <Container>
            <div className="shopping-cart">
                <h1>shopping cart</h1>
                <div className="d-none d-md-block">
                <Row className="items-heading ">
                    <Col lg="9" md="9"><p>Products</p></Col>
                    <Col lg="1" md="1"><p>Price</p></Col>
                    <Col lg="1" md="1"><p>Quantity</p></Col>
                    <Col lg="1" md="1"><p>Total</p></Col>
                </Row>
                </div>
                <hr/>
               
                {
                    cartDetails.map((value, index)=>{
                        return(
                            <>
                            <Row className="each-item">
                                <Col lg="1" md="1" xs='12' className="mt-4"><span>&times;</span></Col>
                                <Col lg="2" md="2" xs='6'><img src={value.image} alt="" /></Col>
                                <Col lg="6" md="6" xs="6"> <p>{value.description}</p>  </Col>
                                <Col lg="1" md="1" xs="4" > <p>{value.price}</p></Col>
                                <Col lg="1" md="1" xs="4"><p>{value.quantity}</p> </Col>
                                <Col lg="1" md="1" xs="4"> <p>{value.total}</p> </Col>
                            </Row>
                            <hr/>
                            </>
                        )
                    })
                }
                <Row className="justify-content-end text-center subtotal">
                   <Col lg="3">
                        <h4>Subtotal : ${total}</h4>
                        <Link to="/order/step1"> 
                        <Button variant="dark" className="w-100">CHECK OUT</Button>
                        </Link>
                    </Col>
                </Row> 
            </div>
        </Container>
        </>
    )
}
export default AddToCart;