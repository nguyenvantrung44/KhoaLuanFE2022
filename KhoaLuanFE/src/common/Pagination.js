import React from 'react'
import ReactPaginate from 'react-paginate'

export default function Pagination(props) {
    const {data} =props
    return (

            <ReactPaginate 
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={data.pageCount}
              marginPagesDisplayed={3}
              pageRangeDisplayed={3}
              onPageChange={data.handleChange}
              containerClassName={"pagination justify-content-center"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
              activeLinkClassName={"active"}
            />
    )
}
