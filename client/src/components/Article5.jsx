import React from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaMailBulk } from 'react-icons/fa'
import { Globe } from 'lucide-react'
import { Calendar } from 'lucide-react'
import img1 from '../../public/mobile-first-web-design-development-process.png'

function Article5() {
    return (

        <>
            <div className='article-burner' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-6rem', height: '40rem' }}>

                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='article-burner-inner'>

                    <h1 style={{ fontSize: '3.5rem', maxWidth: '45rem', textAlign: 'center', display: 'flex', alignItems: 'center' }}>What is Mobile-First Web Design?</h1>

                </motion.div>

            </div>


            <div className='article-container'>

                <div className='article-content'>

                    <img src={img1} alt={"Isometric illustration of mobile-first web design process showing a designer arranging UI elements on a smartphone interface with app icons, media components, and development tools surrounding the device"} title={"Mobile-First-Web-Design-UI-Development-Process"} loading='lazy' />
                    <div className='article-content-desc'>

                        <h2>What is Mobile-First Web Design?</h2>

                        <p>
                            <p><b>Mobile-first web design </b>means creating your website for smartphones and small screens first, then scaling it up for tablets and desktops. It’s the opposite of how websites used to be built - when mobile was an afterthought.</p>

                        </p>

                        <p style={{ marginTop: '-.2rem', fontWeight: 800 }}>Why the shift?</p>

                        <p style={{ marginTop: '-.5rem' }}>Because:</p>

                        <ul style={{ marginTop: '-.8rem' }} className='un'>

                            <li><b>73% of website traffic</b> now comes from mobile devices</li>
                            <li>Google uses <b>mobile-first indexing</b> - it checks your mobile site before the desktop version</li>
                            <li>People expect speed, clarity, and simplicity on mobile</li>

                        </ul>

                        <p>So if your site is clunky on a phone?</p>
                        <p style={{ marginTop: '-.8rem' }}>You’re instantly losing trust (and business).</p>

                    </div>

                    <div
                        className='table-contents'
                    >
                        <h2 style={{ fontWeight: 300, fontSize: '2rem' }}>Table of Contents</h2>

                        <div className='table-of-contents'>


                            <ul>

                                <li><a href="#why-it-matters-for-your-business-in-2025">Why It Matters for Your Business in 2025</a></li>
                                <li><a href="#better-rankings-on-google">Better Rankings on Google</a></li>
                                <li><a href="#improved-conversions-and-sales"> Improved Conversions and Salest</a></li>
                                <li><a href="#faster-load-times">Faster Load Times</a></li>
                                <li><a href="#how-to-know-if-your-site-is-mobile-friendly">How to Know If Your Site Is Mobile-Friendly</a></li>
                                <li><a href="#let’s-build-a-site-that-works-everywhere">Let’s Build a Site That Works Everywhere</a></li>

                            </ul>

                        </div>

                        <div
                        />

                    </div>

                    <h2 id="why-it-matters-for-your-business-in-2025" style={{ fontWeight: 300 }}>Why It Matters for Your Business in 2025</h2>
                    <h3 style={{ fontWeight: 300 }}>1. First Impressions Happen on Mobile</h3>
                    <p>Your website is often the first time a customer interacts with your business - and it’s happening on a phone. If your site loads weird, cuts off text, or needs zooming to navigate, they’re gone.</p>
                    <p><b>A mobile-first website</b> = a smooth, fast, beautiful experience that builds trust from the jump.
                        This is especially critical if you're targeting users searching for <b>web design in Gqeberha, web design in Uitenhage,</b> or <b>web design services in South Africa</b> - where competition is high and first impressions make or break a sale.</p>

                    <h3 id="better-rankings-on-google" style={{ fontWeight: 300 }}>2. Better Rankings on Google</h3>
                    <p>Google doesn’t play around - it now prioritizes websites that are mobile-friendly. That means:</p>

                    <ul className='un'>

                        <li>If your site isn’t optimized for mobile, your <b>rankings will suffer</b></li>
                        <li>Fewer people will find you online</li>
                        <li>You miss out on organic traffic</li>

                    </ul>
                    <p>Whether you’re focused on<b> SEO services in Gqeberha</b> or want broader reach across<b> South Africa,</b> mobile-first design is a must.</p>
                    <p>Mobile-first design = better SEO + more visibility.</p>
                    <p>Want to dive deeper into how this works? <a href="https://developers.google.com/search/mobile-sites/mobile-first-indexing" target="_blank" rel="noopener noreferrer">Google’s own Mobile-First Indexing guide explains it well.</a></p>

                    <h3 id='improved-conversions-and-sales' style={{ fontWeight: 300, marginTop: '4rem' }}>3. Improved Conversions and Sales</h3>
                    <p>A mobile-optimized website makes it easy to:</p>

                    <ul className='un'>

                        <li>Tap buttons without zooming</li>
                        <li>Fill out forms quickly</li>
                        <li>Book an appointment or buy something on the go</li>

                    </ul>

                    <p>The easier it is to take action, the more likely your visitors are to become paying customers - especially those browsing local services like <b>web design in Uitenhage or SEO services in South Africa</b> on the go.</p>

                    <h3 id='faster-load-times' style={{ fontWeight: 300, marginTop: '4rem' }}>4. Faster Load Times</h3>
                    <p>Mobile-first websites are designed to be lightweight - fewer large files, smarter layouts, and faster load speeds.</p>
                    <p>Speed is everything on mobile.</p>
                    <p>If your site takes more than 3 seconds to load, over half your visitors will bounce.</p>
                    <p>A faster site keeps visitors engaged, which directly impacts your SEO - especially for competitive terms like <b>web design Gqeberha</b> or <b>SEO services Gqeberha.</b></p>

                    <h2 id='how-to-know-if-your-site-is-mobile-friendly' style={{ fontWeight: 300, marginTop: '4rem' }}>How to Know If Your Site Is Mobile-Friendly</h2>
                    <p>Here’s a quick test:</p>

                    <ul className='un'>

                        <li>Pull up your site on your phone</li>
                        <li>Can you read the content easily?</li>
                        <li>Do all the buttons work?</li>
                        <li>Is the menu simple to use?</li>
                        <li>Does it load in under 3 seconds?</li>

                    </ul>

                    <p>If not - it’s time to adopt <b>mobile-first web design.</b></p>

                    <h2 id='let’s-build-a-site-that-works-everywhere' style={{ fontWeight: 300, marginTop: '4rem' }}>Let’s Build a Site That Works Everywhere</h2>

                    <p><b>At Sthe Digital Agency,</b> I don’t just build beautiful websites - I build mobile-first digital experiences that help businesses grow. Whether you need a redesign or you’re starting from scratch, I’ll make sure your site performs beautifully on every screen.</p>
                    <p>And yes - optimized for <b>web design in Gqeberha, web design in Uitenhage,</b>  and <b>SEO services across South Africa.</b></p>


                    <div className='foo'>

                        <p><a href="https://www.sthedigitalagency.co.za/" target="_blank" rel="noopener noreferrer"><Globe style={{ color: 'blue' }} />&nbsp;Visit Sthe Digital Agency</a> </p>
                        <p style={{ marginTop: '-1rem' }}><a href="mailto:support@sthedigitalagency.co.za"><FaMailBulk />&nbsp;support@sthedigitalagency.co.za</a></p>

                    </div>

                    <p>Let’s create something that works as great on a phone as it does on a desktop - because that’s where your customers are.</p>

                    <div className='article-inner-content'>

                        <p><FaUser />&nbsp;Sthe Digital Agency</p>
                        <p><Calendar />&nbsp;
                            Thur 17 April, 2025
                        </p>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Article5
