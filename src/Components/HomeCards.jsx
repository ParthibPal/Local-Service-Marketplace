import React, { useRef, useState } from 'react'
import './Component_css/HomeCards.css'
import { useNavigate } from 'react-router-dom'
import AnimatedPage from '../File/AnimatedPage'
import HomePopularCard from './ActualComponent/HomePopularCard';
import Card from "../Components/ActualComponent/Card";
import HomeSuggestionCard from './ActualComponent/HomeSuggestionCard'

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



// Import images

import Plumber from '../Images/Plumber.jpg'
import Electrician from '../Images/Electrician.jpg'
import Fitness from '../Images/Fitness.jpg'
import Handyman from '../Images/Handyman.jpg'
import Photography from '../Images/Photography.jpg'
import CleaningServices from '../Images/Cleaning-Services.png'
import CarpetcleaningServices from '../Images/Carpetcleaning-Services.png'
import ComputerrepairServices from '../Images/Computerrepair-Services.png'
import ElectricianServices from '../Images/Electrician-Services.png'
import EventplanningServices from '../Images/Eventplanning-Services.png'
import FitnessServices from '../Images/Fitness-Services.png'
import GraphicdesignServices from '../Images/Graphicdesign-Services.png'
import HandymanServices from '../Images/Handyman-Services.png'
import InteriordesignServices from '../Images/Interiordesign-Services.png'
import LawncareServices from '../Images/Lawncare-Services.png'
import LegalServices from '../Images/Legal-Services.png'
import MessagetherapyServices from '../Images/Messagetherapy-Services.png'
import MovingServices from '../Images/Moving-Services.png'
import PhotographyServices from '../Images/Photography-Services.png'
import PaintingServices from '../Images/Painting-Services.png'
import PlumbingServices from '../Images/Plumbing-Services.png'
import TutorServices from '../Images/Tutor-Services.png'
import MoreServices from '../Images/More-Services.png'
import HouseCleaning from '../Images/House-Cleaning.jpg'
import CarpetCleaning from '../Images/Carpet-Cleaning.jpg'
import CarCleaning from '../Images/Car-Cleaning.jpg'
import ComputerRepair from '../Images/Computer-Repair.jpg'
import PlumbingRepair from '../Images/Plumbing-Repair.jpg'
import HandymanRepair from '../Images/Handyman-Repair.jpg'
import LegalService from '../Images/Legal-Service.jpg'
import MovingService from '../Images/Moving-Service.jpg'
import TutorService from '../Images/Tutor-Service.jpg'
import ElectricalNeeds from '../Images/Electrical-Needs.jpg'
import BodymessageNeeds from '../Images/Bodymessage-Needs.jpg'
import LawncareNeeds from '../Images/Lawncare-Needs.jpg'
import HousecleaningCards from '../Images/Housecleaning-Cards.jpg'
import PhotoshootCards from '../Images/Photoshoot-Cards.jpg'
import YogaCards from '../Images/Yoga-Cards.jpg'
import ContactusCover from '../Images/Contactus-Cover.png'

// import Slider1 from '../Images/Slider1.png'
// import Slider2 from '../Images/Slider2.png'
// import Slider3 from '../Images/Slider3.png'
// import Slider4 from '../Images/Slider4.png'
// import Slider5 from '../Images/Slider5.png'
// import Slider6 from '../Images/Slider6.png'
// import Slider7 from '../Images/Slider7.png'

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









