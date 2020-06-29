import React, {Component} from 'react';
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import TagLine from "../components/TagLine";

class Home extends Component {
  render() {
    return (
      <div>
        <TagLine />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default Home;