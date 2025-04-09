import React from 'react'
import '../css/burner.css'
import img1 from '../../public/sthe-digital-agency-logo.jpeg'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'

function Burner() {
    return (
        <div className='burner-content-container'>

            <div className='burder-content'>

                <div className='left-content'>

                    <motion.h2 initial={{opacity: 0, y:-50}} whileInView={{opacity: 1, y:0}} viewport={{once: true}} transition={{duration: .8, delay: .8}}>LETS GET STARTED ON YOUR PROJECT</motion.h2>
                    <NavLink to={"/contact-us"} className="btnGetStarted" initial={{opacity: 0, y:50}} whileInView={{opacity: 1, y:0}} viewport={{once: true}} transition={{duration: .8, delay: .8}}>Get Started</NavLink>

                </div>

                <div className='right-content'>

                    <motion.img initial={{opacity: 0, y:-50}} whileInView={{opacity: 1, y:0}} viewport={{once: true}} transition={{duration: .8, delay: .8}} src={img1} alt="Sthe digital agency services logo" loading='lazy' width={619} height={305} />

                </div>

            </div>

        </div>
    )
}

export default Burner
