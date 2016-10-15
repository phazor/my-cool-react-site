import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <div className="Nav">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </div>

        { children }
      </div>
    );
  }
}
