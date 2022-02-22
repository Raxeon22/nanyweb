import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import Gif from '../../assets/giphy.gif'
import { Button } from 'react-bootstrap';
import Footer from "../../components/Footer"


const Thankyou = () => {
    localStorage.clear()
    return (
        <>
            <Navbar header={ true } shop={ true } />
            <div className="thank-you">
                <img src={ Gif } alt="" height="300" width="300" />
                <h1>THANK YOU, ENJOY!</h1>
                <Link to="/">
                    <Button variant="light"> { '<   ' }Back Home </Button>
                </Link>
                <span>if you have any issues <a href="/"> contact us</a> </span>
            </div>
            <Footer />
        </>
    )
}
export default Thankyou