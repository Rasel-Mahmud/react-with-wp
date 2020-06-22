import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from 'axios';

class Project extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      imageData: [],
      display: false
    }
  }
  componentDidMount = () => {
    axios.get('http://wp-api.test/wp-json/wp/v2/show_project')
      .then(res=>{
        res.data.map((id, index)=>{
          const mediaID = `${res.data[index].featured_media}`;
          axios.get(`http://wp-api.test/wp-json/wp/v2/media/${mediaID}`)
            .then(media=>{
              this.setState({data: res.data, imageData: [...this.state.imageData, media.data], display: true })
            })
            .catch(err => console.log((err)))
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const data = this.state.data;
    const imageData = this.state.imageData;

    const title = imageData.map((title, index)=>{
      return <div key={title.id}>
        <h1>{data[index].title.rendered}</h1>
        <img src={title.media_details.sizes.full.source_url} alt='' />
      </div>
    });

    return (
      <div>
        <Header />
        {title}
        <Footer />
      </div>
    );
  }
}

export default Project;