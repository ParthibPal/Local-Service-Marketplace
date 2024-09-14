import React from 'react'
import './Component_css/Test.css'
import Plumber from '../Images/Plumber.jpg'
import Electrician from '../Images/Electrician.jpg'
import Fitness from '../Images/Fitness.jpg'
import Handyman from '../Images/Handyman.jpg'
import Arrow from '../Images/arrow.png'


const Test = () => {

  return (
    <>
      <div className='body'>
        <div className='container'>
          <img className='arrow left' src={Arrow} />
          <div className='frame'>
            <div className='slider'>
              <img className='image' src={Plumber}/>
              <img className='image' src={Plumber}/>
              <img className='image' src={Plumber}/>
              <img className='image' src={Plumber}/>
            </div>
          </div>
          <img className='arrow right' src={Arrow} />
        </div>
      </div>
    </>
  )
}

export default Test