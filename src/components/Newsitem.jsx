import React from 'react';
import image from '../assets/web.image.jpg'
import './Nav.css';
const Newsitem = ({title, description, src, url}) => {
  return (
    <div className="card text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{maxWidth:"380px", maxHeight:"600px" , backgroundColor:"#1c022e"}}>
      <img style ={{height: "200px", width:"360px"}} src={src?src:image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"there is no description "}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more</a>
      </div>
    </div>
  )
}

export default Newsitem;
