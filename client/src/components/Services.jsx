import React from 'react'
import '../css/services.css'
import { FiArrowDown } from 'react-icons/fi'
import { motion } from 'framer-motion'

function Services() {
    return (

        <>

            <div className='services-container'>

                <motion.h2 initial={{ opacity: 0, y: -80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}>WHO IS THIS FOR</motion.h2>
                <FiArrowDown style={{ fontSize: '2rem', color: 'red', fontWeight: 300 }} />
                <motion.p initial={{ opacity: 0, y: -80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}>Web development and SEO services at Sthe Digital Agency are designed for businesses and individuals who understand the importance of a <span style={{ color: 'red', fontWeight: 700 }}> strong online presence.</span> We work with clients in Gqeberha, Uitenhage, and across the Eastern Cape and South Africa. This includes:</motion.p>
                <motion.ul className='ulp' initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}>

                    <li>Small business owners looking to establish their first professional website</li>
                    <li>Businesses with outdated, slow, or non-responsive websites needing a modern web design</li>
                    <li>Professionals needing a portfolio website to showcase their work effectively</li>
                    <li>Organizations requiring custom web applications tailored to their business needs</li>
                    <li>Entrepreneurs launching new products or services online</li>
                    <li>Brands seeking to refresh their digital identity with modern design, performance, and SEO optimization</li>

                </motion.ul>

                <motion.p initial={{ opacity: 0, y: -80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}>Whether you're just starting out or looking to elevate your existing web presence, Sthe Digital Agency offers tailored web design and SEO solutions that align with your goals and budget. Not sure whether a <b style={{color: '#333', fontWeight: '800'}}>custom</b> or <b style={{color: '#333', fontWeight: '800'}}>template-based website</b> is best for your business? <a href="https://www.sthedigitalagency.co.za/custom-vs-template-websites-which-is-right-for-growing-your-business-online" target='_blank' rel="noopener noreferrer">Read our guide to choosing the right type of website for growth.</a> Our clients value quality, speed, and websites that effectively convert visitors into loyal customers.</motion.p>

            </div>

        </>

    )
}

export default Services
