import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from 'axios';
import TagLine from "../components/TagLine";

class Project extends Component {
  constructor() {
    super();
    this.state = {
      project: [],
      filter : [],
      display: false
    }
  }
  componentDidMount = () => {
    // getting project information
    axios.get('https://awsweb.host/wp-json/wp/v2/show_project')
      .then(res=>this.setState({project: res.data, display: true}))
      .catch()

    // getting filter information
    axios.get('https://awsweb.host/wp-json/wp/v2/filter')
      .then(res=>this.setState({filter: res.data}))
      .catch()

  }

  projectData = ()=>{
    let projectInfo = this.state.project;
    return projectInfo.map((data, index)=>{
      return (
        <div key={`project-container-${index}`} className="mix col-lg-6 col-md-6 web">
           <a href={data['project-link'] ? data['project-link'] : null} target="_blank" className="portfolio-item set-bg" style={{backgroundImage: "url("+ data['project-image'][0] +")"}}>
             <div className="pi-inner">
               <p className="project-description" dangerouslySetInnerHTML={{__html: data.content.rendered}}/>
               <h2>+ See Project</h2>
             </div>
           </a>
       </div>
      );
    })
  }

  filterData = ()=>{
    let filterInfo = this.state.filter;
    return filterInfo.map((filter)=>{
      return <li key={`project-filter${filter.id}`} className="control" data-filter={`.${filter.slug}`}>{filter.name}</li>
    })
  }

  render() {
    if(this.state.display){
      return (
        <div>
          <Header />
          <TagLine />
          <section className="portfolio-section">
            <div className="container">
              <ul className="portfolio-filter controls">
                <li className="control" data-filter="all">All</li>
                {this.filterData()}
              </ul>
            </div>
            <div className="container">
              <div className="row portfolios-area">
                {this.projectData()}
              </div>
            </div>
          </section>
          <Footer />
        </div>
      );
    }else{
      return (
        <div>
          <div id="preloder">
            <div className="loader" />
          </div>
        </div>
      );
    }
  }
}

export default Project;