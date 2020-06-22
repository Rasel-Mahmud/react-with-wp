import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import TagLine from "../components/TagLine";

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <TagLine />
        <section className="page-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p className="my-bio">
                  Hey, how is it going today? My name is Rasel, I'm a web designer/developer from Bangladesh. From 2010, i am relating with Design & Development, But the last couple of years i am working with WordPress (CMS), it is just awesome
                  i am a full-time freelancer in a different marketplace. i love to learn new programming language always when i get time to learn & like to watch movies also, though i haven't gotten much time to watch.
                  Thanks for your time.</p>
                <div className="row mt-5">
                  <div className="col-md-4">
                    <div className="milestone">
                      <h2>56<span>Clients</span></h2>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="milestone">
                      <h2>112<span>Projects</span></h2>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="milestone">
                      <h2>25<span>Collabs</span></h2>
                    </div>
                  </div>
                </div>
                <figure className="mt-5">
                  <img src="img/sign.png" alt="" />
                </figure>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <figure className="pic-frame">
                  <img src="../assets/images/up.png" alt="" />
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