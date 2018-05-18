'use strict'
import React from 'react'
import './nav.scss'

const Nav = ({ children }) => (
  <ul className='component-nav'>
    {children}
  </ul>
)

export default Nav
