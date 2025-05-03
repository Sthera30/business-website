import React, { useEffect, useState } from 'react'
import '../css/blog.css'
import { motion } from 'framer-motion'
import { FaUser, FaArrowDown } from 'react-icons/fa'
import { Calendar } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import img1 from '../../public/business-blogging-content-creation.jpeg'
import img2 from '../../public/professional-homepage-layout.png'

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

                    <img src={img1} alt="Person showing a blog post on a laptop for business content creation" title="Business Blogging and Content Creation" loading='lazy' width={894} height={461} />

                    <div className='content'>

                        <NavLink to={`/why-every-business-needs-a-blog-to-stay-relevant-and-visible-online`}><h2 style={{ color: '#333' }}>Why Every Business Needs a Blog to Stay Relevant and Visible Online</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar />&nbsp;

                                Sun 27 April, 2025

                            </p>

                        </div>
                        <p className='desc' style={{ marginBottom: '2rem' }}>

                            In today’s fast-moving digital world, having a website is only the beginning. If you’re a small business owner in Gqeberha, Uitenhage, or anywh...

                        </p>
                        <NavLink className={"btnReadMore"} style={{ marginTop: '1rem' }} to={`/why-every-business-needs-a-blog-to-stay-relevant-and-visible-online`}>Read more</NavLink>

                    </div>

                </div>


                <div className='blog-box'>

                    <img src={img2} alt="Business website homepage design showing a clean, professional interface for better user experience" title="Professional Business Homepage Layout" width={2000} height={1111} loading='lazy' />

                    <div className='content'>

                        <NavLink to={`/what-makes-a-homepage-great`}><h2 style={{ color: '#333' }}>What Makes a Homepage Great? Key Elements You Should Never Ignore</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser style={{ width: '1.5rem', height: '1.5rem' }} />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar style={{ width: '1.5rem', height: '1.5rem' }} />&nbsp;

                                Sun 27 April, 2025

                            </p>

                        </div>
                        <p className='desc' style={{ marginBottom: '2rem' }}>

                            Your homepage is the digital front door to your business. It’s the first impression visitors get when they land on your website, and it plays a crucial role in shap...

                        </p>
                        <NavLink className={"btnReadMore"} style={{ marginTop: '1rem' }} to={`/what-makes-a-homepage-great`}>Read more</NavLink>

                    </div>

                </div>


            </div>


        </>


    )
}

export default Blog



