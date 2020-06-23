import React, {Component} from 'react';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <section className="portfolio-section">
          <div className="container">
            <ul className="portfolio-filter controls">
              <li className="control" data-filter="all">All</li>
              <li className="control" data-filter=".web">Web design</li>
              <li className="control" data-filter=".digital">Digital design</li>
              <li className="control" data-filter=".rened">3D Renedering</li>
              <li className="control" data-filter=".brand">Brand Identity</li>
            </ul>
          </div>
          <div className="container">
            <div className="row portfolios-area">
              <div className="mix col-lg-6 col-md-6 web">
                <a href="http://google.com" target="_blank" className="portfolio-item set-bg" data-setbg="../assets/images/portfolio/1.jpg">
                  <div className="pi-inner">
                    <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorum ea eum fuga impedit in, laboriosam nihil suscipit veniam voluptatem?</p>
                    <h2>+ See Project</h2>
                  </div>
                </a>
              </div>
              <div className="mix col-lg-6 col-md-6 digital">
                <a href="http://google.com" target="_blank" className="portfolio-item set-bg " data-setbg="../assets/images/portfolio/2.jpg">
                  <div className="pi-inner">
                    <h2>+ See Project</h2>
                  </div>
                </a>
              </div>
              <div className="mix col-lg-4 col-md-6 web">
                <a href="http://google.com" target="_blank" className="portfolio-item set-bg" data-setbg="../assets/images/portfolio/3.jpg">
                  <div className="pi-inner">
                    <h2>+ See Project</h2>
                  </div>
                </a>
              </div>
              <div className="mix col-lg-4 col-md-6 digital">
                <a href="http://google.com" target="_blank" className="portfolio-item set-bg" data-setbg="../assets/images/portfolio/4.jpg">
                  <div className="pi-inner">
                    <h2>+ See Project</h2>
                  </div>
                </a>
              </div>
              <div className="mix col-lg-4 col-md-6 rened">
                <a href="http://google.com" target="_blank" className="portfolio-item set-bg" data-setbg="../assets/images/portfolio/5.jpg">
                  <div className="pi-inner">
                    <h2>+ See Project</h2>
                  </div>
                </a>
              </div>
              <div className="mix col-lg-12 col-md-6 brand">
                <a href="http://google.com" target="_blank" className="portfolio-item set-bg" data-setbg="../assets/images/portfolio/6.jpg">
                  <div className="pi-inner">
                    <h2>+ See Project</h2>
                  </div>
                </a>
              </div>
              <div className="mix col-lg-6 col-md-6 rened">
                <a href="http://google.com" target="_blank" className="portfolio-item set-bg" data-setbg="../assets/images/portfolio/7.jpg">
                  <div className="pi-inner">
                    <h2>+ See Project</h2>
                  </div>
                </a>
              </div>
              <div className="mix col-lg-6 col-md-6 brand">
                <a href="http://google.com" target="_blank" className="portfolio-item set-bg" data-setbg="../assets/images/portfolio/8.jpg">
                  <div className="pi-inner">
                    <h2>+ See Project</h2>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;