import React from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaArrowDown, FaMailBulk } from 'react-icons/fa'
import { Globe } from 'lucide-react'
import { Calendar } from 'lucide-react'
import img1 from '../../public/modern-website-landing-page-design-reviews-optimization.jpg'

function Article4() {
    return (
        <>

            <div className='article-burner' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-6rem', height: '40rem' }}>

                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='article-burner-inner'>

                    <h1 style={{ fontSize: '3.5rem', maxWidth: '45rem', textAlign: 'center', display: 'flex', alignItems: 'center' }}>Your Website is Your First Impression — Here’s How to Make It Count</h1>

                </motion.div>

            </div>



            <div className='article-container'>

                <div className='article-content'>

                    <img src={img1} alt={'"Modern website landing page design with vibrant purple branding, showing people working on laptops with review cards and interactive elements, demonstrating effective user experience design'} title={"Modern-Landing-Page-Design-User-Reviews-Web-Experience"} loading='lazy' />
                    <div className='article-content-desc'>

                        <h2>Your Website is Your First Impression — Here’s How to Make It Count</h2>
                        <p>

                            Imagine meeting a potential customer for the first time. You’d want to look sharp, speak clearly, and make a strong impression, right? Well — your website does that for you 24/7. For most people, your <b>website is their first interaction with your business.</b>  Before they call, email, or visit — they’re checking you out online. And just like in real life, <b>first impressions matter.</b>

                        </p>

                        <p>Here’s how to make sure your website isn’t turning people away before you even get the chance to connect.</p>

                    </div>

                    <div
                        className='table-contents'
                    >
                        <h2 style={{ fontWeight: 300, fontSize: '2rem' }}>Table of Contents</h2>

                        <div className='table-of-contents'>


                            <ul>

                                <li><a href="#design-that-looks-professional-and-modern?">Design That Looks Professional and Modern?</a></li>
                                <li><a href="#speed-=-trust-+-conversions">Speed = Trust + Conversions</a></li>
                                <li><a href="#mobile-friendly-is-a-must">Mobile-Friendly is a Must</a></li>
                                <li><a href="#clear-messaging:-tell-them-who-you-are-and-what-you-do">Clear Messaging: Tell Them Who You Are and What You Do</a></li>
                                <li><a href="#strong-calls-to-action-(CTAs)">Strong Calls to Action (CTAs)</a></li>
                                <li><a href="#functionality-matters-too">Functionality Matters Too</a></li>
                                <li><a href="#final-thoughts:-don’t-just-build-a-website—make-sure-people-can-find-it"> Final Thoughts: Don’t Just Build a Website — Make Sure People Can Find It</a></li>

                            </ul>

                        </div>

                        <div
                        />

                    </div>

                    <h2 id="design-that-looks-professional-and-modern?" style={{ fontWeight: 300 }}>1. Design That Looks Professional and Modern</h2>
                    <p>People judge within seconds. If your site looks outdated, cluttered, or poorly designed, they might think your business is too.</p>
                    <p>A clean, modern design instantly tells your visitors:</p>
                    <ul className='un'>

                        <li>You’re trustworthy</li>
                        <li>You care about your brand</li>
                        <li>You’re still in business (yep, old design can make people wonder)</li>

                    </ul>

                    <h2 id='speed-=-trust-+-conversions' style={{ fontWeight: 300, marginTop: '4rem' }}>Speed = Trust + Conversions</h2>
                    <p>A slow site doesn’t just annoy visitors — it tells them you’re not serious.</p>
                    <ul className='un'>

                        <li>1 in 2 people leave a website if it takes longer than 3 seconds to load.</li>
                        <li>Google even ranks fast websites higher because speed = good user experience.</li>

                    </ul>

                    <p><b>Make sure your site loads quickly</b> on mobile and desktop. Compress images, remove unnecessary animations, and use proper hosting.</p>

                    <h2 id='mobile-friendly-is-a-must' style={{ fontWeight: 300, marginTop: '4rem' }}>3. Mobile-Friendly is a Must</h2>
                    <p>More than <b>70% of users browse from their phones.</b> If your website isn’t responsive, you’re losing leads without even knowing it.</p>

                    <p>Your site should automatically adjust to any screen size — phone, tablet, or laptop. Mobile users should be able to scroll easily, tap buttons, and find info fast.</p>


                    <h2 id='clear-messaging:-tell-them-who-you-are-and-what-you-do' style={{ fontWeight: 300, marginTop: '4rem' }}>Clear Messaging: Tell Them Who You Are and What You Do</h2>
                    <p>When someone lands on your homepage, can they tell what your business offers in 5 seconds or less?</p>
                    <p>Use simple, direct language:</p>
                    <p>Don’t make people guess — guide them with clarity and confidence.</p>
                    <p style={{ marginTop: '-.8rem' }}><b>“We build professional websites that grow your business.”</b></p>
                    <p style={{ marginTop: '-.8rem' }}>Don’t make people guess — guide them with clarity and confidence.</p>


                    <h2 id='strong-calls-to-action-(CTAs)' style={{ fontWeight: 300, marginTop: '4rem' }}>5. Strong Calls to Action (CTAs)</h2>
                    <p>Don’t just inform — <b>guide</b> your visitors. Whether you want them to book a consultation, send a message, or view your services, make it obvious.</p>
                    <p>Use buttons like:</p>

                    <ul className='un'>

                        <li>“Get a Free Quote”</li>
                        <li>“Book a Call”</li>
                        <li>“Let’s Work Together”</li>

                    </ul>

                    <p>Your website should be working for you — generating leads and starting conversations.</p>


                    <h2 id='functionality-matters-too' style={{ fontWeight: 300, marginTop: '4rem' }}>6. Functionality Matters Too</h2>

                    <p>A beautiful site that’s broken or hard to use? That’s a no-go.</p>
                    <p>Make sure:</p>

                    <ul className='un'>

                        <li>Forms actually send messages</li>
                        <li>Links work</li>
                        <li>Contact info is correct</li>
                        <li>Navigation is simple and intuitive</li>

                    </ul>

                    <p>People should find what they need fast without getting frustrated.</p>

                    <h2 id='final-thoughts:-don’t-just-build-a-website—make-sure-people-can-find-it' style={{ fontWeight: 300, marginTop: '4rem' }}>Final Thoughts: Your Website = Your Online Salesperson</h2>

                    <p>Your website is more than just an online brochure — it’s your <b>24/7 sales rep.</b> When done right, it builds trust, answers questions, and convinces people to reach out.</p>
                    <p>At <b>Sthe Digital Agency,</b> I build websites that don’t just look good — they work hard for your business. Whether you’re starting fresh or need a redesign, let’s make sure your online first impression turns into real results.</p>

                    <div className='foo'>

                        <p><a href="https://www.sthedigitalagency.co.za/" target="_blank" rel="noopener noreferrer"><Globe style={{ color: 'blue' }} />&nbsp;Visit Sthe Digital Agency</a> </p>
                        <p style={{ marginTop: '-1rem' }}><a href="mailto:support@sthedigitalagency.co.za"><FaMailBulk />&nbsp;support@sthedigitalagency.co.za</a></p>

                    </div>

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

export default Article4
