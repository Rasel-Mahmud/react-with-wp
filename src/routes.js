import React, {Component} from 'react';
import About from './pages/About';
import Project from './pages/project';
import Contact from './pages/Contact';
import {Route} from "react-router-dom";
import Header from "./components/Header";
import TagLine from "./components/TagLine";
class Routes extends Component {
  render() {
    return (
      <div>
        <Header />
        <TagLine />
        <Route exact path="/" component={Project} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default Routes;