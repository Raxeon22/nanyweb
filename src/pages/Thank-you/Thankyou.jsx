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
                <p>nous avons envoyé une facture à votre email</p>
                <h1>MERCI, PROFITEZ !</h1>
                <Link to="/">
                    <Button variant="light"> { '<   ' }retour à la maison</Button>
                </Link>
                <span>si vous avez des problèmes  <a href="/">contactez-nous</a> </span>
            </div>
            <Footer />
        </>
    )
}
export default Thankyou