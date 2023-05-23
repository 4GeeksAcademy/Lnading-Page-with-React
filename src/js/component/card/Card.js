import React from "react";

export default function Card({title,description,bottonDescription}){

    return(
        <div className="card" style={{width: "18rem", color: "green"}}>
  <img src="#/" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#/" className="btn btn-primary">{bottonDescription}</a>
  </div>
</div>
    );
};