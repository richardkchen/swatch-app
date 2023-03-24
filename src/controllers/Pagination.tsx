import React from 'react'
import { usePagination, DOTS } from '../hooks/usePagination'

export const Pagination = (props: any) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props

  const paginationRange =
    usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize,
    }) ?? []

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }
  return (
    <ul className='pagination-container'>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li className='pagination-item dots' key={index}>
              &#8230;
            </li>
          )
        }

        return (
          <li
            className={`pagination-item ${
              currentPage === pageNumber ? 'pagination-item-selected' : ''
            }`}
            onClick={() => onPageChange(pageNumber)}
            key={index}
          >
            {pageNumber}
          </li>
        )
      })}
    </ul>
  )
}
