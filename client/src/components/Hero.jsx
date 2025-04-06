import React from 'react'
import '../css/hero.css'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

function Hero() {
    return (
        <div className='hero-container'>

            <div className='hero-content'>

                <motion.h1 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}>Elevate Your online Presence with Sthe Digital Agency</motion.h1>
                <motion.p initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}>At Sthe digital agency, we specialize in creating stunning websites that drive results. Our team of expert web developers uses the latest technologies to craft custom solutions that elevate your online presence and grow your business.</motion.p>
                <NavLink to={"/contact-sthe-digital-agency"}>
                <motion.button className={"btnGetStarted"} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}>Get Started Today</motion.button>
                </NavLink>

            </div>

        </div>
    )
}

export default Hero
