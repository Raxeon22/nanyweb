import React , {useState} from 'react';
import Navbar from '../../components/Navbar'; 
import {AiOutlineMinus ,AiOutlinePlus} from 'react-icons/ai'
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import { Row , Col , Container , Button ,Tabs , Tab} from 'react-bootstrap';

import ProductPageSlider from '../../components/Shop/Product-page/ProductPageSlider';
import ProductSlider from '../../components/Shop/ProductSlider';
import { FaFacebook  , FaStar , FaShoppingCart, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { RiAccountPinCircleFill } from 'react-icons/ri';


const ProductPage = () => {
    const [quantity , setQuantity ] = useState(1)
    if(quantity < 1){
        alert('quantity cannot be in minus')
    }

    const variants = [
        {
            color : 'red' 
        },
        {
            color : 'blue' 
        },
        {
            color : 'green' 
        }

    ]
 return(
     <>
        <Navbar header={false} shop={false}/>
        <Container>
            <Row className="indiv-product">
            <Col xs="12" lg="5" md="6">
                <ProductPageSlider/>

            </Col>
            <Col xs="12" lg="7" md="6" className="product-about">
                <h4 className="product-name">Lorem ipsum dolor sit amet consectetur.</h4>
                <p  className="instock">in Stock</p>

                <div className="d-flex mt-2">
                    <span className="mt-1 ratings">  
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </span>
                  
                </div>
                <p className="price mt-2">price: <b>44$</b></p>
                <div className="color d-flex">
                  <p className="mt-2 mb-0 p-0"> color :</p>
                  {
                      variants.map((value ) => {
                          return(
                          <span style={{backgroundColor : value.color}} className=" rounded-circle m-1"></span> 
                             
                          )
                      })
                  }
                 
                </div>
                <div className="quantity d-flex">
                    <span onClick={()=> setQuantity(quantity + 1)}> <AiOutlinePlus/> </span>
                    <p className="p-2">  {quantity} </p>
                    <span onClick={()=> setQuantity( quantity - 1)}><AiOutlineMinus/> </span>
                </div> <br/>
                <Link to="/order/step1">
            <Button> <FaShoppingCart className="m-1"/> Order Now</Button> 
            </Link>
            <div className="social-icons mt-5">
                <FaFacebook size="25"color="blue" className="m-1"/>
                <FaTwitter size="25"color="primary" className="m-1"/>
                <FaLinkedin size="25"color="gray" className="m-1"/>
                <FaInstagram size="25"color="red" className="m-1"/>
            </div>
            </Col>
            </Row>
            <div className="product-details">
                <Tabs defaultActiveKey="description">
                    <Tab eventKey="description" title="Description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque voluptatibus impedit nemo, porro totam. Vel blanditiis adipisci commodi facere deleniti rerum molestias consectetur?</p>
                    </Tab>
                
                    <Tab eventKey="policy" title="Return Policy">
                        <p>return policy</p>
                    </Tab>
                 
                </Tabs>
            </div>
        </Container>
        <ProductSlider heading='related products'/>
      
     </>
 )
}
export  default ProductPage;