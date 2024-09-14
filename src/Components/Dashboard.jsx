import React from 'react';
import "../Components/Component_css/Dashboard.css";
import ProfileIcon from "../Images/profileIcon.png";
import HomeIcon from "../Images/home_icon.png";
const Dashboard = () => {
     // Prevent default scroll behavior on click
     const handleNavigationClick = (event) => {
        event.preventDefault(); // Prevent the default anchor click behavior
        // Perform other actions, like showing or hiding a section
    };
    return (
        <>
            <div className='dash-container'>
                {/* <h3 style={{ marginLeft: "50%" }}>Dashboard</h3> */}
                <div className='dash-inner-container'>
                    <div className="side-nav">
                        <ul className='side-nav-options'>
                            <li>Dashboard</li>
                            <li>Users</li>
                            <li>Products</li>
                            <li>Invoices</li>
                            <li>Orders</li>
                            <li>Message</li>
                            <li>Notifications</li>
                            <li>Settings</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                    <div className="dash-home">
                        <ul>
                            <img src={HomeIcon} alt='' />
                            <li><a href='/'>Home/</a></li>
                            <li><a href='/dashboard'>Dashboard</a></li>
                        </ul>
                    </div>
                    <div className="dash-info">
                        <div className="left-small-box">
                            <div className="box">
                                <h3>Total Users</h3>
                                <img src={ProfileIcon} alt='icon' />
                                <span>Active Users: 100</span>
                                <div className='growth'>
                                    <span>+ 98%</span>
                                    <span>Last Month</span>
                                </div>

                            </div>
                            <div className="box">
                                <h3>Total Sales</h3>
                                <img src={ProfileIcon} alt='icon' />
                                <span>Total Sales: ₹100</span>
                                <div className='growth'>
                                    <span>+ 81%</span>
                                    <span>Last Month</span>
                                </div>
                            </div>
                            <div className="box">
                                <h3>Available Products</h3>
                                <img src={ProfileIcon} alt='icon' />
                                <span>Products Available: 10</span>
                                <div className='growth'>
                                    <span>-98%</span>
                                    <span>Last Month</span>
                                </div>
                            </div>
                            <div className="box">
                                <h3>Return Products</h3>
                                <img src={ProfileIcon} alt='icon' />
                                <span>Return: 19</span>
                                <div className='growth'>
                                    <span>- 98%</span>
                                    <span>Last Month</span>
                                </div>
                            </div>
                            <div className="box">
                                <h3>Invoices</h3>
                                <img src={ProfileIcon} alt='icon' />
                                <span>Invoice Generated: 1000</span>
                                <div className='growth'>
                                    <span>+ 98%</span>
                                    <span>Last Month</span>
                                </div>
                            </div>
                            <div className="box">
                                <h3>Customer Query</h3>
                                <img src={ProfileIcon} alt='icon' />
                                <span>Query Request: 100</span>
                                <div className='growth'>
                                    <span>+ 9%</span>
                                    <span>Last Month</span>
                                </div>
                            </div>
                        </div>
                        <div className="right-big-box">
                            <div>
                                {/* <h3><a href="">Want to Add Items?</a></h3> */}
                                {/* <div className="add-nav">
                                    <ul>
                                        <li><a href='#1'>Product Details</a></li>
                                        <li><a href='#2'>Upload Image</a></li>
                                        <li><a href='#3'>Provider Details</a></li>
                                    </ul>
                                </div> */}
                                <div className='service-form'>
                                    <div className="service-1" id='1'>
                                        <div className="add-nav">
                                            <ul>
                                                <li><a href='#1'>Product Details</a></li>
                                                <li><a href='#2'>Upload Image</a></li>
                                                <li><a href='#3'>Provider Details</a></li>
                                            </ul>
                                        </div>
                                        <h3>Product Details</h3>
                                        <form>
                                            <h4>Service Name: </h4>
                                            <input placeholder='Enter Product Name: ' />
                                            <h4>Service Location: </h4>
                                            <input placeholder='Enter Product Name: ' />
                                            <h4>Service Cost: </h4>
                                            <input placeholder='Enter Service Cost: ' /><br />
                                            <span className='next'>Next</span>
                                        </form>
                                    </div>
                                    <div className="service-2" id='2'>
                                        <div className="add-nav">
                                            <ul>
                                                <li><a href='#1'>Service Details</a></li>
                                                <li><a href='#2'>Upload Image</a></li>
                                                <li><a href='#3'>Provider Details</a></li>
                                            </ul>
                                        </div>
                                        <h3>Upload Images</h3>
                                        <form>
                                            <h4 for="image-upload">Upload Image 1:</h4>
                                            <input type="file" id="image-upload" accept="image/*" />
                                            <h4 for="image-upload">Upload Image 2:</h4>
                                            <input type="file" id="image-upload" accept="image/*" />
                                            <h4 for="image-upload">Upload Image 3:</h4>
                                            <input type="file" id="image-upload" accept="image/*" />
                                            <span className='next'>Next</span>
                                        </form>
                                    </div>
                                    <div className="service-3" id='3'>
                                    <div className="add-nav">
                                            <ul>
                                                <li><a href='#1'>Product Details</a></li>
                                                <li><a href='#2'>Upload Image</a></li>
                                                <li><a href='#3'>Provider Details</a></li>
                                            </ul>
                                        </div>
                                        <h3>Provider Details</h3>
                                        <form>
                                            <h4>Provider Email: </h4>
                                            <input placeholder='Enter Product Name: ' />
                                            <h4>User Id: </h4>
                                            <input placeholder='Enter Product Name: ' />
                                            <h4>Location: </h4>
                                            <input placeholder='Enter Service Cost: ' /><br />
                                            <span className='next'>Submit</span>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='order-details'>
                <h3>Order Details</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Order Date</th>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Payment Status</th>
                            <th>Payment Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#45012</td>
                            <td>30/07/2024</td>
                            <td>Parthib Pal</td>
                            <td>palparthib97@gmail.com</td>
                            <td>Successfull</td>
                            <td>2110</td>
                        </tr>
                        <tr>
                            <td>#45012</td>
                            <td>30/07/2024</td>
                            <td>Parthib Pal</td>
                            <td>palparthib97@gmail.com</td>
                            <td>Successfull</td>
                            <td>2110</td>
                        </tr>
                        <tr>
                            <td>#45012</td>
                            <td>30/07/2024</td>
                            <td>Parthib Pal</td>
                            <td>palparthib97@gmail.com</td>
                            <td>Successfull</td>
                            <td>2110</td>
                        </tr>
                        <tr>
                            <td>#45012</td>
                            <td>30/07/2024</td>
                            <td>Parthib Pal</td>
                            <td>palparthib97@gmail.com</td>
                            <td>Successfull</td>
                            <td>2110</td>
                        </tr>
                        <tr>
                            <td>#45012</td>
                            <td>30/07/2024</td>
                            <td>Parthib Pal</td>
                            <td>palparthib97@gmail.com</td>
                            <td>Successfull</td>
                            <td>2110</td>
                        </tr>
                        <tr>
                            <td>#45012</td>
                            <td>30/07/2024</td>
                            <td>Parthib Pal</td>
                            <td>palparthib97@gmail.com</td>
                            <td>Successfull</td>
                            <td>2110</td>
                        </tr>
                        <tr>
                            <td>#45012</td>
                            <td>30/07/2024</td>
                            <td>Parthib Pal</td>
                            <td>palparthib97@gmail.com</td>
                            <td>Successfull</td>
                            <td>2110</td>
                        </tr>
                        <tr>
                            <td>#45012</td>
                            <td>30/07/2024</td>
                            <td>Parthib Pal</td>
                            <td>palparthib97@gmail.com</td>
                            <td>Successfull</td>
                            <td>2110</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}
export default Dashboard;