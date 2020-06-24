import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
class Header extends Component {

  constructor() {
    super();
    this.state ={
      data : '',
      display: false
    }
  }

  componentDidMount() {
    axios.get('https://awsweb.host/wp-json/project/v1/header/')
      .then(res=>{this.setState({data: res.data, display: true})})
      .catch()
  }

  showLogo = () => {
    if(this.state.display){
      return this.state.data[0].logo
    }
  }

  render() {
    return (
      <header className="header-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3">
              <div className="logo">
                <p><Link to="/"><img src={this.showLogo()} alt=""/></Link></p>
              </div>
            </div>
            <div className="col-lg-8 col-md-9">
              <Link to="/contact" className="site-btn header-btn">Get in touch</Link>
              <nav className="main-menu">
                <ul>
                  <li><Link to="/">Home</Link></li>
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