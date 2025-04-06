import React from 'react'
import '../css/aboutUs.css'
import img1 from '../../public/node-js.jpg'
import img2 from '../../public/react-js.jpg'
import img3 from '../../public/mySql.jpg'
import img4 from '../../public/html.jpg'
import img5 from '../../public/css.jpg'
import img6 from '../../public/seo.jpg'
import { color, motion } from 'framer-motion'
import { FiSettings, FiTruck } from 'react-icons/fi'
import { FaUserTie } from 'react-icons/fa'
import { MdComputer } from 'react-icons/md'
import { NavLink } from 'react-router-dom'



function AboutUs() {
    return (

        <>

            <div className='about-us-co'>

                <img src={img1} alt="Node.js development services by Quantum Code" />
                <img src={img2} alt="React.js web application development by Quantum Code " />
                <img src={img3} alt="MySql database integration by Quantum Code" />
                <img src={img4} alt="HTML5 web development by Quantum Code" />
                <img src={img5} alt="CSS3 styling and design by Quantum Code" />
                <img src={img6} alt="SEO optimization services by Quantum Code" />

            </div>

            <div className='about-container'>
                <motion.h1 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: 1 }}>About Sthe Digital Agency</motion.h1>
                <motion.p initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: 1 }}>At Sthe Digital Agency, we are dedicated to creating stunning websites that not only look great, but also function flawlessly. With a strong passion for web design and development, our team of full-stack developers combines creativity with technical expertise to bring your vision to life. Whether you're a small business looking to establish an online presence or a large corporation in need of a website refresh, Sthe Digital Agency is here to help. Contact us today to get started on your next web project.</motion.p>
                <NavLink to={"/about-us"}>
                    <motion.button initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .6 }}>Read More</motion.button>
                </NavLink>
            </div>

            <div className='icons-container'>

                <motion.div initial={{ opacity: 0, x: -70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }} className='icons-left'>

                    <div className='icons-left-inner'>

                        <FiSettings style={{ color: 'orange', fontSize: '2rem' }} />
                        <p>Easy to manage</p>

                    </div>

                    <div className='icons-right-inner'>

                        <FiTruck style={{ color: 'red', fontSize: '2rem' }} />
                        <p>Fast Delivery</p>

                    </div>

                </motion.div>

                <motion.div initial={{ opacity: 0, x: 70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }} className='icons-right'>


                    <div className='icons-right-inner'>

                        <FaUserTie style={{ color: 'cadetblue', fontSize: '2rem' }} />
                        <p>Highly professional</p>

                    </div>

                    <div className='icon-right-inner'>

                        <MdComputer style={{ color: 'purple', fontSize: '2rem' }} />
                        <p>Responsive Design</p>

                    </div>

                </motion.div>

            </div>

        </>
    )
}

export default AboutUs