const HomeCards = () => {
  const navigate = useNavigate();

  return (

    <>
      {/* Slider Container */}
      <div className='heading-slider-container'>
        <div className='heading-slider'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide><img src="/images/Interior Design.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/images/Cleaning Services.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/images/Music Lessons.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/images/Event Planning.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/images/Electrician Services.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/images/Web Development.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/images/Photo Services.jpg" /></SwiperSlide>
          </Swiper>
        </div>

      </div>


      <hr className='homecards-hr' />

      {/* Service Conatiner  */}
      <h1 style={{ marginLeft: "20px" }}>Variety Of Services</h1>
      <div className='service-container'>

        <div className='services'>
          <img src={CleaningServices} />
          <div>Cleaning Services</div>
        </div>
        <div className='services'>
          <img src={CarpetcleaningServices} />
          <div>Carpet Cleaning</div>
        </div>
        <div className='services'>
          <img src={ComputerrepairServices} />
          <div>Computer Repair</div>
        </div>
        <div className='services'>
          <img src={ElectricianServices} />
          <div>Electrician Services</div>
        </div>
        <div className='services'>
          <img src={EventplanningServices} />
          <div>Event Planning</div>
        </div>
        <div className='services'>
          <img src={FitnessServices} />
          <div>Fitness Services</div>
        </div>
        <div className='services'>
          <img src={GraphicdesignServices} />
          <div>Graphic Design</div>
        </div>
        <div className='services'>
          <img src={HandymanServices} />
          <div>Handyman Services</div>
        </div>
        <div className='services'>
          <img src={InteriordesignServices} />
          <div>Interior Design</div>
        </div>
        <div className='services'>
          <img src={LawncareServices} />
          <div>Lawncare</div>
        </div>
        <div className='services'>
          <img src={LegalServices} />
          <div>Legal Services</div>
        </div>
        <div className='services'>
          <img src={MessagetherapyServices} />
          <div>Message Therapy</div>
        </div>
        <div className='services'>
          <img src={MovingServices} />
          <div>Moving Services</div>
        </div>
        <div className='services'>
          <img src={PhotographyServices} />
          <div>Photography</div>
        </div>
        <div className='services'>
          <img src={PaintingServices} />
          <div>Planting Services</div>
        </div>
        <div className='services'>
          <img src={PlumbingServices} />
          <div>Plumbing Services</div>
        </div>
        <div className='services'>
          <img src={TutorServices} />
          <div>Tutor Services</div>
        </div>
        <div className='services' onClick={() => navigate('/services')}  >
          <img src={MoreServices} />
          <div>More..</div>
        </div>

      </div>


      <hr className='homecards-hr' />
      <h1 style={{ marginLeft: "23px" }}>Similar Services</h1>
      {/* Suggestion Conatiner  */}
      <div className='suggestion-container'>

        <div className='suggestion'>
          <div className='suggestion-heading'>Cleaning</div>
          <div className='three-images'>
            <HomeSuggestionCard img={HouseCleaning} desc={'House Cleaning'} />
            <HomeSuggestionCard img={CarpetCleaning} desc={'Carpet Cleaning'} />
            <HomeSuggestionCard img={CarCleaning} desc={'Car Cleaning'} />
          </div>
        </div>
        <div className='suggestion'>

          <div className='suggestion-heading'>Repair</div>
          <div className='three-images'>
            <HomeSuggestionCard img={ComputerRepair} desc={'Computer Repair'} />
            <HomeSuggestionCard img={PlumbingRepair} desc={'Plumbing'} />
            <HomeSuggestionCard img={HandymanRepair} desc={'Handyman'} />
          </div>
        </div>
        <div className='suggestion'>
          <div className='suggestion-heading'>Service</div>
          <div className='three-images'>
            <HomeSuggestionCard img={LegalService} desc={'Legal Service'} />
            <HomeSuggestionCard img={MovingService} desc={'Moving Service'} />
            <HomeSuggestionCard img={TutorService} desc={'Tutor Service'} />
          </div>
        </div>


        <div className='suggestion'>
          <div className='suggestion-heading'>Frequently Used</div>
          <div className='three-images'>
            <HomeSuggestionCard img={ElectricalNeeds} desc={'Electrical Needs'} />
            <HomeSuggestionCard img={BodymessageNeeds} desc={'Bodymessage'} />
            <HomeSuggestionCard img={LawncareNeeds} desc={'Lawncare'} />
          </div>
        </div>
      </div>

      <hr className='homecards-hr' />

      {/* Popular Section */}

      <div className='popular-container1'>
        <h1 style={{ marginLeft: "3px", paddingBottom: "4vh" }}>Popular Services</h1>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          navigation
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={600}
          breakpoints={{

            320: {
              slidesPerView: 1.2,
            },

            480: {
              slidesPerView: 1.5,
            },

            640: {
              slidesPerView: 2.5,
            },

            768: {
              slidesPerView: 3.5,
            },

            1024: {
              slidesPerView: 5,
            },
          }}

          // pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><Card imageSrc="/images/Personal Chef.jpg" name="Personal Chef" desc="Enjoy gourmet meals prepared by a professional chef at home." /></SwiperSlide>
          <SwiperSlide><Card imageSrc="/images/Lawn Care Services.jpg" name="Lawn Care Services" desc="Keep your lawn healthy and well-maintained." /></SwiperSlide>
          <SwiperSlide><Card imageSrc="/images/Painting Services.jpg" name="Painting Services" desc="Intexterior painting services for homes and businesses." /></SwiperSlide>
          <SwiperSlide><Card imageSrc="/images/Event Planning.jpg" name="Event Planning" desc="Plan and organize memorable events with professional assistance." /></SwiperSlide>
          <SwiperSlide><Card imageSrc="/images/Tutoring Services.jpg" name="Tutoring Services" desc="Personalized tutoring to help you excel academically." /></SwiperSlide>
          <SwiperSlide><Card imageSrc="/images/Fitness Training.jpg" name="Fitness Training" desc="Personalized fitness plans and training sessions." /></SwiperSlide>
          <SwiperSlide><Card imageSrc="/images/Legal Services.jpg" name="Legal Services" desc="Legal advice and services from experienced professionals." /></SwiperSlide>
          <SwiperSlide><Card imageSrc="/images/Yoga Classes.jpg" name="Yoga Classes" desc="Practice yoga and improve your physical and mental well-being." /></SwiperSlide>
          <SwiperSlide><Card imageSrc="/images/Car Repair Services.jpg" name="Car Repair Services" desc="Expert repair and maintenance for your vehicle." /></SwiperSlide>
          <SwiperSlide><Card imageSrc="/images/Music Lessons.jpg" name="Music Lessons" desc="Learn to play an instrument or improve your musical skills." /></SwiperSlide>
          <SwiperSlide><Card imageSrc="/images/Carpet Cleaning.jpg" name="Carpet Cleaning" desc="Deep cleaning solutions for carpets and rugs." /></SwiperSlide>
          <SwiperSlide><Card imageSrc="/images/Personal Stylist.jpg" name="Personal Stylist" desc="Receive personalized fashion advice and styling services." /></SwiperSlide>



          {/* <SwiperSlide><HomePopularCard img={ServicesComputerRepair} desc={'Computer Repair'} /></SwiperSlide>
          <SwiperSlide><HomePopularCard img={ServicesElectrician} desc={'Electrician'} /></SwiperSlide>
          <SwiperSlide><HomePopularCard img={ServicesEventPlanning} desc={'Event Planning'} /></SwiperSlide>
          <SwiperSlide><HomePopularCard img={ServicesFloorCleaning} desc={'Floor Cleaning'} /></SwiperSlide>
          <SwiperSlide><HomePopularCard img={ServicesFitness} desc={'Fitness'} /></SwiperSlide>
          <SwiperSlide><HomePopularCard img={ServicesGraphicDesign} desc={'Graphic Design'} /></SwiperSlide>
          <SwiperSlide><HomePopularCard img={ServicesCarpetCleaning} desc={'Carpet Cleaning'} /></SwiperSlide>
          <SwiperSlide><HomePopularCard img={ServicesComputerRepair} desc={'Computer Repair'} /></SwiperSlide>
          <SwiperSlide><HomePopularCard img={ServicesElectrician} desc={'Electrician'} /></SwiperSlide>
          <SwiperSlide><HomePopularCard img={ServicesEventPlanning} desc={'Event Planning'} /></SwiperSlide>
          <SwiperSlide><HomePopularCard img={ServicesFloorCleaning} desc={'Floor Cleaning'} /></SwiperSlide>
          <SwiperSlide><HomePopularCard img={ServicesFitness} desc={'Fitness'} /></SwiperSlide>
          <SwiperSlide><HomePopularCard img={ServicesGraphicDesign} desc={'Graphic Design'} /></SwiperSlide> */}
        </Swiper>
      </div>

      <hr className='homecards-hr' />

      <div className='bisection'>
        <div className='bisection-left'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation

            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}



            // pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {/* <SwiperSlide><HomePopularCard img={ServicesHandyman} desc={'Handyman'} /></SwiperSlide>
            <SwiperSlide><HomePopularCard img={ServicesLegalServices} desc={'Legal Services'} /></SwiperSlide>
            <SwiperSlide><HomePopularCard img={HousecleaningCards} desc={'House Cleaning'} /></SwiperSlide>
            <SwiperSlide><HomePopularCard img={ServicesLawncare} desc={'Lawncare'} /></SwiperSlide>
            <SwiperSlide><HomePopularCard img={ServicesComputerRepair} desc={'ComputerRepair'} /></SwiperSlide>
            <SwiperSlide><HomePopularCard img={HousecleaningCards} desc={'House Cleaning'} /></SwiperSlide>
            <SwiperSlide><HomePopularCard img={ServicesMessageTherapy} desc={'Message Therapy'} /></SwiperSlide> */}
          </Swiper>
        </div>
        <div className='bisection-right'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation

            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}



            // pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {/* <SwiperSlide><HomePopularCard img={ServicesInteriorDesign} desc={'House Cleaning'} /></SwiperSlide>
            <SwiperSlide><HomePopularCard img={ServicesPlumbing} desc={'House Cleaning'} /></SwiperSlide>
            <SwiperSlide><HomePopularCard img={ServicesMovingServices} desc={'House Cleaning'} /></SwiperSlide>
            <SwiperSlide><HomePopularCard img={ServicesPhotography} desc={'House Cleaning'} /></SwiperSlide>
            <SwiperSlide><HomePopularCard img={ServicesPainting} desc={'House Cleaning'} /></SwiperSlide>
            <SwiperSlide><HomePopularCard img={HousecleaningCards} desc={'House Cleaning'} /></SwiperSlide>
            <SwiperSlide><HomePopularCard img={ServicesElectrician} desc={'House Cleaning'} /></SwiperSlide> */}
          </Swiper>
        </div>



      </div>





    </>
  )
}

export default HomeCards