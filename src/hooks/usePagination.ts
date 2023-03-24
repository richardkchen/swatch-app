import React, { useMemo } from 'react'

export const DOTS = '...'

export const range = (start: number, end: number) => {
  let length = end - start + 1
  return [...Array(length).keys()].map((n) => n + start)
}

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount=1,
  currentPage
}: any) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)
    const totalPageNumbers = siblingCount + 5

    // number of pages less than page numbers [1...totalPageCount]
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount, 
      totalPageCount
    )
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    // no left dots, display right dots [1 2 ...]
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount
      let leftRange = range(
        1,
        leftItemCount
      )
      return [...leftRange, DOTS, totalPageCount]
    }

    // no right dots, display left dots [... 98 99]
    if(shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      )
      return [firstPageIndex, DOTS, ...rightRange]
    }

    // display right dots, left dots [... 50 51 ...]
    if(shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(
        leftSiblingIndex,
        rightSiblingIndex
      )
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [totalCount, pageSize, siblingCount, currentPage])

  return paginationRange
}