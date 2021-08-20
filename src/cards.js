import React from "react";

const Cards = (props) => {
    return (<div className="card" style={{width: "18rem", padding:"20px", margin:"20px 0px"}}>
    <img src={props.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <a href={props.url} className="btn btn-dark">{props.label}</a>
    </div>
  </div>)
}

export default Cards