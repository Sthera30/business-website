import React from 'react'
import { motion } from 'framer-motion'
import { FaUser } from 'react-icons/fa'
import { Calendar } from 'lucide-react'
import img1 from '../../public/web-developer-coding-professional-business-collaboration.jpg'

function Article6() {
    return (
        <>

            <div className='article-burner' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-6rem', height: '40rem' }}>

                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='article-burner-inner'>

                    <h1 style={{ fontSize: '3.5rem', maxWidth: '45rem', textAlign: 'center', display: 'flex', alignItems: 'center' }}>What to Expect When Working With a Web Developer</h1>

                </motion.div>

            </div>

            <div className='article-container'>


                <div className='article-content'>

                    <img src={img1} alt={"Close-up of hands typing on laptop keyboard with coffee cup nearby, representing the professional web development process and collaboration between developers and business owners"} title={"Professional-Web-Development-Process-Business-Collaboration"} loading='lazy' />
                    <div className='article-content-desc'>

                        <h2>What to Expect When Working with a Web Developer: A Guide for Business Owners</h2>
                        <p>
                            Hiring a web developer is a big step for any business — whether you're building your first site or giving your current one a refresh. But if you’ve never worked with one before, you might be wondering: What’s the process like?
                        </p>

                        <p style={{ marginTop: '-.2rem' }}>Here’s a quick guide to help you understand what to expect, and how to get the most out of your investment.</p>

                        <div className='table-contents'>

                            <h2 style={{ fontWeight: 300, fontSize: '2rem', color: '#333' }}>Table of Contents</h2>

                            <div className='table-of-contents'>

                                <ul>

                                    <li><a href="#discovery-&-strategy">Discovery & Strategy</a></li>
                                    <li><a href="#design-&-user-experience">Design & User Experience</a></li>
                                    <li><a href="#development-&-testing">Development & Testing</a></li>
                                    <li><a href="#launch-&-support">Launch & Support</a></li>

                                </ul>

                            </div>

                            <div />

                        </div>

                        <h2 id="discovery-&-strategy" style={{ fontWeight: 300, color: '#333' }}> 1. Discovery & Strategy</h2>
                        <p>It starts with a conversation.</p>
                        <p>Your developer will want to understand:</p>

                        <ul className='un'>

                            <li>Your business goals</li>
                            <li>Who your audience is</li>
                            <li>What you want the website to do (bookings, leads, sales, etc.)</li>

                        </ul>

                        <p>This is your chance to share your <b>vision, branding, and priorities.</b> The clearer you are, the smoother the project will go.</p>


                        <h2 id='design-&-user-experience' style={{ fontWeight: 300, marginTop: '4rem', color: '#333' }}>2. Design & User Experience</h2>
                        <p>Once the goals are clear, the focus shifts to layout, style, and structure. Expect mockups, feedback rounds, and decisions on colors, fonts, and content flow.</p>
                        <p> Good developers don’t just design — they create <b>experiences</b> that drive action.</p>
                        <p>Want to learn how to make a site users actually enjoy?</p>


                        <h2 id='development-&-testing' style={{ fontWeight: 300, marginTop: '4rem', color: '#333' }}>3. Development & Testing</h2>

                        <p>This is the build phase — turning the design into a real, functioning website. During this time:</p>

                        <ul className='un'>

                            <li>The site gets coded</li>
                            <li>Mobile responsiveness is added</li>
                            <li>Contact forms, animations, and integrations are built</li>

                        </ul>

                        <p>Before launch, you’ll also go through testing on different devices and browsers to make sure everything works perfectly.</p>

                        <h2 id='launch-&-support' style={{ fontWeight: 300, marginTop: '4rem', color: '#333' }}>4. Launch & Support</h2>
                        <p>Once approved, your website goes live! But that’s not the end — a good web developer will offer:</p>

                        <ul className='un'>

                            <li>Ongoing support</li>
                            <li>Updates & maintenance</li>
                            <li>SEO tweaks and analytics setup</li>

                        </ul>

                        <p>At <a href="https://www.sthedigitalagency.co.za/" target="_blank" rel="noopener noreferrer">Sthe Digital Agency,</a> I partner with businesses to build <b>strategic websites</b> that not only look good but also help them grow online.</p>

                        <h2 id='let’s-build-a-site-that-works-everywhere' style={{ fontWeight: 300, marginTop: '4rem', color: '#333' }}>Let’s Build a Site That Works Everywhere</h2>

                        <p><a href='https://www.sthedigitalagency.co.za/' target="_blank" rel="noopener noreferrer">At Sthe Digital Agency,</a> I don’t just build beautiful websites — I build mobile-first digital experiences that help businesses grow. Whether you need a redesign or you’re starting from scratch, I’ll make sure your site performs beautifully on every screen.</p>

                        <p>Need a trusted developer? </p>
                        <a href="https://www.sthedigitalagency.co.za/" target="_blank" rel="noopener noreferrer">Let's build something together!</a>

                        <div className='article-inner-content'>

                            <p><FaUser />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar />&nbsp;
                                Thur 17 April, 2025
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Article6



