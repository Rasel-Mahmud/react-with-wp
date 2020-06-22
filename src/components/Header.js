import React, {Component} from 'react';
import {Link} from "react-router-dom";
class Header extends Component {
  refreshPage(){
    window.location.reload();
  }
  render() {
    return (
      <header className="header-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3">
              <div className="logo">
                <p onClick={this.refreshPage}><Link to="/"><img src="../assets/images/logo.png" alt=""/></Link></p>
              </div>
            </div>
            <div className="col-lg-8 col-md-9">
              <Link to="/contact" className="site-btn header-btn">Get in touch</Link>
              <nav className="main-menu">
                <ul>
                  <li onClick={this.refreshPage}><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="nav-switch">
          <i className="fa fa-bars" />
        </div>
      </header>
    );
  }
}

export default Header;