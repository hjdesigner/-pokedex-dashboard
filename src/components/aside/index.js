'use strict'
import React from 'react'
import Nav from 'components/nav'
import Icon from 'components/icon'
import './aside.scss'

const Aside = () => (
  <aside className='aside'>
    <div className='aside__logo'>
      Pokedex Dashboard
    </div>
    <Nav>
      <li><a href='#'><Icon name='list2' />Pokemon</a></li>
      <li><a href='#'><Icon name='embed' />Code</a></li>
    </Nav>
    <div className='aside__version'>
      version: beta
    </div>
  </aside>
)

export default Aside
