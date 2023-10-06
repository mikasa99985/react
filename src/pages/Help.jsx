import React from 'react'
import '../utility/css/btn_glow.css';
import '../utility/css/bg.css';
import { Link } from 'react-router-dom'
import Nav from '../components/Nav';
import Banner from '../components/banner';

const Help = () => {
    window. scrollTo(0, 0)
    return (
        <>
            <Nav help={true} />

            <Banner height='480px' img='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f208a0b1-b95d-4e18-9279-dc040bc0300c/d778x6r-345e30be-d542-4b5a-808d-bd226fed3773.jpg/v1/fill/w_1024,h_326,q_75,strp/games_collage_for_group_banner__3_by_thinkstoomuch_d778x6r-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzI2IiwicGF0aCI6IlwvZlwvZjIwOGEwYjEtYjk1ZC00ZTE4LTkyNzktZGMwNDBiYzAzMDBjXC9kNzc4eDZyLTM0NWUzMGJlLWQ1NDItNGI1YS04MDhkLWJkMjI2ZmVkMzc3My5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.nN56ttfrcrhUcBk7OqIGPMEWCCIWfmS_u1xd7O5F0L0'>
                <h1 className="fw-bolder">Welcome to Vibrant Game Help</h1>
            </Banner>

            <div className="container mt-5">
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
