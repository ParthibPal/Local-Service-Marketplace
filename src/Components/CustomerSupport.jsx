import React, { useState } from 'react'
import './Component_css/CustomerSupport.css'


import ContactusCover from '../Images/Contactus-Cover.png'
import Start from '../Images/Helpcard-Start.png'
import Account from '../Images/Helpcard-Account.png'
import Bill from '../Images/Helpcard-Bill.png'
import Interface from '../Images/Helpcard-Interface.png'
import Trust from '../Images/Helpcard-Trust.png'
import Faq from '../Images/Helpcard-Faq.png'
import Community from '../Images/Helpcard-Community.png'
import More from '../Images/Helpcard-More.png'
import Facebook from '../Images/Helpcard-Facebook.png'
import Instagram from '../Images/Helpcard-Instagram.png'
import Discord from '../Images/Helpcard-Discord.png'
import Review1 from '../Images/Review-1.jpg'
import Review2 from '../Images/Review-2.jpg'
import Review3 from '../Images/Review-3.jpg'
import Review4 from '../Images/Review-4.jpg'

import AboutusCover from '../Images/Aboutus-Cover.jpg'
import Parthib from '../Images/Parthib.jpg'
import Samrat from '../Images/Samrat.jpg'
import Softy from '../Images/Softy.jpg'
import Supriti from '../Images/Supriti.jpg'





