import React from 'react'
import './ActualComponent_css/PopupcardContents.css'
import Review1 from '../../Images/Review-1.jpg'

const PopupcardContents = (person) => {
    return (
        <>
            <div className='popupcardcontents-container'>
                <div className='popupcardcontents-dp'>
                    <img src={Review1}/>
                </div>
                <div className='popupcardcontents-data'>
                    <div className='name'>{person.name}</div>
                    <div className='phoneno'><b>Phone No.</b> {person.phone}</div>
                    <div className='loaction'><b>Service Location</b> {person.location}</div>
                    <div className='sales-data-conatiner'>
                        <div className='total-sales'>
                            <div>Total Sales</div>
                            <div>{person.salesdata}</div>
                        </div>
                        <div className='rating'>
                            <div>Rating</div>
                            <div>{person.rating}</div>
                        </div>
                        <div className='member'>
                            <div>Member Since</div>
                            <div>{person.joiningdate}</div>
                        </div>
                    </div>
                    <div className='popupcardcontents-btn'>
                        <button className='follow'>Follow</button>
                        <button className='book'>Book Now</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PopupcardContents