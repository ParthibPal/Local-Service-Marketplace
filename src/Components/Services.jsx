import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import './Component_css/Services.css'
import ServiceCard from './ActualComponent/ServiceCard'
import PopupCard from './ActualComponent/PopupCard'


import ServicesCarpetCleaning from '../Images/Services-CarpetCleaning.jpg'
import ServicesFloorCleaning from '../Images/Services-FloorCleaning.jpg'
import ServicesComputerRepair from '../Images/Services-ComputerRepair.jpg'
import ServicesElectrician from '../Images/Services-Electrician.jpg'
import ServicesEventPlanning from '../Images/Services-EventPlanning.jpg'
import ServicesFitness from '../Images/Services-Fitness.jpg'
import ServicesGraphicDesign from '../Images/Services-GraphicDesign.jpg'
import ServicesHandyman from '../Images/Services-Handyman.jpg'
import ServicesInteriorDesign from '../Images/Services-InteriorDesign.jpg'
import ServicesLawncare from '../Images/Services-Lawncare.jpg'
import ServicesLegalServices from '../Images/Services-LegalServices.jpg'
import ServicesMessageTherapy from '../Images/Services-MessageTherapy.jpg'
import ServicesMovingServices from '../Images/Services-MovingServices.jpg'
import ServicesPhotography from '../Images/Services-Photography.jpg'
import ServicesPainting from '../Images/Services-Painting.jpg'
import ServicesPlumbing from '../Images/Services-Plumbing.jpg'



const Services = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };



  return (
    <>

      <div className='services-heading'>Explore the services</div>

      <hr className='services-hr' />

      <div className='services-card-container'>

        <ServiceCard onClick={toggleModal} card_img={ServicesFloorCleaning} card_heading={"Cleaning Services"} card_desc={"Professional cleaning services tailored to your needs."} />
        <ServiceCard onClick={toggleModal} card_img={ServicesCarpetCleaning} card_heading={"Carpet Cleaning"} card_desc={"Deep cleaning solutions for carpets and rugs."} />
        <ServiceCard onClick={toggleModal} card_img={ServicesComputerRepair} card_heading={"Computer Repair"} card_desc={"Expert assistance with computer hardware and software issues."} />
        <ServiceCard onClick={toggleModal} card_img={ServicesElectrician} card_heading={"Electrician Services"} card_desc={"Professional care for your lawn."} />
        <ServiceCard onClick={toggleModal} card_img={ServicesEventPlanning} card_heading={"Event Planning"} card_desc={"Plan and organize memorable events with professional assistance."} />
        <ServiceCard onClick={toggleModal} card_img={ServicesFitness} card_heading={"Fitness Services"} card_desc={"Personalized fitness plans and training sessions."} />
        <ServiceCard onClick={toggleModal} card_img={ServicesGraphicDesign} card_heading={"Graphic Design"} card_desc={"Create impactful visuals and designs for your business or project."} />
        <ServiceCard onClick={toggleModal} card_img={ServicesHandyman} card_heading={"Handyman Services"} card_desc={"General repair and maintenance services for your property."} />
        <ServiceCard onClick={toggleModal} card_img={ServicesInteriorDesign} card_heading={"Interior Design"} card_desc={"Create functional and aesthetically pleasing interiors for your space."} />
        <ServiceCard onClick={toggleModal} card_img={ServicesLawncare} card_heading={"Lawn Care"} card_desc={"Keep your lawn healthy and well-maintained."} />
        <ServiceCard onClick={toggleModal} card_img={ServicesLegalServices} card_heading={"Legal Services"} card_desc={"Legal advice and services from experienced professionals."} />
        <ServiceCard onClick={toggleModal} card_img={ServicesMessageTherapy} card_heading={"Message Therapy"} card_desc={"Relax and rejuvenate with professional massage therapy sessions."} />
        <ServiceCard onClick={toggleModal} card_img={ServicesMovingServices} card_heading={"Moving Services"} card_desc={"Reliable moving and packing services for hassle-free relocation."} />
        <ServiceCard onClick={toggleModal} card_img={ServicesPhotography} card_heading={"Photography"} card_desc={"Capture special moments with skilled photographers."} />
        <ServiceCard onClick={toggleModal} card_img={ServicesPainting} card_heading={"Painting Services"} card_desc={"Interior and exterior painting services for homes and businesses."} />
        <ServiceCard onClick={toggleModal} card_img={ServicesPlumbing} card_heading={"Plumbing Services"} card_desc={"Quality plumbing solutions for your home or office."} />
      </div>

      {
        modal && (<div className='modal'>
          <div className='overlay' onClick={toggleModal}></div>
          <div className='modal-content'>
            {/* <button onClick={toggleModal} className='close-modal-btn'><i class="fa-solid fa-xmark"></i></button> */}
            <PopupCard />
          </div>
        </div>)
      }



    </>
  )
}

export default Services