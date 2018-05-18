'use strict'
import React, { Component } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import Aside from 'components/aside'
import './app.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div>
        <Aside />
      </div>
    )
  }
}

export default App
