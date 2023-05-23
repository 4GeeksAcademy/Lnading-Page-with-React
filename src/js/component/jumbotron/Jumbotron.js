import React from "react";

export default function Jumbotron({title,description,bottonDescription}){

    return(
        <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{title}</h1>
        <p className="col-md-8 fs-4">{description}</p>
        <button className="btn btn-primary btn-lg" type="button">{bottonDescription}</button>
      </div>
    </div>

    );
}