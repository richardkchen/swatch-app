import React from 'react'
import logo from '../logo.svg';

export const Header = (props: any) => {
  const { children } = props
  return (
    <header className='header'>
      <a className='header-logo' href='index.html'>
          <img src='images/logo-symbol.svg' alt='swatch-app' />
      </a>
      <input className='header-search' type="text" placeholder='Search'/>
    </header>
  )
}