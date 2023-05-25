import React from "react";

export default function Jumbotron({title,description,bottonDescription}){

    return(
    <div className="p-5 mb-4 mt-2 bg-light rounded-3">
      <div className="container-fluid py-1">
        <h1 className="display-2 fw-semibold">{title}</h1>
        <p className="col-md-8 fs-4 display-4">{description}</p>
        <button className="btn btn-primary btn-lg" type="button">{bottonDescription}</button>
      </div>
    </div>

    );
}