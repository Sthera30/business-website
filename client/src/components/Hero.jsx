import React from 'react'
import '../css/hero.css'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

function Hero() {
    return (
        <div className='hero-container'>

            <div className='hero-content'>

                <motion.h1 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}>Web Design & SEO Services in Gqeberha, Uitenhage & Eastern Cape</motion.h1>
                <motion.p initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}>Welcome to Sthe Digital Agency - your trusted partner for professional web design and SEO services in Gqeberha, Uitenhage, and the surrounding areas. Our team of experienced developers is dedicated to building modern, results driven websites that help small businesses boost their local search visibility, attract nearby customers, and grow their online presence.</motion.p>
                <NavLink to={"/contact-sthe-digital-agency"}>
                <motion.button className={"btnGetStarted"} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}>Get Started Today</motion.button>
                </NavLink>

            </div>

        </div>
    )
}

export default Hero 