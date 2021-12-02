import React from 'react'
import {Spinner} from 'react-bootstrap'

const Preloader = () => {
    return(
        <Spinner animation="border" className="text-center" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}
export default Preloader;