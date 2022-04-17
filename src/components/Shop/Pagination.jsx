import React, { useState } from 'react';

const Pagination = ({ dataPerPage, totalPages, Paginate }) => {
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPages / dataPerPage); i++) {
        pageNumbers.push(i)
    }
    const [currN, setCurrN] = useState(1)
    return (
        <nav className="pagination-custom" aria-label="Pagination">
            <li className="">
                <span className="sr-only ">Prev</span>
            </li>

            {
                pageNumbers.map((number) => {
                    return <li style={ { listStyle: 'none' } } onClick={ () => {
                        Paginate(number)
                        setCurrN(number)
                    } }
                        className="each-number">
                        { number }
                    </li>

                })
            }

            <li className="">
                <span className="sr-only" >Next</span>


            </li>
        </nav>
    )
}
export default Pagination;