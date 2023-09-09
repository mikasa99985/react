import React from 'react'
import '../utility/css/btn_glow.css';
import { Link } from 'react-router-dom'
import Nav from '../components/Nav';

const Help = () => {
    return (
        <>
            <Nav help={true} />

            <div className="container mt-5">
                <h1 className="text-center">VIBRANT GAME Help Center</h1>


                <div className="row mt-5">
                    <div className="col-md-4">
                        <h2 className=''>How can we help you ?</h2>
                        <p>Please choose any option below</p>
                        <div className=" d-flex flex-column h-auto my-3 align-items-start">
                            <Link to='/contact' className='btn-cus btn-blue-glow my-1' style={{ padding: '8px 30px', borderRadius: '9px', fontSize: '17px', textDecoration: 'none' }}>Contact us</Link>
                            <Link to='/report' className='btn-cus btn-blue-glow my-1' style={{ padding: '8px 30px', borderRadius: '9px', fontSize: '17px', textDecoration: 'none' }}>Email report</Link>
                            <Link to='/' className='btn-cus btn-blue-glow my-1' style={{ padding: '8px 30px', borderRadius: '9px', fontSize: '17px', textDecoration: 'none' }}>Live chats</Link>
                        </div>
                        <h4>Table of Contents</h4>
                        <ul>
                            <li><a href="#creating-an-account">Creating an Account</a></li>
                            <li><a href="#logging-in">Logging In</a></li>
                            <li><a href="#navigating-the-dashboard">Navigating the Dashboard</a></li>
                            <li><a href="#finding-games">Finding Games</a></li>
                            {/* Other sections and subsections go here */}
                        </ul>
                    </div>

                    <div className="col-md-7">
                        <section id="creating-an-account">
                            <h4>1. Creating an Account</h4>
                            <p>To get started with VIBRANT GAME, you'll need to create an account. Follow these steps:</p>
                            {/* Insert steps here */}
                        </section>

                        <section id="logging-in">
                            <h4>2. Logging In</h4>
                            <p>Once you have an account, you can log in:</p>
                            {/* Insert steps here */}
                        </section>

                        <section id="navigating-the-dashboard">
                            <h4>3. Navigating the Dashboard</h4>
                            <p>After logging in, you'll find yourself on the dashboard. Here, you can explore games, manage your profile, and access various features.</p>
                            {/* Insert details here */}
                        </section>

                        <section id="finding-games">
                            <h4>4. Finding Games</h4>
                            <p>To discover games on VIBRANT GAME:</p>
                            {/* Insert steps here */}
                        </section>

                        {/* Repeat the above structure for other sections */}
                    </div>
                </div>

                <footer className="text-center mt-5">
                    <p>We hope this Help Center has provided you with the information you need to enjoy your gaming experience on VIBRANT GAME. If you have any further questions or need assistance, don't hesitate to reach out to our support team. Happy gaming!</p>
                </footer>
            </div>
        </>
    )
}

export default Help
