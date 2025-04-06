import React, { useEffect, useState } from 'react'
import '../css/navbar.css'
import Img1 from '../../public/sthe-digital-agency-logo.png'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Navbar() {

    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {

        window.scrollTo(0,0)

    },[])

    return (
        <div className='header'>

            <div className='logo-design'>

                <NavLink to={"/"}><img src={Img1} alt='Sthe digital agency services logo' /></NavLink>
       
            </div>

            <div className='right-design'>

                <div className={`right-design-inner ${isClicked ? "show" : "hide"}`}>

                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/about-sthe-digital-agency"}>About Us</NavLink>
                    <NavLink to={"/sthe-digital-agency-services"}>Services</NavLink>
                    <NavLink to={"/blog"}>Blog</NavLink>
                    <NavLink to={"/contact-sthe-digital-agency"}>Contact Us</NavLink>

                </div>

                <div className='bars-container'>

                    <FaBars onClick={() => setIsClicked(prev => !prev)} className='bars' style={{ color: '#333', marginLeft: '1rem', cursor: 'pointer', display: 'none' }} />

                </div>

            </div>

        </div>
    )
}

export default Navbar
