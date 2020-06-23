import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from 'axios';
import TagLine from "../components/TagLine";

class Project extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      imageData: [],
      filter : [],
      display: false
    }
  }
  componentDidMount = () => {
    // getting project information
    axios.get('https://awsweb.host/wp-json/wp/v2/show_project')
      .then(res=>{
        res.data.map((id, index)=>{
          const mediaID = `${res.data[index].featured_media}`;
          axios.get(`https://awsweb.host/wp-json/wp/v2/media/${mediaID}`)
            .then(media=>{
              this.setState({data: res.data, imageData: [...this.state.imageData, media.data], display: true })
            })
            .catch(err => console.log((err)))
        })
      })
      .catch(err => console.log(err))

    // getting filter information
    axios.get('https://awsweb.host/wp-json/wp/v2/filter')
      .then(res=>this.setState({filter: res.data}))
      .catch()

  }

  render() {
    const data = this.state.data;
    const imageData = this.state.imageData;
    const filterData = this.state.filter;

    const filter = filterData.map((name)=>{
      return (
            <li className="control" key={name.id} data-filter={`${name.slug}`}>{name.name}</li>
        );
    })

    const portfolioData = imageData.map((title, index)=>{
      const returnFilterClass = ()=>{
        if(data[index].filter[0] === filterData[index].id){
          return filterData[index].slug
        }
        return '';
      }

      return <div key={title.id} className={`mix col-lg-6 col-md-6 ${returnFilterClass()}`}>
        <a href="http://google.com" target="_blank" className="portfolio-item set-bg"
           data-setbg="../assets/images/portfolio/8.jpg" style={{
          backgroundImage: "url(" + `${imageData[index].media_details.sizes.full.source_url}` + ")"
        }}>
          <div className="pi-inner">
            <div className="project-description" dangerouslySetInnerHTML={{__html: data[index].content.rendered}} />
            <h2>+ See Project</h2>
          </div>
        </a>
      </div>
    });

    if(this.state.display){
      return (
        <div>
          <Header />
          <TagLine />
          <section className="portfolio-section">
            <div className="container">
              <ul className="portfolio-filter controls">
                <li className="control" data-filter="all">All</li>
                {filter}
              </ul>
            </div>
            <div className="container">
              <div className="row portfolios-area">
                {portfolioData}
              </div>
            </div>
          </section>
          <Footer />
        </div>
      );
    }else {
      return(
        <p>Loading....</p>
      );
    }
  }
}

export default Project;