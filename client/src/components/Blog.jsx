import React, { useEffect, useState } from 'react'
import '../css/blog.css'
import { motion } from 'framer-motion'
import { FaUser, FaArrowDown } from 'react-icons/fa'
import { Calendar } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import img1 from '../../public/human-ai-collaboration-web-development-future-technology.jpg'
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

                    <img src={img1} alt="Professional web developer collaborating with AI technology for modern website development against city skyline backdrop" title="Human-AI Collaboration: The Future of Web Development in 2025" loading='lazy' width={880} height={505} />

                    <div className='content'>

                        <NavLink to={`/will-web-development-be-replaced-by-ai`}><h2 style={{ color: '#333' }}>Will Web Development Be Replaced by AI? Here's What's Really Happening</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar />&nbsp;

                                Mon 05 May, 2025

                            </p>

                        </div>
                        <p className='desc' style={{ marginBottom: '2rem' }}>

                        Every few months, I see another headline claiming AI is about to make web developers obsolete. As someone who's been building websites for quite some time, I've heard the...

                        </p>
                        <NavLink className={"btnReadMore"} style={{ marginTop: '1rem' }} to={`/will-web-development-be-replaced-by-ai`}>Read more</NavLink>

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



