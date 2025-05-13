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
import img7 from '../../public/human-ai-collaboration-web-development-future-technology.jpg'
import img8 from '../../public/professional-homepage-layout.png'
import img9 from '../../public/business-decision-crossroads-question-marks.png'
import img10 from '../../public/how-long-to-build-a-website-time-management.png'
import img11 from '../../public/launching-your-first-website-illustration.png'
import img12 from '../../public/business-blogging-content-creation.jpeg'



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

                    <img src={img10} alt="Illustration of a website launching from a computer screen with a rocket, symbolizing going live online" title="Launching Your First Website Online – Step-by-Step Hosting Guide" loading='lazy' width={603} height={415} />


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

                    <img src={img11} alt="Person holding a clock near a laptop symbolizing website development time" title="How long does it take to build a website – time and development planning" loading='lazy' width={667} height={489} />

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



                <div className='blog-box'>

                    <img src={img12} alt="Laptop displaying a blog homepage with email icon, search bar, and a cup of tea nearby with reading glasses on the desk" title="Blogging setup with laptop, tea, and reading glasses - modern content creation workspace" loading='lazy' width={894} height={461} />

                    <div className='content'>

                        <NavLink to={`/why-blogs-are-important-gqeberha-uitenhage`}><h2 style={{ color: '#333' }}>Why Blogs Are So Important for Your Website (Especially in Gqeberha, Uitenhage, and the Eastern Cape)</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar />&nbsp;

                                Tue 13 May, 2025

                            </p>

                        </div>
                        <p className='desc' style={{ marginBottom: '2rem' }}>

                        If you’re a business owner or freelancer in Gqeberha, Uitenhage, or anywhere in the Eastern Cape, having a beautiful website is just the beginning. What reall...
                        </p>
                        <NavLink className={"btnReadMore"} style={{ marginTop: '1rem' }} to={`/why-blogs-are-important-gqeberha-uitenhage`}>Read more</NavLink>

                    </div>

                </div>

                <div className='blog-box'>

                    <img src={img7} alt="Professional web developer collaborating with AI technology for modern website development against city skyline backdrop" title="Human-AI Collaboration: The Future of Web Development in 2025" loading='lazy' width={880} height={505} />

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

                    <img src={img8} alt="Business website homepage design showing a clean, professional interface for better user experience" title="Professional Business Homepage Layout" width={2000} height={1111} loading='lazy' />

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


                <div className='blog-box'>

                    <img src={img9} alt="Business decision crossroads with question marks symbolizing choice between custom or template websites" title="Choosing the Right Path for Your Business Website: Custom vs Template" width={849} height={476} loading='lazy' />

                    <div className='content'>

                        <NavLink to={`/custom-vs-template-websites-which-is-right-for-growing-your-business-online`}><h2 style={{ color: '#333' }}>Custom vs Template Websites: Which is Right for Growing Your Business Online?</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser style={{ width: '1.5rem', height: '1.5rem' }} />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar style={{ width: '1.5rem', height: '1.5rem' }} />&nbsp;

                                Sun 27 April, 2025

                            </p>

                        </div>
                        <p className='desc' style={{ marginBottom: '2rem' }}>

                            If you're a business owner exploring web design in Gqeberha, Uitenhage, or anywhere in South Africa, one of the first decisions you'll face is whe...
                        </p>
                        <NavLink className={"btnReadMore"} style={{ marginTop: '1rem' }} to={`/custom-vs-template-websites-which-is-right-for-growing-your-business-online`}>Read more</NavLink>

                    </div>

                </div>


                <div className='blog-box'>

                    <img src={img3} alt="Computer mouse connecting to the letter O in SEO, illustrating the interactive nature of search engine optimization for online businesses" title="SEO-Digital-Marketing-Online-Connection-Concept" width={753} height={517} loading='lazy' />

                    <div className='content'>

                        <NavLink to={`/why-seo-is-essential-for-every-business-in-2025`}><h2 style={{ color: '#333' }}>Why SEO is Essential for Every Business in 2025: How Showing Up on Google Can Transform Your Brand</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar />&nbsp;

                                Thur 17 April, 2025

                            </p>

                        </div>
                        <p className='desc' style={{ marginBottom: '2rem' }}>

                            In today’s digital world, having a website isn’t enough. If your business doesn’t show up on Google, you’re basically invisible to your customers. That’s where SEO comes in - the secret weapon that helps your website get found, builds trust with potenti...

                        </p>
                        <NavLink className={"btnReadMore"} style={{ marginTop: '1rem' }} to={`/why-seo-is-essential-for-every-business-in-2025`}>Read more</NavLink>

                    </div>

                </div>

                <div className='blog-box'>

                    <img src={img4} alt="Modern website landing page design with vibrant purple branding, showing people working on laptops with review cards and interactive elements, demonstrating effective user experience design" title="Modern-Landing-Page-Design-User-Reviews-Web-Experience" loading='lazy' width={873} height={680} />

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
                            Well - your website does that for you 24/7. For most people, your website is the...

                        </p>
                        <NavLink className={"btnReadMore"} style={{ marginTop: '1rem' }} to={`/your-website-is-your-first-impression`}>Read more</NavLink>

                    </div>

                </div>

                <div className='blog-box'>

                    <img src={img5} alt={"Isometric illustration of mobile-first web design process showing a designer arranging UI elements on a smartphone interface with app icons, media components, and development tools surrounding the device"} title={"Mobile-First-Web-Design-UI-Development-Process"} loading='lazy' width={746} height={528} />

                    <div className='content'>

                        <NavLink to={`/what-is-mobile-first-web-design`}><h2 style={{ color: '#333' }}>What is Mobile-First Web Design?</h2></NavLink>
                        <div className='blog-content-info'>
                            <p><FaUser />&nbsp;Sthe Digital Agency</p>
                            <p><Calendar />&nbsp;

                                Thur 17 April, 2025

                            </p>

                        </div>
                        <p className='desc' style={{ marginBottom: '2rem' }}>
                            Mobile-first web design means creating your website for smartphones and small screens first, then scaling it up for tablets and desktops. It’s the opposite of how webs...                        </p>
                        <NavLink className={"btnReadMore"} style={{ marginTop: '1rem' }} to={`/what-is-mobile-first-web-design`}>Read more</NavLink>

                    </div>

                </div>

                <div className='blog-box'>

                    <img src={img6} alt={"Close-up of hands typing on laptop keyboard with coffee cup nearby, representing the professional web development process and collaboration between developers and business owners"} title={"Professional-Web-Development-Process-Business-Collaboration"} loading='lazy' width={898} height={541} />

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

                            In 2025, having a website is no longer optional for small businesses-it’s essential for success. With more consumers turning to the internet for their buying decisions, a well-designed website boosts your online visibility, ensuring potential customers can find you easily. Whether you're offering web desi...

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
