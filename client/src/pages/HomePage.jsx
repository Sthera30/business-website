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

                <title>Gqeberha SEO & Web Design | Sthe Digital Agency</title>
                <meta name='description' content='Sthe Digital Agency offers expert SEO and web design services in Gqeberha, Uitenhage, and nearby areas. Boost your local online presence today.' />
                <meta name='keywords' content='web design Gqeberha, SEO Gqeberha, web design Uitenhage, SEO Uitenhage, web design South Africa, SEO South Africa, responsive websites, Sthe Digital Agency, small business websites' />

                {/* Recommended additional tags */}

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za" />

                {/* Open Graph tags */}
                <meta property="og:title" content="Gqeberha SEO & Web Design | Sthe Digital Agency" />
                <meta property="og:description" content="Sthe Digital Agency provides SEO & web design in Gqeberha and Uitenhage. Custom websites that drive results." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Gqeberha SEO & Web Design | Sthe Digital Agency" />
                <meta name="twitter:description" content="Sthe Digital Agency offers SEO & web design in Gqeberha and Uitenhage. Custom websites that grow your business." />
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
