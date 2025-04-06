import React from 'react'
import '../css/service.css'
import { FaLaptopCode, FaBriefcase, FaStore } from 'react-icons/fa'
import { FiCalendar } from 'react-icons/fi'

function Service() {
    return (

        <>

            <div className='serive-heading'>

                <h1>Types Of <span>Websites</span> We Build</h1>

            </div>


            <div className='service-container'>

                <div className='service-box'>
                    <FaLaptopCode style={{ color: 'red', fontSize: '3.5rem' }} />
                    <h1>Custom Websites</h1>
                    <p>
                        We create tailored websites that meet your unique needs, ensuring a seamless user experience, <span style={{ color: 'red' }}>responsive design</span>, and optimized performance for any device. Our custom-built websites are designed to align with your<span style={{ color: 'red' }}> brand</span>, offering intuitive navigation and user-friendly interfaces. Whether you need a simple website or a complex, feature-rich platform, we integrate the latest technologies to ensure your site is fast, secure, and scalable for future growth.
                    </p>

                </div>

                <div className='service-box'>
                    <FiCalendar style={{ color: 'red', fontSize: '3.5rem' }} />
                    <h1>Event Websites</h1>
                    <p>Turn your special occasions into memorable online experiences with our custom event websites. We create clean, professional sites that handle registrations, display event information, and connect with your guests. Our websites make planning easier and help your event shine.</p>
                </div>

                <div className='service-box'>
                    <FaBriefcase style={{ color: 'red', fontSize: '3.5rem' }} />
                    <h1>Business Websites </h1>
                    <p>Create a business website that not only represents your brand but also drives engagement and conversion. We build user-friendly websites that provide all the essential information about your products, services, and values, ensuring your audience can easily find what they’re looking for. From clean designs to eCommerce integration, our websites are tailored to meet your specific business needs. We focus on creating a site that builds trust with potential customers, enhances your brand’s visibility, and improves user interaction, all while ensuring fast load times and seamless performance across all devices.</p>                </div>

                <div className='service-box'>
                    <FaStore style={{ color: 'red', fontSize: '3.5rem' }} />
                    <h1>E-commerce Websites</h1>
                    <p>Create a user-friendly online store with easy product browsing, secure payments, and a smooth checkout process. Our websites are designed to offer a seamless shopping experience, ensuring your customers can find, purchase, and enjoy your products with ease, all while being mobile-friendly and fast.</p>    
                </div>

            </div>

        </>


    )
}

export default Service
