import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">NetFlou</Link>
        </div>
        
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Les films</Link>
          </li>
        </ul>
       
      </nav>
    );
  }
}

export default Nav;
