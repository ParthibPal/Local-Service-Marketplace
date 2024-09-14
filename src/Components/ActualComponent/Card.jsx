import React from 'react';
import '../ActualComponent/ActualComponent_css/Card.css';
const Card = (props) => {
    return(
      <div className="service-card">
      <img src={props.imageSrc} alt={props.name} className="card-image" />
      <div className='try'>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        <button className="button-85"  onClick={props.onClick} >Explore</button>
      </div>
    </div>
        
    )
}
export default Card;