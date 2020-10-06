import React from 'react';

import './CardUI.css'


const Card = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} className="card-img-top" alt = "Image 1"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          {props.desc}
        </p>
        <a href={props.url} className="btn btn-outline-success">View Project</a>
      </div>
    </div>
  );
}

export default Card;