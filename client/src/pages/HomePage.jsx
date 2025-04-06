import React from 'react'
import Hero from '../components/Hero.jsx'
import { Helmet } from 'react-helmet'
import AboutUs from '../components/AboutUs.jsx'
import Services from '../components/Services.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Project from '../components/Project.jsx'
import Burner from '../components/Burner.jsx'
import Footer from '../components/Footer.jsx'
import Blog from '../components/Blog.jsx'
import img1 from '../../public/sthe-digital-agency-logo-og.png'
import img2 from '../../public/sthe-digital-agency-logo-twitter.png'

function HomePage() {
    return (
        <div>

            <Helmet>

                <title>Sthe Digital Agency | Web Development Services</title>
                <meta name='description' content='Professional web development and design services by Sthe Digital Agency. We create custom, responsive websites tailored to your business needs.' />
                <meta name='keywords' content='web development, custom websites, React development, responsive design, Sthe Digital Agency' />

                {/* Recommended additional tags */}

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za" />

                {/* Open Graph tags */}
                <meta property="og:title" content="Sthe Digital Agency | Web Development Services" />
                <meta property="og:description" content="Professional web development and design services by Sthe Digital Agency. We create custom, responsive websites tailored to your business needs." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sthe Digital Agency | Web Development Services" />
                <meta name="twitter:description" content="Professional web development and design services by Sthe Digital Agency. We create custom, responsive websites tailored to your business needs." />
                <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img2}`} />

            </Helmet>


            <Hero />
            <AboutUs />
            <Services />
            <Testimonials />
            <Project />
            <Burner />
            <Blog />
            <Footer />


        </div>
    )
}

export default HomePage
