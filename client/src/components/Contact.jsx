import React, { useEffect, useState } from 'react'
import '../css/contact.css'
import { motion } from 'framer-motion'
import { FiArrowDown, FiPhone, FiMail } from 'react-icons/fi'
import {MdLocationCity} from 'react-icons/md'
import {SiGmail} from 'react-icons/si'


function Contact() {


    const [result, setResult] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.target);

        formData.append("access_key", "7cfea49b-b086-436a-b979-a48f3a374827");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Email sent...");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };




    useEffect(() =>{

        window.scrollTo(0, 0)

    },[])


    return (

        <>


            <div className='contact-burner'>

                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='contact-burner-inner'>

                    <h1>Contact Sthe Digital Agency</h1>

                </motion.div>


            </div>

            <div className='contact-burner-container'>

                <div className='contact-burner-inners'>

                    <motion.h2 initial={{opacity: 0, x:100}} whileInView={{opacity:1, x:0}} viewport={{once: true}} transition={{duration: .8, delay: .8}}>Get In Touch</motion.h2>
                    <motion.h3 initial={{opacity: 0, x:-100}} whileInView={{opacity:1, x:0}} viewport={{once: true}} transition={{duration: .8, delay: .8}} style={{color: 'red', fontSize: '3.2rem', fontWeight: '300'}}>We'd Love To Hear From You</motion.h3>
                    <FiArrowDown style={{ color: 'red', fontSize: '3rem', marginBottom: '2rem' }} />

                    <form onSubmit={async (event) => onSubmit(event)}>


                        <motion.div initial={{opacity: 0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once: true}} transition={{duration: .8, delay: .8}} className='left-form'>

                            <label>Enter Your Name</label>
                            <input type='text' name='name' placeholder='Enter your name here...' required />
                            <label>Enter Your Email</label>
                            <input type='email' name='email' placeholder='Enter your email here...' required />
                            <label>Write Your Message Here</label>
                            <textarea name="message" cols={3} rows={3} placeholder='Write your message here...' required></textarea>
                            <motion.button type='submit' initial={{opacity: 0, y:80}} whileInView={{opacity:1, y:0}} viewport={{once: true}} transition={{duration: .8, delay: .8}}>Send message</motion.button>
                            <br />
                            <span style={{ color: 'green' }}>{result}</span>
                        </motion.div>

                        <motion.div initial={{opacity: 0, x:100}} whileInView={{opacity:1, x:0}} viewport={{once: true}} transition={{duration: .8, delay: .8}} className='right-form'>

                            <h2>Contact Information</h2>
                            <p><MdLocationCity style={{color:'orange'}} />&nbsp;South Africa, Eastern Cape, Uitenhage</p>
                            <p><FiPhone style={{color:'hsl(120, 93%, 17%)'}} />&nbsp;(+27) 624192299</p>
                            <p><SiGmail style={{color: 'orange'}} />&nbsp;support@sthedigitalagency.co.za</p>

                        </motion.div>

                    </form>

                </div>

            </div>

        </>

    )
}

export default Contact
