import CardProducts from '../CardProducts/CardProducts'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

function ListCards({ data }) {
 
  console.log(data, 'desde list')
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(data)
  const [pageCount, setPageCount] = useState(0)
  const itemsPerPage = 12
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(data.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }
  return (
    currentItems.length === 0 ? <p className='text-center'>No se encontraron resultados</p>
      : (
        <div>
          <ul className='row gx-0 gx-md-5 gy-4'>
              {currentItems.map(item => (
                <li className='col-5 col-md-3 col-lg-3 ms-auto' key={item._id}>
                <Link to={`/product/${item._id}`}>
                  <CardProducts {...item} />
                </Link>
              </li>
              ))}
          </ul>
          <div className='row'>
            <div className='col-12'>
            <ReactPaginate
            breakLabel='...'
            nextLabel='next'
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel='previous'
            renderOnZeroPageCount={null}
            containerClassName='pagination  justify-content-center'
            breakClassName = 'page-link'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousLinkClassName='page-link'
            nextLinkClassName='page-link'
            activeClassName='page-item active'
          />
            </div>
          
          </div>
        </div>
      )
  )
}

export default ListCards