import React, {useState} from 'react';
import Card from "../Components/ActualComponent/Card.jsx";
import "../Components/ServicesPage.css";
import PopupCard from './ActualComponent/PopupCard.jsx';
import Plumbing from "/images/plumbing.jpg"
import Electrician from "/images/Electrician Services.jpg"

const ServicesPage = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
    <div className="services-page-container">
      <span className="header-services">
        <h1 className="service-h2">Explore Local Services</h1>
        <p className="service-p">Discover a wide range of services offered by local professionals</p>
      </span>
      <section className="services-card">
        <Card onClick={toggleModal} imageSrc={Plumbing} name = "Plumbing Services" desc = "Quality plumbing solutions for your home or office."/>
        <Card onClick={toggleModal} imageSrc={Electrician} name = "Electrician Services" desc = "Expert electricians to solve your electrical needs."/>
        <Card onClick={toggleModal} imageSrc="/images/Cleaning Services.jpg" name = "Cleaning Services" desc = "Professional cleaning services tailored to your needs."/>
         <Card onClick={toggleModal} imageSrc="/images/Lawn Care Services.jpg" name = "Lawn Care Services" desc = "Keep your lawn healthy and well-maintained."/>
        <Card onClick={toggleModal} imageSrc="/images/Painting Services.jpg" name = "Painting Services" desc = "Intexterior painting services for homes and businesses."/>
        <Card onClick={toggleModal} imageSrc="/images/Carpet Cleaning.jpg" name = "Carpet Cleaning" desc = "Deep cleaning solutions for carpets and rugs."/>
        <Card onClick={toggleModal} imageSrc="/images/Handyman Services.jpg" name = "Handyman Services" desc = "General repair and maintenance services for your property."/>
        <Card onClick={toggleModal} imageSrc="/images/Moving Services.jpg" name = "Moving Services" desc = "Reliable moving and packing services for hassle-free relocation."/>
        <Card onClick={toggleModal} imageSrc="/images/Computer Services.jpg" name = "Computer Services" desc = "Expert assistance with computer hardware and software issues."/>
        <Card onClick={toggleModal} imageSrc="/images/Event Planning.jpg" name = "Event Planning" desc = "Plan and organize memorable events with professional assistance."/>
        <Card onClick={toggleModal} imageSrc="/images/Photo Services.jpg" name = "Photo Services" desc = "Capture special moments with skilled photographers."/>
        <Card onClick={toggleModal} imageSrc="/images/Graphic Design.jpg" name = "Graphic Design" desc = "Create impactful visuals and designs for your business or project."/>
        <Card onClick={toggleModal} imageSrc="/images/Web Development.jpg" name = "Web Development" desc = "Build and maintain responsive websites tailored to your needs."/>
        <Card onClick={toggleModal} imageSrc="/images/Massage Therapy.jpg" name = "Massage Therapy" desc = "Relax and rejuvenate with professional massage therapy sessions."/>
        <Card onClick={toggleModal} imageSrc="/images/Tutoring Services.jpg" name = "Tutoring Services" desc = "Personalized tutoring to help you excel academically."/>
        <Card onClick={toggleModal} imageSrc="/images/Fitness Training.jpg" name = "Fitness Training" desc = "Personalized fitness plans and training sessions."/>
        <Card onClick={toggleModal} imageSrc="/images/Legal Services.jpg" name = "Legal Services" desc = "Legal advice and services from experienced professionals."/>
        <Card onClick={toggleModal} imageSrc="/images/Interior Design.jpg" name = "Interior Design" desc = "Create functional and aesthetically pleasing interiors for your space."/>
        <Card onClick={toggleModal} imageSrc="/images/Car Repair Services.jpg" name = "Car Repair Services" desc = "Expert repair and maintenance for your vehicle."/>
        <Card onClick={toggleModal} imageSrc="/images/Personal Chef.jpg" name = "Personal Chef" desc = "Enjoy gourmet meals prepared by a professional chef at home."/>
        <Card onClick={toggleModal} imageSrc="/images/Music Lessons.jpg" name = "Music Lessons" desc = "Learn to play an instrument or improve your musical skills."/>
        <Card onClick={toggleModal} imageSrc="/images/Wedding Planning.jpg" name = "Wedding Planning" desc = "Plan and organize your dream wedding with expert assistance."/>
        <Card onClick={toggleModal} imageSrc="/images/Real Estate Services.jpg" name = "Real Estate Services" desc = "Buy, sell, or rent properties with guidance from real estate professionals."/>
        <Card onClick={toggleModal} imageSrc="/images/Pet Grooming.jpg" name = "Pet Grooming" desc = "Keep your pets clean and healthy with professional grooming services."/>
        <Card onClick={toggleModal} imageSrc="/images/Financial Planning.jpg" name = "Financial Planning" desc = "Plan your finances and investments with expert financial advisors."/>
        <Card onClick={toggleModal} imageSrc="/images/Language Lessons.jpg" name = "Language Lessons" desc = "Learn a new language or improve your language skills with language tutors"/>
        <Card onClick={toggleModal} imageSrc="/images/Art Classes.jpg" name = "Art Classes" desc = "Explore your creativity with art classes and workshops."/>
        <Card onClick={toggleModal} imageSrc="/images/Personal Stylist.jpg" name = "Personal Stylist" desc = "Receive personalized fashion advice and styling services."/>
        <Card onClick={toggleModal} imageSrc="/images/Yoga Classes.jpg" name = "Yoga Classes" desc = "Practice yoga and improve your physical and mental well-being."/> 

      </section>
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
  );
}

export default ServicesPage;
