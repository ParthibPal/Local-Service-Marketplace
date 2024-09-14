import React, { useState } from 'react'
import '../ActualComponent/ActualComponent_css/ServiceCard.css'



const ServiceCard = ({ card_img, card_heading, card_desc, onClick }) => {


return (
  <>
    <div className='service-card-container'>
      <img src={card_img} />
      <div className='service-card-info'>
        <label className='service-card-heading'>{card_heading}</label>
        <label className='service-card-desc'>{card_desc}</label>
      </div>
      <button className='service-card-btn' onClick={onClick}>Explore</button>
    </div>

  </>
)
}

export default ServiceCard