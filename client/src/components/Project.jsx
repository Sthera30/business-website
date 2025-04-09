import React from 'react'
import '../css/project.css'
import img1 from '../../public/kwanosportsclub-by-sthe-digital-agency.jpg'
import { FaPlay } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'

function Project() {
    return (

        <>

            <div className='projects-container'>

                <motion.h2 initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}>Our Portfolio</motion.h2>
                <motion.h3 initial={{ opacity: 0, y: -80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}>Past Project(s)</motion.h3>

            </div>


            <div className='project-box-container'>

                <div className='project-box'>

                    <a href="https://kwanosportsclub.co.za">

                        <img src={img1} alt="Screenshot of the Kwanosportsclub website designed by Sthe Digital Agency" loading='lazy' width={3960} height={2640} />

                    </a>


                    <div className='content'>

                        <p>Kwano Sports Club</p>
                        <FaPlay style={{ color: 'red' }} />

                    </div>


                </div>

            </div>


        </>


    )
}

export default Project
