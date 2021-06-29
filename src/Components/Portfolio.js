import React, { Component } from "react";
import Zmage from "react-zmage";
import Reveal from 'react-reveal/Reveal';

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="portfolio-item">
          <div className="item-wrap">
          
          <Reveal duration={3000}><div style={{ textAlign: "center", background:"#333333" }}>{projects.title}</div></Reveal>
          <Reveal duration={3000}><Zmage alt={projects.title} src={projectImage} /></Reveal>
          <Reveal duration={3000}><div style={{ textAlign: "center", background:"#333333" }}><a href={projects.url}>Link to Live Site/Demo Video</a></div></Reveal>
          <Reveal duration={3000}><div style={{ textAlign: "center", background:"#333333"}}><a href={projects.repo}>Link to Repo</a></div></Reveal>
          <Reveal duration={3000}><div style={{ background:"#333333", borderBottom: "1px solid", marginBottom: "48px", paddingBottom: "24px" }}></div></Reveal>

           
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
       
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Voici certains de mes projets.</h1>

              <div style={{height: "auto", margin: "0 auto", width : "50%"}}id="portfolio-wrapper">
                {projects}
              </div>
            </div>
          </div>
       
      </section>
    );
  }
}

export default Portfolio;
