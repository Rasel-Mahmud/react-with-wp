import React, {Component} from 'react';
import FooterTag from "./FooterTag";
import axios from "axios";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      data : '',
      display : false
    }
  }

  componentDidMount() {
    axios.get('https://awsweb.host/wp-json/project/v1/footer/')
      .then(res=>this.setState({data: res.data, display: true}))
      .catch()
  }

  footerCopyRight = ()=> {
    if(this.state.display){
      return this.state.data[0].copyright
    }
  }

  render() {
    return (
      <div>
        <footer className="footer-section text-center">
          <div className="container">
            <FooterTag />
            <div className="copyright">
              <span dangerouslySetInnerHTML={{__html: this.footerCopyRight()}} />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;