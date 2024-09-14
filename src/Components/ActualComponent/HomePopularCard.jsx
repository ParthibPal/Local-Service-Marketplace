import React from 'react'
import './ActualComponent_css/HomePopularCard.css'

const HomePopularCard = (card) => {
  return (
    <>
        <div className='popular-cards'>
            <img src={card.img} />
            <div className='popular-cards-heading' >{card.desc}</div>
            <button>Know more</button>
          </div>
    </>
  )
}

export default HomePopularCard