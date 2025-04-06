import React, { useEffect } from 'react'
import '../css/about.css'
import { motion } from 'framer-motion'
import img1 from '../../public/sthe-digital-agency-logo.png'
import Burner from '../components/Burner.jsx'

function About() {


    useEffect(() => {

        window.scrollTo(0, 0)

    },[])

    return (
        <>

            <div className='about-us-burner'>

                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='about-us-burner-inner'>

                    <h1>About Sthe digital agency</h1>

                </motion.div>


            </div>

            <div className='about-us-box-container'>

                <motion.div initial={{ opacity: 0, y: -80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='about-us-left'>

                    <h1>About Sthe Digital Agency</h1>

                    <p>At Sthe Digital Agency, we are dedicated to creating stunning websites that not only look great, but also function flawlessly. With a strong passion for web design and development, our team of full-stack developers combines creativity with technical expertise to bring your vision to life. Whether you're a small business looking to establish an online presence or a large corporation in need of a website refresh, Sthe Digital Agency is here to help.

                    </p>

                    <p>In addition to web development, we also focus on user experience (UX) and performance, ensuring that every website we build is fast, responsive, and easy to navigate. Our goal is to create websites that not only attract visitors but also keep them engaged.

                        🚀 Let’s build something amazing together! Contact us today to get started on your next web project.</p>

                </motion.div>

                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='about-us-right'>

                    <img src={img1} alt="Quantum code logo services" />

                </motion.div>

            </div>

            <div className='about-us-container'>

                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='our-mission-container'>

                    <h1>Our Mission</h1>
                    <p>At Sthe Digital Agency, our mission is to transform businesses through innovative web solutions that drive real results. We combine cutting-edge technology with creative design to build websites that not only look stunning but also perform flawlessly. Our commitment is to deliver custom web experiences that help our clients stand out in the digital landscape and achieve their business goals.</p>

                </motion.div>

                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='our-mission-container'>

                    <h1>Our Vision</h1>
                    <p>At Sthe Digital Agency, our vision is to become the leading web developer, recognized for delivering exceptional, innovative, and high-performance website solutions.</p>

                </motion.div>

            </div>

            <Burner />

        </>

    )
}

export default About
