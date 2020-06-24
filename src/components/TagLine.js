import React, {Component} from 'react';
import axios from "axios";

class TagLine extends Component {
  constructor() {
    super();
    this.state = {
      data : '',
      display : false
    }
  }

  componentDidMount() {
    axios.get('http://wp-api.test/wp-json/project/v1/header/')
      .then(res=>this.setState({data: res.data, display: true}))
      .catch()
  }

  tagLine = ()=> {
    if(this.state.display){
      return this.state.data[0].tag_line
    }
  }

  render() {
    return (
      <section className="intro-section">
        <div className="container text-center">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <h2 className="section-title" dangerouslySetInnerHTML={{__html: this.tagLine()}}></h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TagLine;