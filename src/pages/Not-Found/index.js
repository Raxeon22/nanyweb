import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import { Button } from 'react-bootstrap';
import Footer from "../../components/Footer"


const NotFound = () => {
    return (
        <>
            <Navbar header={ true } shop={ true } />
            <div className="thank-you my-5 mx-2">
                <h2>LA PAGE QUE VOUS CHERCHEZ EST INTROUVABLE <b>:(</b></h2>
                <Link to="/">
                    <Button variant="light">Back Home </Button>
                </Link>
            </div>
            <Footer />
        </>
    )
}
export default NotFound