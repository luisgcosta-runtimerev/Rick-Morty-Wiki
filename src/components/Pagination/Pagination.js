import React from 'react'
import ReactPaginate from 'react-paginate';

export default function Pagination({info, setPageNumber, pageNumber}) {

  return (
    <ReactPaginate
    forcePage={pageNumber === 1 ? 0 : pageNumber - 1} 
    className='pagination justify-content-center gap-4 my-4'
    pageCount={info?.pages}
    nextLabel='Next >'
    previousLabel='< Previous'
    nextClassName='btn btn-primary'
    previousClassName='btn btn-primary'
    pageClassName='page-item'
    pageLinkClassName='page-link'
    onPageChange={(data) => setPageNumber(data.selected +1)}
    activeClassName='active'
    />
  )
}
