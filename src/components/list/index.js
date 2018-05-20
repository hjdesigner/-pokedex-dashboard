'use strict'
import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ items }) => (
  <ul>
    {items.map((item, index) =>
      <li key={index}>
        <Link to='/pokemon' data-id={item.url}>
          <figure>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} />
          </figure>
          <h2>{item.name}</h2>
        </Link>
      </li>
    )}
  </ul>
)

export default List
