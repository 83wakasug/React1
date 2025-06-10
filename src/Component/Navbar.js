import React, { Component } from 'react';

export class Navbar extends Component {
  

  render() {
    return (
      <div className="flex flex-col">
        <header className="bg-gray-100 p-4">
          <nav>
            <ul className="flex space-x-4">
              <li className='hover:bg-gray-500'><a href="/">Home</a></li>
              <li className='hover:bg-gray-500'><a href="/about">About</a></li>
              <li className='hover:bg-gray-500'><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;