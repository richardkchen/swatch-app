import React from 'react'

export const NavBar = (props: any) => {
  const { handleSelectColor, handleRandom, colorList } = props

  const ColorList = colorList.map((color: string, index:number) => {
    return (
      <li key={index}>
        <a className='color-link' onClick={() => handleSelectColor(color)}>
          {color}
        </a>
      </li>
    )
  })

  return (
    <div className='nav-bar'>
      <button
        className='random-button'
        title='Random Color'
        onClick={handleRandom}
      >
        Random Color
      </button>
      <div className='color-list'>
        <ul>{ColorList}</ul>
      </div>
    </div>
  )
}
