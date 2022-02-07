import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import { Button } from 'react-bootstrap';

const NotFound = () => {
    return (
        <>
            <Navbar header={ true } shop={ true } />
            <div className="thank-you my-5">
                <h2>THE PAGE YOU ARE LOOKING FOR IS NOT FOUND <b>:(</b></h2>
                <Link to="/">
                    <Button variant="light">Back Home </Button>
                </Link>
            </div>
        </>
    )
}
export default NotFound