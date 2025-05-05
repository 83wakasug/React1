import PropTypes from 'prop-types'
import React, { Component } from 'react'


export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>

    </div>
    )
  }
}

export default Navbar