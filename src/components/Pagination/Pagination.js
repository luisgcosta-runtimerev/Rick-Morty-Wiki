import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function Pagination({ info, setPageNumber, pageNumber }) {
    const [width, setWidth] = useState(window.innerWidth);

    const updateDimension = () => {
        setWidth(window.innerWidth);
    };
    console.log(width);
    useEffect(() => {
        window.addEventListener('resize', updateDimension);
        return () => window.removeEventListener('resize', updateDimension);
    }, []);

    return (
        <>
            <style jsx="true">
                {`
                    @media (max-width: 768px) {
                        .next,
                        .prev {
                            display: none;
                        }
                        .pagination {
                            font-size: 14px;
                        }
                    }
                `}
                {`
                    .next > a,
                    .prev > a {
                        color: #fff !important;
                        text-decoration: none;
                    }
                `}
            </style>
            <ReactPaginate
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                className="pagination justify-content-center gap-4 my-4"
                pageCount={info?.pages}
                nextLabel="Next >"
                previousLabel="< Previous"
                nextClassName="btn btn-primary next"
                previousClassName="btn btn-primary prev"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                onPageChange={(data) => setPageNumber(data.selected + 1)}
                activeClassName="active"
                marginPagesDisplayed={width < 576 ? 1 : 2}
                pageRangeDisplayed={width < 576 ? 1 : 2}
            />
        </>
    );
}
