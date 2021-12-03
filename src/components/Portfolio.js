import React, { Component } from 'react';
import ProjectItem  from './ProjectItem';
import ProjectInfo from './ProjectInfo' ;

class Portfolio extends Component{
  constructor(){
    super();
    this.state = { InfoP : ProjectInfo }
  }

  mapping(info){
    const projects = info.map( project => <ProjectItem
                            id={project.id}
                            domaine={project.domaine}
                            thumbnail={project.thumbnail}
                            skills={project.skills}
                            imgProject={project.imgProject}
                            link={project.link}
                            title={project.title}
                            categorie={project.categorie}
                    />) ;
    return projects
  }

  render(){
    return(
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="heading text-center">
            <h2 className="mt-5">portfolio </h2>
            <span />
          </div>
          <div className="text-center mb-5 menu">
            <ul className="btn-choice">
              <li className="btn " data-filter="*">all </li>
              <li className="btn " data-filter=".development" >development</li>
              <li className="btn " data-filter=".logo">Logos &amp; Branding</li>
              <li className="btn " data-filter=".social-media">social media designs</li>
            </ul>
          </div>
          <div className="gallary text-uppercase">
            <div className="row ">
              {this.mapping(this.state.InfoP)}
            </div> 
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio ;
