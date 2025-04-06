import React from 'react'
import '../css/services.css'
import { FiArrowDown } from 'react-icons/fi'
import {motion} from 'framer-motion'

function Services() {
    return (

        <>

            <div className='services-container'>

                <motion.h1 initial={{opacity:0, y: -80}} whileInView={{opacity: 1, y:0}} viewport={{once:true}} transition={{duration: .8, delay: .8}}>WHO IS THIS FOR</motion.h1>
                <FiArrowDown style={{ fontSize: '2rem', color: 'red', fontWeight: 300 }} />
                <motion.p initial={{opacity:0, y: -80}} whileInView={{opacity: 1, y:0}} viewport={{once:true}} transition={{duration: .8, delay: .8}} >Web development services at Sthe Digital Agency are designed for <span style={{color: 'red', fontWeight: '700'}}>businesses</span>  and  <span style={{color: 'red', fontWeight: '700'}}>individuals</span> who understand the importance of a strong online presence. This inlcudes:</motion.p>
                <motion.ul initial={{opacity:0, y: 80}} whileInView={{opacity: 1, y:0}} viewport={{once:true}} transition={{duration: .8, delay: .8}}>

                    <li>Small business owners looking to establish their first professional website</li>
                    <li>Businesses struggling with outdated, slow, or non-responsive websites</li>
                    <li>Professionals seeking a portfolio website to showcase their work</li>
                    <li>Organizations requiring custom web applications for specific business needs </li>
                    <li>Entrepreneurs launching new products or services</li>
                    <li>Established companies needing a website redesign to stay competitive</li>
                    <li>Brands seeking to refresh their digital identity with modern design and functionality</li>

                </motion.ul>

                <motion.p initial={{opacity:0, y: -80}} whileInView={{opacity: 1, y:0}} viewport={{once:true}} transition={{duration: .8, delay: .8}}>Whether you're just starting out or looking to take your existing web presence to the next level, Sthe Digital Agency provides tailored solutions that align with your goals and budget. Our clients value quality, performance, and websites that effectively convert visitors into customers.</motion.p>

            </div>

        </>

    )
}

export default Services
