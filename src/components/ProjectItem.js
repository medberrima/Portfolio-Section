import React, { Component } from 'react';
class ProjectItem extends Component{

  render(){
    let classD;

    switch (this.props.categorie) {
      case 'Logos & Branding': classD = "logos_branding"; break;
      case 'Landing page': classD = "development"; break;
      case 'social media design': classD = "social-media"; break;
    }
    return(
      <div className={`col-lg-4 col-md-6  mix  ${this.props.domaine} ${classD}`}>
        <div className="box">
          <img src={this.props.thumbnail} alt="" />
          <div className="info text-center">
            <ul className="info-tag mt-3">
              {this.props.skills.map((value) => {
                return <li key={value}>{value}</li>;
              })}
            </ul>  
            <div className="link">
              <a href={this.props.imgProject} className="venobox " data-gall="venue-gallary"> 
                <i className="fa fa-eye" />
              </a> 
              <a href={this.props.link} target="_blank" rel="noreferrer"> 
                Behance <i className="fa fa-chevron-circle-right" />
              </a>                           
            </div>
          </div>
        </div>
        <a href={this.props.link} className="venobox " data-gall="venue-gallary">
          <div className="title text-center">
            <h3>{this.props.title} </h3>
            <span className="text-center" />
            <p>{this.props.categorie} </p>
          </div> 
        </a>
      </div>
    );
  }
} 

export default ProjectItem ;