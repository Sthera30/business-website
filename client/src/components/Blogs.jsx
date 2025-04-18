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
import img3 from '../../public/importance-of-seo-for-your-business.jpeg'
import img4 from '../../public/modern-website-landing-page-design-reviews-optimization.jpg'
import img5 from '../../public/mobile-first-web-design-development-process.png'
import img6 from '../../public/web-developer-coding-professional-business-collaboration.jpg'


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

                <h2 style={{ fontSize: '2rem', fontWeight: '300' }}>Blogs</h2>
                <FaArrowDown style={{ color: 'red', fontSize: '2rem' }} />
                <h2>Latest Articles</h2>

            </div>
            <div className='blog-container'>


                <div className='blog-box'>

                    <img src={img3} alt="Computer mouse connecting to the letter O in SEO, illustrating the interactive nature of search engine optimization for online businesses" title="SEO-Digital-Marketing-Online-Connection-Concept" loading='lazy' />

                    <div className='content'>

                        <NavLink to={`/why-seo-is-essential-for-every-business-in-2025`}><h2 style={{ color: '#333' }}>Why SEO is Essential for Every Business in 2025: How Showing Up on Google Can Transform Your Brand</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar />&nbsp;

                                Thur 17 April, 2025

                            </p>

                        </div>
                        <p className='desc' style={{ marginBottom: '2rem' }}>

                            In today’s digital world, having a website isn’t enough. If your business doesn’t show up on Google, you’re basically invisible to your customers. That’s where SEO comes in — the secret weapon that helps your website get found, builds trust with potenti...

                        </p>
                        <NavLink className={"btnReadMore"} style={{ marginTop: '1rem' }} to={`/why-seo-is-essential-for-every-business-in-2025`}>Read more</NavLink>

                    </div>

                </div>

                <div className='blog-box'>

                    <img src={img4} alt="Modern website landing page design with vibrant purple branding, showing people working on laptops with review cards and interactive elements, demonstrating effective user experience design" title="Modern-Landing-Page-Design-User-Reviews-Web-Experience" loading='lazy' width={702} height={498} />

                    <div className='content'>

                        <NavLink to={`/your-website-is-your-first-impression`}><h2 style={{ color: '#333' }}>Your Website is Your First Impression — Here’s How to Make It Count</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar />&nbsp;

                                Thur 17 April, 2025

                            </p>

                        </div>
                        <p className='desc' style={{ marginBottom: '2rem' }}>

                            Imagine meeting a potential customer for the first time. You’d want to look sharp, speak clearly, and make a strong impression, right?
                            Well — your website does that for you 24/7. For most people, your website is the...

                        </p>
                        <NavLink className={"btnReadMore"} style={{ marginTop: '1rem' }} to={`/your-website-is-your-first-impression`}>Read more</NavLink>

                    </div>

                </div>

                <div className='blog-box'>

                    <img src={img5} alt={"Isometric illustration of mobile-first web design process showing a designer arranging UI elements on a smartphone interface with app icons, media components, and development tools surrounding the device"} title={"Mobile-First-Web-Design-UI-Development-Process"} loading='lazy' width={702} height={498} />

                    <div className='content'>

                        <NavLink to={`/what-is-mobile-first-web-design`}><h2 style={{ color: '#333' }}>What is Mobile-First Web Design?</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar />&nbsp;

                                Thur 17 April, 2025

                            </p>

                        </div>
                        <p className='desc' style={{ marginBottom: '2rem' }}>
                            Mobile-first means designing your website for smartphones and small screens first, then scaling it up for tablets and desktops. It’s the opposite of how many old websites were built — where mobi...
                        </p>
                        <NavLink className={"btnReadMore"} style={{ marginTop: '1rem' }} to={`/what-is-mobile-first-web-design`}>Read more</NavLink>

                    </div>

                </div>

                <div className='blog-box'>

                    <img src={img6} alt={"Close-up of hands typing on laptop keyboard with coffee cup nearby, representing the professional web development process and collaboration between developers and business owners"} title={"Professional-Web-Development-Process-Business-Collaboration"} loading='lazy' width={702} height={498} />

                    <div className='content'>

                        <NavLink to={`/what-to-expect-when-working-with-a-web-developer`}><h2 style={{ color: '#333' }}>What to Expect When Working with a Web Developer: A Guide for Business Owners</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar />&nbsp;

                                Thur 17 April, 2025

                            </p>

                        </div>
                        <p className='desc' style={{ marginBottom: '2rem' }}>

                            Hiring a web developer is a big step for any business — whether you're building your first site or giving your current one a refresh. But if you’ve never worked with one before, you might be wonde...

                        </p>
                        <NavLink className={"btnReadMore"} style={{ marginTop: '1rem' }} to={`/what-to-expect-when-working-with-a-web-developer`}>Read more</NavLink>

                    </div>

                </div>


                <div className='blog-box'>

                    <img src={img1} alt="WebWay hosting client portal interface showing domain search functionality and service options on a laptop screen with New Client Portal notification" title=" WebWay's redesigned client portal provides an intuitive interface for managing domains, hosting, and support services for South African websites." loading='lazy' width={702} height={498} />

                    <div className='content'>

                        <NavLink to={`/why-i-trust-web-way-for-all-my-website-hosting-needs-in-south-africa`}><h2 style={{ color: '#333' }}>Why I Trust WebWay for All My Website Hosting Needs in South Africa</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar />&nbsp;

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
                            <p><Calendar />&nbsp;

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
