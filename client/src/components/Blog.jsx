import React, { useEffect, useState } from 'react'
import '../css/blog.css'
import { motion } from 'framer-motion'
import { FaUser, FaArrowDown } from 'react-icons/fa'
import { Calendar } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import img1 from '../../public/how-long-to-build-a-website-time-management.png'
import img2 from '../../public/launching-your-first-website-illustration.png'

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

                    <img src={img2} alt="Illustration of a website launching from a computer screen with a rocket, symbolizing going live online" title="Launching Your First Website Online – Step-by-Step Hosting Guide" loading='lazy' width={667} height={489} />


                    <div className='content'>

                        <NavLink to={`/how-to-host-your-first-website-for-free-or-cheap`}><h2 style={{ color: '#333' }}>How to Host Your First Website for Free or Cheap</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar />&nbsp;

                                Tue 13 May, 2025

                            </p>

                        </div>
                        <p className='desc' style={{ marginBottom: '2rem' }}>

                            So you’ve built your very first website, maybe a personal portfolio, a business page, or a fun side project. Now the big question is? how do you actually get it on...

                        </p>
                        <NavLink className={"btnReadMore"} style={{ marginTop: '1rem' }} to={`/how-to-host-your-first-website-for-free-or-cheap`}>Read more</NavLink>

                    </div>

                </div>

                <div className='blog-box'>

                    <img src={img1} alt="Person holding a clock near a laptop symbolizing website development time" title="How long does it take to build a website – time and development planning" loading='lazy' width={603} height={415} />

                    <div className='content'>

                        <NavLink to={`/how-long-to-build-a-website`}><h2 style={{ color: '#333' }}>How Long Does It Take to Build a Website and What Affects the Time?</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar />&nbsp;

                                Tue 13 May, 2025

                            </p>

                        </div>
                        <p className='desc' style={{ marginBottom: '2rem' }}>

                            If you're thinking of getting a website for your business or personal brand, one of the first questions that comes to min...

                        </p>
                        <NavLink className={"btnReadMore"} style={{ marginTop: '1rem' }} to={`/how-long-to-build-a-website`}>Read more</NavLink>

                    </div>

                </div>

            </div>


        </>


    )
}

export default Blog



