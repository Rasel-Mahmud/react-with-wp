import React, {Component} from 'react';
import Footer from "../components/Footer";
import TagLine from "../components/TagLine";
import axois from 'axios';

class About extends Component {
  constructor() {
    super();
    this.state = {
      data : '',
      display: false
    }
  }

  componentDidMount() {
    axois.get('https://awsweb.host/wp-json/project/v1/about/')
      .then(res=>{this.setState({data: res.data, display: true})})
      .catch()
  }

  aboutMe = ()=>{
    if(this.state.display){
      return this.state.data[0].about_me
    }
  }

  aboutImage = ()=>{
    if(this.state.display){
      return this.state.data[0].about_image
    }
  }

  render() {
    return (
      <div>
        <section className="page-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p className="my-bio">{this.aboutMe()}</p>
                <div className="row mt-5">
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <figure className="pic-frame">
                  <img src={this.aboutImage()} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default About;