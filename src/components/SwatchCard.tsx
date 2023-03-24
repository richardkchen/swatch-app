import React from 'react'

export const SwatchCard = (props: any) => {
  const { color, opacity, onClick } = props
  return (
    <div
      className='swatch-card'
      onClick={onClick}
    >
      <div className='swatch-color' style={{ backgroundColor: color, opacity: opacity ?? 1 }}></div>
      <div className='swatch-label'>
        <p>{color}</p>
      </div>
    </div>
  )
}