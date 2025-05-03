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

                <img src={img1} alt="Node.js development services by Sthe Digital Agency" width={767} height={313} />
                <img src={img2} alt="React.js web application development by Sthe Digital Agency" width={658} height={495} />
                <img src={img3} alt="MySql database integration by Sthe Digital Agency" width={464} height={557} />
                <img src={img4} alt="HTML5 web development by Sthe Digital Agency" width={666} height={404} />
                <img src={img5} alt="CSS3 styling and design by Sthe Digital Agency" width={748} height={421} />
                <img src={img6} alt="SEO optimization services by Sthe Digital Agency" width={657} height={318} />

            </div>

            <div className='about-container'>
                <motion.h2 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: 1 }}>About Sthe Digital Agency</motion.h2>
                <motion.p initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: 1 }}>At Sthe Digital Agency, we’re passionate about building websites that not only look amazing but perform flawlessly. Based in the Eastern Cape, we serve clients across Gqeberha, Uitenhage, and throughout South Africa. Our team of full-stack developers combines creativity and technical expertise to deliver high-quality web design and SEO services tailored to your business goals. Whether you're a small business looking to establish an online presence or need a website refresh, we're here to help. We also believe that <a href='https://www.sthedigitalagency.co.za/why-every-business-needs-a-blog-to-stay-relevant-and-visible-online' target="_blank" rel="noopener noreferrer"> blogging plays a vital role in staying visible online.</a> Contact us today to start your next web project with a team you can trust.</motion.p>
                <NavLink to={"/about-sthe-digital-agency"}>
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
