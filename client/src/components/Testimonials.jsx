import React from 'react'
import '../css/testimonials.css'
import { FiArrowDown } from 'react-icons/fi'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import {FaStar, FaStarHalf} from 'react-icons/fa'
import Img1 from '../../public/simamkele-ngcingolo-sthe-digital-agency-testimonial.jpg'
import Img2 from '../../public/vuyolwethu-mkwakwi-sthe-digital-agency-testimonial.jpg'
import {motion} from 'framer-motion'

function Testimonials() {
    return (
        <div className='testimonials-burner'>

            <div className='testimonials-content'>

                <motion.h2 style={{color: '#fff', fontSize: '2.2rem', marginTop: '4rem'}} initial={{opacity: 0, y: -80}} whileInView={{opacity: 1, y:0}} viewport={{once: true}} transition={{duration: .8, delay: .8}}>TESTIMONIALS</motion.h2>
                <FiArrowDown style={{ color: '#fff', fontSize: '2.8rem' }} />
                <motion.h3 style={{color: '#fff'}} initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y:0}} viewport={{once: true}} transition={{duration: .4, delay: .4}}>What Our Clients Say</motion.h3>

            </div>



            <div className="review-container">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 9000, disableOnInteraction: false }}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="swiper-wrapper"
                >
                    <SwiperSlide className="swiper-slide">
                        <div className="player-box">
                            <div className="rating-star">
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                            </div>
                            <p>
                                Sirtembekile is easy to work with, has a unique mind and this is reflected in his creative designs. Working with Sirtembekile was effortless because he engages with you in every step of the way. Not only does he ensure you're updated, but he also delivers exactly what you want, tailored to your expectations. I would definitely love to work with Sirtembekile again in the future as i am satisfied with his services and the quality of his work.

                            </p>
                            <div className="info-container">
                                <img src={Img1} alt="Simamkele Ngcingolo sharing his experience with Sthe Digital Agency's services" loading='lazy' width={1080} height={1350} />
                                <div className="user-info">
                                    <p>Simamkele Ngcingolo</p>
                                    <p>Founder at kwanosportsclub</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <div className="player-box">
                            <div className="rating-star">
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStarHalf style={{ color: "goldenrod" }} />
                            </div>
                            <p>

                                Sirtembekile is easy to work with and was available to answer all our enquiries in time. His work is professional, eye catching and clean. Our website was up and running within the time frame he promised. There were no delays and he kept us in the loop with constant updates throughout the process. I am really impressed with his efforts and work

                            </p>
                            <div className="info-container">
                                <img src={Img2} alt="Vuyolwethu mkwakwi sharing his experience with Sthe Digital Agency's services" loading='lazy' width={720} height={719} />
                                <div className="user-info">
                                    <p>Vuyolwethu Mkwakwi</p>
                                    <p>Tennis Player</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>



        </div>

    )
}

export default Testimonials


