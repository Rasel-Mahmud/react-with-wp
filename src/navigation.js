import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="col-lg-8 col-md-9">
        <a href="" className="site-btn header-btn">Get in touch</a>
        <nav className="main-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;