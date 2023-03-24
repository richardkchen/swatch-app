import React from 'react'
import { SwatchCard } from '../components/SwatchCard'

export const DetailView = (props: any) => {
  const { selectedColor, handleDeselectColor } = props

  const TintSwatchCards = [0.8, 0.5, 0.3, 0.2, 0.1].map((opacity, index) => {
    return (
      <div className='tint-item' key={index}>
        <SwatchCard color={selectedColor} opacity={opacity} />
      </div>
    )
  })

  return (
    <div className='detail-container'>
      <div className='detail-swatch-card'>
        <SwatchCard color={selectedColor} />
      </div>
      <div className='tint-container'>{TintSwatchCards}</div>
      <button className='clear-selected' onClick={handleDeselectColor}>
        Clear
      </button>
    </div>
  )
}
