import React, { useEffect, useState } from 'react'
import '../css/blog.css'
import { motion } from 'framer-motion'
import { FaUser, FaArrowDown } from 'react-icons/fa'
import { Calendar } from 'lucide-react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Burner from '../components/Burner.jsx'
import img1 from '../../public/webway-south-africa-hosting-client-portal.jpg'
import img2 from '../../public/small-business-website-importance-2025.jpg'


function Blog() {


    useEffect(() => {

        window.scrollTo(0, 0)

    }, [])


    return (

        <>

            <div className='blog-burner' style={{ marginBottom: '8rem' }}>

                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='blog-burner-inner'>

                    <h1>Sthe Digital Agency Articles</h1>

                </motion.div>


            </div>

            <div className='blog-heading'>

                <h2 style={{fontSize: '2rem', fontWeight: '300'}}>Blogs</h2>
                <FaArrowDown style={{ color: 'red', fontSize: '2rem' }} />
                <h2>Latest Articles</h2>

            </div>
            <div className='blog-container'>


                <div className='blog-box'>

                    <img src={img1} alt="WebWay hosting client portal interface showing domain search functionality and service options on a laptop screen with New Client Portal notification" title=" WebWay's redesigned client portal provides an intuitive interface for managing domains, hosting, and support services for South African websites." loading='lazy' width={702} height={498} />

                    <div className='content'>

                        <NavLink to={`/why-i-trust-web-way-for-all-my-website-hosting-needs-in-south-africa`}><h2 style={{ color: '#333' }}>Why I Trust WebWay for All My Website Hosting Needs in South Africa</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar />

                                Tue 08 April, 2025

                            </p>

                        </div>
                        <p className='desc' style={{ marginBottom: '2rem' }}>
                            Looking for a trustworthy and reliable hosting provider in South Africa? In this post, I dive into why WebWay has been my go-to choice for website hosting. With its outstanding uptime, exceptional customer service, and locally optimized solutions, WebWay offers everything a business or developer cou...
                        </p>
                        <NavLink className={"btnReadMore"} style={{ marginTop: '1rem' }} to={`/why-i-trust-web-way-for-all-my-website-hosting-needs-in-south-africa`}>Read more</NavLink>

                    </div>

                </div>


                <div className='blog-box'>

                    <img src={img2} alt="Small business owner accessing their professional website on a laptop, demonstrating the importance of web presence in 2025" title="Digital presence has become essential for small businesses looking to thrive in today's market." loading='lazy' width={6144} height={3456} />

                    <div className='content'>

                        <NavLink to={`/the-importance-of-having-a-website-for-your-small-business-in-2025`}><h2 style={{ color: '#333' }}>The Importance of Having a Website for Your Small Business in 2025</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar />

                                Tue 08 April, 2025

                            </p>

                        </div>
                        <p className='desc' style={{ marginBottom: '2rem' }}>

                            In 2025, having a website is no longer optional for small businesses—it's essential for success. With more consumers turning to the internet for their buying decisions, a well-designed website boosts your online visibility, ensuring potential customers can find you easily. A website also builds cred...

                        </p>
                        <NavLink className={"btnReadMore"} style={{ marginTop: '1rem' }} to={`/the-importance-of-having-a-website-for-your-small-business-in-2025`}>Read more</NavLink>

                    </div>

                </div>


            </div>


            <Burner />


        </>


    )
}

export default Blog
