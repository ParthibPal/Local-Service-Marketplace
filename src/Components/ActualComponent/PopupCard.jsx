import React, {useState} from 'react'
import './ActualComponent_css/PopupCard.css'
import PopupcardContents from './PopupcardContents'

const PopupCard = (id) => {

  

  return (

    <>
      <div className='popupcard-container'>
        <div className='popupcard-heading'>
          <h2>Services Providers List</h2>
        </div>
        <div className='popupcard-content'>
          <PopupcardContents name={'PAPA'} phone={'123'} location={'55'} salesdata={'66'} rating={'99'} joiningdate={'97'}/>
          <PopupcardContents name={'Parthib Pal'} phone={'1234654564'} location='Uttarpara' salesdata='532' rating='3.9' joiningdate='2002'/>
          <PopupcardContents/>
          <PopupcardContents/>
          <PopupcardContents/>
          
        </div>

      </div>

    </>
  )
}

export default PopupCard