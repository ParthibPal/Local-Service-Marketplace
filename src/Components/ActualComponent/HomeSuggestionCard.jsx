import React from 'react'
import './ActualComponent_css/HomeSuggestionCard.css'

const HomeSuggestionCard = (props) => {
  return (
    <>
        <div className='HomeSuggestionCard-container'>
              <img src={props.img} />
              <div className='suggestion-font'>{props.desc}</div>
        </div>
    </>
  )
}

export default HomeSuggestionCard