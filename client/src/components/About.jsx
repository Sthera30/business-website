import React, { useEffect } from 'react'
import '../css/about.css'
import { motion } from 'framer-motion'
import img1 from '../../public/sthe-digital-agency-logo.png'
import Burner from '../components/Burner.jsx'

function About() {


    useEffect(() => {

        window.scrollTo(0, 0)

    }, [])

    return (
        <>

            <div className='about-us-burner'>

                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='about-us-burner-inner'>

                    <h1>About Sthe digital agency</h1>

                </motion.div>


            </div>

            <div className='about-us-box-container'>

                <motion.div initial={{ opacity: 0, y: -80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='about-us-left'>

                    <h2>About Sthe Digital Agency</h2>

                    <p>

                        Welcome to Sthe Digital Agency, your go-to partner for <b>web design in Gqeberha, Uitenhage,</b> and across <b>South Africa. </b>We're passionate about building websites that are clean, modern, and fully functional, helping small businesses and individuals establish a strong online presence.

                    </p>

                    <p>We focus on more than just looks. Every site we build is designed to be responsive, easy to navigate, and optimized for performance. Whether you're launching your first website or refreshing an existing one, our goal is to make sure your digital space works for you, day and night.</p>

                    <p>We also offer <b>SEO services in Gqeberha</b> and <b> SEO services across South Africa </b>to help your website rank better on Google and reach the right audience. After all, what’s the point of a beautiful site if no one can find it?</p>

                    <p>Whether you're based in <b>Gqeberha, Uitenhage,</b> or anywhere else in South Africa, we're here to help you stand out online with professional, affordable <b>web design</b> that delivers results.</p>

                </motion.div>

                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='about-us-right'>

                    <img src={img1} alt="Sthe digital agency logo services" width={640} height={317} />

                </motion.div>

            </div>

            <div className='about-us-container'>

                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='our-mission-container'>

                    <h2>Our Mission</h2>
                    <p>At Sthe Digital Agency, our mission is to empower small businesses and individuals in <b>Gqeberha, Uitenhage,</b> and across <b>South Africa</b> with innovative web solutions that drive real results. We specialize in <b>web design</b> and <b>SEO services</b> that not only look great but also help your website perform at its best. By combining creative design with technical precision, we aim to deliver custom digital experiences that help you stand out online, connect with your audience, and grow your presence in today’s competitive market.</p>

                </motion.div>

                <motion.div initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='our-mission-container'>

                    <h2>Our Vision</h2>
                    <p>At Sthe Digital Agency, our vision is to be recognized as a trusted name in<b> web design Gqeberha, web design Uitenhage, </b>and across <b>South Africa </b>delivering exceptional, innovative, and high-performance website solutions. We aim to help businesses grow through expertly crafted websites and <b>effective SEO services South Africa, </b>making it easier for them to connect with their audience and succeed online.</p>

                </motion.div>

            </div>

            <Burner />

        </>

    )
}

export default About
