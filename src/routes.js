import React, {Component} from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/project';
import Contact from './pages/Contact';
import {Route} from "react-router-dom";
import Asif from "./pages/Asif";
class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Project} />
        <Route path="/asif" component={Asif} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default Routes;