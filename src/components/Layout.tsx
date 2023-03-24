import React from 'react'
import logo from '../logo.svg'
import { Header } from './Header'
import { NavBar } from './NavBar'

export const Layout = (props: any) => {
  const { children, handleSelectColor, handleRandom, colorList } = props
  return (
    <>
      <Header />
      <div className='content'>
        <NavBar
          handleSelectColor={handleSelectColor}
          handleRandom={handleRandom}
          colorList={colorList}
        />
        {children}
      </div>
    </>
  )
}
