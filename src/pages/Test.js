import React, {Component} from 'react';
import axios from 'axios';
import Header from "../components/Header";

class Test extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      display: false
    }
  }

  componentDidMount() {
    axios.get('http://wp-api.test/wp-json/wp/v2/show_project')
      .then(res=>this.setState({data: res.data, display: true}))
      .catch(err=>console.log(err))
  }

  render() {
    const data = this.state.data;
    console.log(data);
    return (
      <div>
        <Header />
        <h1>Hello</h1>
      </div>
    );
  }
}

export default Test;