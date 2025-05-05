import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Sidebar extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
          <nav>
            <ul>
              <li><a href="/uppgift2">uppgift2</a></li>
              <li><a href="/uppgift3">uppgift3</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
      </div>
    )
  }
}

export default Sidebar