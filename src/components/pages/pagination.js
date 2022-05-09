import React from 'react'

export const PageLink = ({ number, paginate }) => {
    return (
        <li key={number} className='pagination-item'>
            <a onClick={() => paginate(number)} className='text-decoration-none text-dark'>
                {number}
            </a>
        </li>
    )
}

const Pagination = ({ totalPage, setCurrentPage, currentPage }) => {
    let PageNumber = []
    let pageItemSize = 5;

    const onNext = () => {
        setCurrentPage(currentPage + 1);
    };
    const onPrevious = () => {
        setCurrentPage(currentPage - 1);
    };

    for (let i = 1; i <= Math.ceil(totalPage / pageItemSize); i++) {
        PageNumber.push(i)
    }

    const paginate = (number) => setCurrentPage(number);

    return (
        <ul className='pagination justify-content-center pt-3'>
            <li key='pre'
                className={currentPage === 1 ? 'pagination-item disabled' : 'pagination-item'}
                onClick={onPrevious}
            >
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </li>
            {PageNumber.map(number => {
                return <PageLink number={number} paginate={paginate} />
            })}
            <li key='next'
                className={currentPage === PageNumber.length ? 'pagination-item disabled' : 'pagination-item'}
                onClick={onNext}
            >
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </li>
        </ul>
    )
}

export default Pagination
