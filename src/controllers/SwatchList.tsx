import React from 'react'
import { SwatchCard } from '../components/SwatchCard'
import { Pagination } from './Pagination'

export const SwatchList = (props:any) => {

  const {
    handleSelectColor,
    hexList,
    currentPage,
    onPageChange,
    pageSize
  } = props

  const SwatchCards = hexList
    .filter((n: string, i: number) => {
      const start = (currentPage - 1) * pageSize
      const end = start + pageSize
      return i >= start  && i < end
    })
    .map((hex: string, index: number) => {
      return (
        <div className='swatch-list-card' key={index}>
          <SwatchCard color={hex} onClick={() => handleSelectColor(hex)} />
        </div>
      )
    })

  return (
    <>
      <div className='swatch-container'>
        <div className='swatch-cards-container'>{SwatchCards}</div>
        <Pagination
          onPageChange={onPageChange}
          totalCount={hexList.length}
          currentPage={currentPage}
          pageSize={pageSize}
          className='pagination-container'
        />
      </div>
    </>
  )
}


