import React, {Component} from 'react';
import {Link} from "react-router-dom";

class FooterTag extends Component {
  render() {
    return (
      <div>
        <h2 className="section-title mb-5">Let’s work together</h2>
        <Link to="/contact" className="site-btn">Get in touch</Link>
        <div className="social-links">
          <a href=""><span className="fa fa-pinterest" /></a>
          <a href=""><span className="fa fa-linkedin" /></a>
          <a href=""><span className="fa fa-instagram" /></a>
          <a href=""><span className="fa fa-facebook" /></a>
          <a href=""><span className="fa fa-twitter" /></a>
        </div>
      </div>
    );
  }
}

export default FooterTag;