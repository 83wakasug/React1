import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Sidebar extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="bg-gray-100 p-4" style={{ height: '90vh' }}>
          <nav> 
            <ul>
              <li><a href="/uppgift2">uppgift2</a></li>
              <li><a href="/uppgift3">uppgift3</a></li>
            </ul>
          </nav>
      </div>
    )
  }
}

export default Sidebar