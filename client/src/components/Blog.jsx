import React, { useEffect, useState } from 'react'
import '../css/blog.css'
import { motion } from 'framer-motion'
import { FaUser, FaArrowDown } from 'react-icons/fa'
import { Calendar } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import img1 from '../../public/importance-of-seo-for-your-business.jpeg'
import img2 from '../../public/modern-website-landing-page-design-reviews-optimization.jpg'

function Blog() {


    useEffect(() => {

        window.scrollTo(0, 0)

    }, [])


    return (

        <>


            <div className='blog-heading'>

                <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}>Blogs</motion.h2>
                <FaArrowDown style={{ color: 'red', fontSize: '2rem' }} />
                <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}>Latest Articles</motion.h3>

            </div>

            <div className='blog-container'>

                <div className='blog-box'>

                    <img src={img1} alt="Computer mouse connecting to the letter O in SEO, illustrating the interactive nature of search engine optimization for online businesses" title="SEO-Digital-Marketing-Online-Connection-Concept" loading='lazy' />

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

                    <img src={img2} alt="Modern website landing page design with vibrant purple branding, showing people working on laptops with review cards and interactive elements, demonstrating effective user experience design" title="Modern-Landing-Page-Design-User-Reviews-Web-Experience" loading='lazy' />

                    <div className='content'>

                        <NavLink to={`/your-website-is-your-first-impression`}><h2 style={{ color: '#333' }}>Your Website is Your First Impression — Here’s How to Make It Count</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser style={{ width: '1.5rem', height: '1.5rem' }} />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar style={{ width: '1.5rem', height: '1.5rem' }} />&nbsp;

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


            </div>


        </>


    )
}

export default Blog