const CustomerSupport = () => {
    return (

        <div className='customersupport-wrapper'>
            <header>
                <a href='#section1'>Contact us</a>
                <a href='#section2'>Help & Support</a>
                <a href='#section3'>Review / Feedback</a>
                <a href='#section4'>About Us</a>
            </header>
            <section id='section1'>
                <img src={ContactusCover} />
                <div className='contact'>
                    <div className='call'>
                        <i class="fa-solid fa-phone"></i>
                        <h2>Talk to Customer Service</h2>
                        <label>Having problem? Feel free to contact with our customer executives.</label>
                        <h3>+91-123456789</h3>
                    </div>
                    <div className='chat'>
                        <i class="fa-solid fa-comments"></i>
                        <h2>Contact Customer Support</h2>
                        <label>Sometimes you need a little help from your friends. Don't worry...we are here for you.</label>
                        <h3>Chat with us</h3>
                    </div>
                </div>


            </section>

            <hr className='customer-support-hr' />

            <section id='section2'>
                <div className='help-heading'>
                    <div className='heading-1'>Need help? We've got your back</div>
                    <div className='heading-2'>You can find the answers in our collections</div>
                </div>
                <div className='help-container'>
                    <div className='help-card'>
                        <img src={Start} />
                        <h2>Getting Started</h2>
                        <label>Start off on the right foot! Not the left one!</label>
                    </div>
                    <div className='help-card'>
                        <img src={Account} />
                        <h2>Account Setting</h2>
                        <label>You're a special snowflake and so is your account</label>
                    </div>
                    <div className='help-card'>
                        <img src={Bill} />
                        <h2>Billing</h2>
                        <label>Facing payment or bill related issue?</label>
                    </div>
                    <div className='help-card'>
                        <img src={Interface} />
                        <h2>Getting Started</h2>
                        <label>What does this button do??</label>
                    </div>
                    <div className='help-card'>
                        <img src={Trust} />
                        <h2>Trust & Safety </h2>
                        <label>Keep things safe & sound for you and your buddies</label>
                    </div>
                    <div className='help-card'>
                        <img src={Faq} />
                        <h2>F.A.Q</h2>
                        <label>Frequently Asked Questions for self-serve problem solving</label>
                    </div>
                    <div className='help-card'>
                        <img src={Community} />
                        <h2>Community</h2>
                        <label>Bringing people together from all over the world</label>
                    </div>
                    <div className='help-card'>
                        <img src={More} />
                        <h2>More..</h2>
                        <label>Your problem is not listed? Don't worry!</label>
                    </div>
                </div>
                <div className='help-footer'>
                    <label>Other ways to find help:</label>
                    <img src={Facebook} />
                    <img src={Instagram} />
                    <img src={Discord} />
                </div>
            </section>

            <hr className='customer-support-hr' />


            <section id='section3'>
                <div className='section3-heading'>Reviews</div>

                {/* Review Part */}

                <div className='review-container'>
                    <div className='review-card'>
                        <div className='review-dp-container' >
                            <img className='review-dp' src={Parthib} />
                        </div>
                        <div className='review-name-star'>
                            <label>Parthib Pal</label>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div className='review-description'>
                            Very bad website not optimized. Faltu website, er theke valo ami ek dine baniye debo vai. Ke developer etar faltu ekebare se kaj korte jane adou? 🤦‍♂️🤦‍♂️
                        </div>

                    </div>
                    <div className='review-card'>
                        <div className='review-dp-container' >
                            <img className='review-dp' src={Softy} />
                        </div>
                        <div className='review-name-star'>
                            <label>Softy Sharma</label>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div className='review-description'>
                            I strongly agree with Mr. Parthib Pal's opinion, I faced some optimization problems in this website, but they will fix it I know. 🫡🫡
                        </div>

                    </div>
                    <div className='review-card'>
                        <div className='review-dp-container' >
                            <img className='review-dp' src={Supriti} />
                        </div>
                        <div className='review-name-star'>
                            <label>Supriti Das</label>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div className='review-description'>
                            Ha ekdom i baje website!! Report mere ban kora hok eto baje website k. 🤢🤢🤢🤢
                        </div>

                    </div>
                    <div className='review-card'>
                        <div className='review-dp-container' >
                            <img className='review-dp' src={Samrat} />
                        </div>
                        <div className='review-name-star'>
                            <label>Samrat Kumar</label>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                        </div>
                        <div className='review-description'>
                            Hebi website vai!! Amr system to sera cholche... developer k keu Noble de!!😊😊😊
                        </div>

                    </div>
                </div>

                {/* Feedback Part */}

                <div className='section3-heading'>Submit your Feedback</div>
                <div className='review-submit-container'>
                    <h1>Feel free to share your opinion</h1>
                    <div className='review-submit-form'>
                        <h3>Name</h3>
                        <input className='review-input-name' placeholder='Enter your name here' />
                        <h3>Email Id</h3>
                        <input className='review-input-email' placeholder='Enter your email-id here' />
                        <h3>Review</h3>
                        <input className='review-input-opinion' placeholder='Your opibion matters for us' />
                        <button class="review-submit-button">Submit</button>
                    </div>
                </div>


            </section>

            <hr className='customer-support-hr' />


            <section id='section4'>

                <div className="top">
                    <img src={AboutusCover} />
                </div>

                <div className="about-us">
                    <div className="content-wrapper">
                        <section className="about-us-content">
                            <h1>About Us</h1>
                            <p>
                                Welcome to Local Service Marketplace, where we connect you with trusted local service providers. Our platform simplifies the process of finding reliable professionals for various needs like plumbing, cleaning, and handyman tasks. We offer user reviews, ratings, and transparent pricing to help you make informed decisions. Service providers can reach new customers easily, while users benefit from a streamlined experience. By supporting small businesses and freelancers, we foster a community-driven ecosystem that enhances local economies.
                            </p>
                        </section>

                        <section className="our-services-content">
                            <h2><b>Our Services</b></h2>
                            <label>We offer a range of services tailored to your needs, including:</label>
                            <ul>
                                <li>Home Cleaning</li>
                                <li>Handyman Services</li>
                                <li>Gardening and Landscaping</li>
                                <li>Plumbing</li>
                                <li>Electrical Services</li>
                                <li>Painting and Decorating</li>
                            </ul>
                        </section>
                    </div>

                    <section className="meet-team">
                        <h2><b>Meet Our Team</b></h2>
                        <div className="team-members">
                            <div className="team-member">
                                <img src={Parthib} alt='Parthib Pal' />
                                <h3>Parthib Pal</h3>
                                <h5>CEO & Founder</h5>
                                <p>Parthib leads our team with a passion for connecting local experts with the community. His vision drives our commitment to excellence.</p>
                            </div>
                            <div className="team-member">
                                <img src={Samrat} alt='Samrat Kumar' />
                                <h3>Samrat Kumar</h3>
                                <h5>Operation Manager</h5>
                                <p>Samrat ensures that our operations run smoothly and efficiently, meeting our customers' needs with precision.</p>
                            </div>
                            <div className="team-member">
                                <img src={Supriti} alt='Supriti Das' />
                                <h3>Supriti Das</h3>
                                <h5>Software Developer</h5>
                                <p>Supriti is responsible for developing and maintaining our website and app, ensuring a seamless user experience.</p>
                            </div>
                            <div className="team-member">
                                <img src={Softy} alt='Softy Sharma' />
                                <h3>Softy Sharma</h3>
                                <h5>Social Media Manager</h5>
                                <p>Softy manages our social media channels, keeping you updated on our latest services and promotions.</p>
                            </div>
                        </div>
                    </section>

                    <section className="our-mission">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to empower communities by delivering top-quality services that enhance daily life. We are dedicated to creating lasting value for our customers, employees, and partners through a culture of excellence and innovation.
                        </p>
                    </section>
                </div>




            </section>
        </div>

    )
}

export default CustomerSupport