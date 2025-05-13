import React from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaArrowDown, FaMailBulk } from 'react-icons/fa'
import { Globe } from 'lucide-react'
import { Calendar } from 'lucide-react'
import img1 from '../../public/how-long-to-build-a-website-time-management.png'

function Article11() {
    return (
        <>

            <div className='article-burner' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-6rem', height: '40rem' }}>

                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='article-burner-inner'>

                    <h1 style={{ fontSize: '3.5rem', maxWidth: '45rem', textAlign: 'center', display: 'flex', alignItems: 'center' }}>How Long Does It Take to Build a Website and What Affects the Time?</h1>

                </motion.div>

            </div>


            <div className='article-container'>

                <div className='article-content'>

                    <img src={img1} alt="Person holding a clock near a laptop symbolizing website development time" title="How long does it take to build a website – time and development planning" loading='lazy' width={603} height={415} />
                    <div className='article-content-desc'>

                        <h2>How Long Does It Take to Build a Website and What Affects the Time?</h2>

                        <p>If you're thinking of getting a website for your business or personal brand, one of the first questions that comes to mind is: <b>How long will it take to build my website?</b> The answer is? It depends but I’ll break it down in simple terms.</p>
                        <p>Whether you’re based in <b>Gqeberha</b>, <b>Uitenhage</b>, or anywhere in the <b>Eastern Cape</b>, this guide will help you understand the timeline and what actually affects how fast (or slow) your website gets built.</p>

                    </div>


                    <div
                        className='table-contents'
                    >
                        <h2 style={{ fontWeight: 300, fontSize: '2rem' }}>Table of Contents</h2>

                        <div className='table-of-contents'>

                            <ul>

                                <li><a href="#how-long-does-it-take?">How Long Does It Take?</a></li>
                                <li><a href="#what-affects-the-time-it-takes?">What Affects the Time It Takes?</a></li>
                                <li><a href="#what-if-you’re-in-the-eastern-cape?">What If You’re in the Eastern Cape?</a></li>
                                <li><a href="#final-thoughts">Final Thoughts</a></li>

                            </ul>

                        </div>

                        <div
                        />

                    </div>

                    <h2 id="how-long-does-it-take?" style={{ fontWeight: 300 }}>How Long Does It Take?</h2>
                    <p>Here’s a rough breakdown:</p>

                    <ul className='un'>

                        <li>Basic website (2–5 pages): 1 to 2 weeks</li>
                        <li>Small business website with forms or bookings: 2 to 4 weeks</li>
                        <li>E-commerce website: 4 to 6 weeks</li>
                        <li>Custom design: 6 weeks or more</li>

                    </ul>

                    <p>These timelines can be shorter or longer based on how prepared you are and the complexity of the website.</p>


                    <h3 id='what-affects-the-time-it-takes?' style={{ fontWeight: 300, marginTop: '4rem' }}>What Affects the Time It Takes?</h3>

                    <h4 style={{ fontWeight: '300', fontSize: '1.2rem' }}>1. Website Type</h4>
                    <p>A one page website is much faster than an online store. But a custom designed website with user logins or payment gateways? That takes more time..</p>

                    <h4 style={{ fontWeight: '300', fontSize: '1.2rem' }}>2. Content & Images</h4>
                    <p>If you already have all your content, images, and branding ready, it speeds things up. If we have to wait for content or write it from scratch, the timeline extends.</p>

                    <h4 style={{ fontWeight: '300', fontSize: '1.2rem' }}>3. Custom Design vs Templates</h4>

                    <ul className='un'>

                        <li>A template based website (pre-designed layout) is quicker.</li>
                        <li>A custom design means we start from scratch and design every detail,  this takes longer but gives you a unique brand feel.</li>

                    </ul>

                    <p>Here in Gqeberha and Uitenhage, I’ve seen many clients choose custom designs to stand out from competitors, especially in industries like beauty, food, and creative fields such as photography, graphic design, and branding, prefer custom website designs to stand out from the competition.</p>

                    <h4 style={{ fontWeight: '300', fontSize: '1.2rem' }}>4. Communication</h4>
                    <p>Fast communication = faster results. Delays often happen when feedback or approvals take long. When we work together consistently, your website can be up and running in no time.</p>

                    <h4 style={{ fontWeight: '300', fontSize: '1.2rem' }}>5. Features & Functionality</h4>
                    <p>The more features you want, the longer it takes to test and build. </p>
                    <p>Some examples:</p>

                    <ul className='un'>

                        <li>Booking systems</li>
                        <li>Payment gateways</li>
                        <li>User logins</li>
                        <li>Admin panels</li>

                    </ul>

                    <p>All of these require extra development and testing time.</p>

                    <h2 id='final-thoughts' style={{ fontWeight: 300, marginTop: '4rem' }}>Final Thoughts</h2>
                    <p>So how long does it take to build a website? It depends, but with the right plan and communication, it can be smooth and stress free. Whether you need a simple web design or a custom website built from the ground up, I’ve got your back, especially if you’re local to Gqeberha, Uitenhage, or the greater Eastern Cape.</p>
                    <p>Want to get started? <a href="https://www.sthedigitalagency.co.za/" target='_blank' rel="noopener noreferrer">Contact us today</a> and lets bring your website idea to life.</p>

                    <div className='foo'>

                        <p><a href="https://www.sthedigitalagency.co.za/" target="_blank" rel="noopener noreferrer"><Globe style={{ color: 'blue' }} />&nbsp;Visit Sthe Digital Agency</a> </p>
                        <p style={{ marginTop: '-1rem' }}><a href="mailto:support@sthedigitalagency.co.za"><FaMailBulk />&nbsp;support@sthedigitalagency.co.za</a></p>

                    </div>

                    <div className='article-inner-content'>

                        <p><FaUser />&nbsp;Sthe Digital Agency</p>
                        <p><Calendar />&nbsp;
                            Mon 12 May, 2025
                        </p>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Article11
