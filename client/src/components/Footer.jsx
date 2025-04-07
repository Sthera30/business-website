import React from 'react'
import '../css/footer.css'
import img1 from '../../public/Sthe-digital-agency-logo.jpg'
import { FaWhatsapp, FaInstagram, FaTiktok, FaPhone, FaMailBulk } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { SiGmail } from 'react-icons/si'
import { NavLink } from 'react-router-dom'


function Footer() {
    return (
        <>

            <div className='footer'>


                <div className='footer-container'>

                    <div className='footer-box'>

                        <img src={img1} alt="Sthe digital agency logo" />

                    </div>

                    <div className='footer-box'>

                        <h1>LINKS</h1>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/about-sthe-digital-agency"}>About Us</NavLink>
                        <NavLink to={"/sthe-digital-agency-services"}>Services</NavLink>
                        <NavLink to={"/blog"}>Blog</NavLink>
                        <NavLink to={"/contact-sthe-digital-agency"}>Contact Us</NavLink>

                    </div>

                    <div className='footer-box'>

                        <h1>CONTACT INFO</h1>

                        <a href=""><FaPhone style={{ color: '#fff', fontSize: '.4rem', width: '3rem', background: 'blue', height: '2rem', lineHeight: '1.8', padding: '.2rem 1rem', borderRadius: '.5rem' }} />&nbsp;Phone: (+27) 62 419 2299</a>
                        <a href=""><SiGmail style={{ color: '#fff', fontSize: '.4rem', width: '3rem', background: 'orange', height: '2rem', lineHeight: '1.8', padding: '.2rem 1rem', borderRadius: '.5rem' }} />&nbsp;Email: info@sthedigitalagency.co.za</a>
                        <a href="https://wa.me/0624192299"><FaWhatsapp style={{ color: '#fff', fontSize: '.4rem', width: '3rem', background: 'green', height: '2rem', lineHeight: '1.8', padding: '.2rem 1rem', borderRadius: '.5rem' }} />&nbsp;wa.me/@StheDigitalAgency</a>
                        <a href="https://www.instagram.com/trap_pkq?igsh=b3hoZml2NzJnczF0"><FaInstagram style={{ color: '#fff', fontSize: '.4rem', width: '3rem', background: 'purple', height: '2rem', lineHeight: '1.8', padding: '.2rem 1rem', borderRadius: '.5rem' }} />&nbsp;@sirtembekile.dev</a>
                        <a href="https://www.tiktok.com/@sirtembekile.dev?_t=ZM-8ueFPftdKzO&_r=1"><FaTiktok style={{ color: '#fff', fontSize: '.4rem', width: '3rem', background: 'black', height: '2rem', lineHeight: '1.8', padding: '.2rem 1rem', borderRadius: '.5rem' }} />&nbsp;@sirtembekile.dev</a>

                    </div>

                </div>

                <div className='footer-bottom'>

                    <p>&copy; {new Date().getFullYear()} Sthe digital agency | All rights reserved.</p>

                </div>

            </div>


        </>


    )
}

export default Footer
