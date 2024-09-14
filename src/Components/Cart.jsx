import React from 'react'
import './Component_css/Cart.css'
import HouseCleaning from '../Images/House-Cleaning.jpg'
import ServicesCarpetCleaning from '../Images/Services-CarpetCleaning.jpg'
import ServicesComputerRepair from '../Images/Services-ComputerRepair.jpg'
import ServicesLawncare from '../Images/Services-Lawncare.jpg'
import ServicesPhotography from '../Images/Services-Photography.jpg'

const Cart = () => {
    return (
        <>
            <div className='cart-conatiner'>
                <div className='shopping-cart-container'>
                    <div className='shopping-cart-container-heading'>Shopping Cart</div>

                    <hr className='cart-hr' />

                    <div className='shopping-cart-items'>
                        <img src={HouseCleaning} />
                        <div className='shopping-cart-items-desc'>
                            <label className='shopping-cart-items-heading'>House Cleaning, Professional cleaning services tailored to your needs.</label>
                            <label className='shopping-cart-items-stock'>in stock</label>
                            <label className='shopping-cart-items-shipping'>Eligible for FREE Shipping</label>
                            <label className='doorstep-certified'>certified  <i class="fa-solid fa-check"></i></label>
                        </div>
                        <div className='shopping-cart-items-price'>
                            <label className='shopping-cart-items-price-percent'>55% off</label>
                            <label className='shopping-cart-items-price-deal'>  limited time deal</label>
                            <div className='shopping-cart-items-price-value'>&#x20b9; 1500.00</div>
                        </div>
                    </div>

                    <hr className='cart-hr' />

                    <div className='shopping-cart-items'>
                        <img src={ServicesCarpetCleaning} />
                        <div className='shopping-cart-items-desc'>
                            <label className='shopping-cart-items-heading'>Carpet Cleaning, Deep cleaning solutions for carpets and rugs.</label>
                            <label className='shopping-cart-items-stock'>in stock</label>
                            <label className='shopping-cart-items-shipping'>Not Eligible for FREE Shipping</label>
                            <label className='doorstep-certified'>certified  <i class="fa-solid fa-check"></i></label>
                        </div>
                        <div className='shopping-cart-items-price'>
                            <label className='shopping-cart-items-price-percent'>10% off</label>
                            <label className='shopping-cart-items-price-deal'>  limited time deal</label>
                            <div className='shopping-cart-items-price-value'>&#x20b9; 699.00</div>
                        </div>
                    </div>

                    <hr className='cart-hr' />

                    <div className='shopping-cart-items'>
                        <img src={ServicesComputerRepair} />
                        <div className='shopping-cart-items-desc'>
                            <label className='shopping-cart-items-heading'>Computer Repair, Expert assistance with computer hardware and software issues.</label>
                            <label className='shopping-cart-items-stock'>in stock</label>
                            <label className='shopping-cart-items-shipping'>Eligible for FREE Shipping</label>
                            <label className='doorstep-certified'>certified  <i class="fa-solid fa-check"></i></label>
                        </div>
                        <div className='shopping-cart-items-price'>
                            <label className='shopping-cart-items-price-percent'>5% off</label>
                            <label className='shopping-cart-items-price-deal'>  limited time deal</label>
                            <div className='shopping-cart-items-price-value'>&#x20b9; 899.00</div>
                        </div>
                    </div>

                    <hr className='cart-hr' />

                    <div className='shopping-cart-items'>
                        <img src={ServicesLawncare} />
                        <div className='shopping-cart-items-desc'>
                            <label className='shopping-cart-items-heading'>Lawn CareKeep your lawn healthy and well-maintained.</label>
                            <label className='shopping-cart-items-stock'>in stock</label>
                            <label className='shopping-cart-items-shipping'>Eligible for FREE Shipping</label>
                            <label className='doorstep-certified'>certified  <i class="fa-solid fa-check"></i></label>
                        </div>
                        <div className='shopping-cart-items-price'>
                            <label className='shopping-cart-items-price-percent'>63% off</label>
                            <label className='shopping-cart-items-price-deal'>  limited time deal</label>
                            <div className='shopping-cart-items-price-value'>&#x20b9; 499.00</div>
                        </div>
                    </div>

                    <hr className='cart-hr' />

                    <div className='shopping-cart-items'>
                        <img src={ServicesPhotography} />
                        <div className='shopping-cart-items-desc'>
                            <label className='shopping-cart-items-heading'>PhotographyCapture special moments with skilled photographers.</label>
                            <label className='shopping-cart-items-stock'>in stock</label>
                            <label className='shopping-cart-items-shipping'>Not Eligible for FREE Shipping</label>
                            <label className='doorstep-certified'>certified  <i class="fa-solid fa-check"></i></label>
                        </div>
                        <div className='shopping-cart-items-price'>
                            <label className='shopping-cart-items-price-percent'>22% off</label>
                            <label className='shopping-cart-items-price-deal'>  limited time deal</label>
                            <div className='shopping-cart-items-price-value'>&#x20b9; 2100.00</div>
                        </div>
                    </div>

                    <hr className='cart-hr' />
                </div>
                <div className='cart-price-container'>
                    <div className='cart-price-heading'>
                        <label>Total items in cart</label>
                    </div>
                    <div className='cart-price-total'>
                        <label>Subtotal: &#x20b9; <b>5697.00</b></label>
                    </div>
                    <div className='cart-price-pay'>
                        <button className='cart-price-pay-btn'>Proceed to Chekout</button>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Cart