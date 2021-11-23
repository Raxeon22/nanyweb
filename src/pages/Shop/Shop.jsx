import React , {useState} from 'react';
import Navbar from '../../components/Navbar';
import { Row , Col ,Form, Container , Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import HeadPhones from '../../assets/headphones.jpg'
import SelfieStick from '../../assets/selfie-stick.jpg'
import Speakers from '../../assets/speakers.jpg'
import '../../css/Shop.css'
import ProductSlider from '../../components/Shop/ProductSlider'

export const Products = [
    {
        title : 'Head Phones' , image : HeadPhones , price : "44$"
    },
    {
        title : 'Electrons' , image : SelfieStick , price : "24$"
    },
    {
        title : 'Speakers' , image : Speakers , price : "49$"
    },
  
    {
        title : 'Speakers' , image : SelfieStick , price : "49$"
    },
    {
        title : 'Speakers' , image : Speakers , price : "49$"
    },
    {
        title : 'Speakers' , image : HeadPhones , price : "49$"
    },
]
const categories = [
    {cate: "weeb flowers" },
    {cate: "laptop" },
    {cate: "headphones" },
    {cate: "speakers" },
    {cate: "knifes" },
    {cate: "weeb flowers" },
    {cate: "weeb flowers" },
    {cate: "phones" },
    {cate: "weeb flowers" },
    {cate: "weeb flowers" },
    {cate: "weeb flowers" },
]

const Shop = () =>{
    return(
        <>
        <Navbar/>
        <div className=" products animate__animated animate__fadeInUp animate__fast">
            <Container fluid>
                <div className="sort" >
                    <h6>sort by</h6>
                    <Form.Select aria-label="Default select example"  size="sm">
                        <option>Oldest</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </div>
           
                <Row>
                    <Col md="3" xs="12" className="text-right mb-4" >
                        <div className="filter-by">
                            <h6>Filter Results By</h6>
                            {  
                               
                                categories.map((val , index)=> {
                                    return(
                                 <Link to="/" key={index}> <p> {val.cate} </p> </Link> 
                                    )


                                })
                            }
                          
                        </div>
                     
                    </Col>
                    <Col md="9" xs="12"className="shop-cards">
                    <Row>
                    {
                        Products.map((val, index)=>{
                            return(
                                <Col xs="12" md="4" sm="6" key={index}>
                                    <Link to="/shop/product">
                                        <Card className="each-card">
                                            <Card.Img variant="top" />
                                            <img src={val.image} width="100%" height="280" />
                                            <Card.Body>
                                                <Card.Title>
                                                    <div className="text-center">
                                                       <span className="price"> {val.price} </span>
                                                       <p>{val.title} </p>
                                                    </div>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card> 
                                    </Link>
                                </Col>
                            )
                        })
                    }
                    
                </Row>
                    </Col>
                </Row>
                
            
            </Container>
        </div>
        <ProductSlider heading="new arrivals" />
        </>
    )
}
export default Shop