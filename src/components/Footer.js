import React, {Component} from 'react';
import FooterTag from "./FooterTag";

class Footer extends Component {
  render() {
    return (
      <div>
        {
          // footer section start
        }
        <footer className="footer-section text-center">
          <div className="container">
            <FooterTag />
            <div className="copyright">
              Copyright &copy; 2020 All rights reserved | build with <span className="fa fa-heart red" /> React
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;