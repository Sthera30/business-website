import React from 'react'
import About from '../components/About.jsx'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer.jsx'
import img1 from '../../public/sthe-digital-agency-logo-og.png'
import img2 from '../../public/sthe-digital-agency-logo-twitter.png'

function AboutUsPage() {
    return (
        <>

            <Helmet>

                <title>About Sthe Digital Agency | SEO & Web Design Gqeberha</title>
                <meta name="description" content="Sthe Digital Agency offers web design and SEO services in Gqeberha, Uitenhage, and beyond. Helping small businesses grow online." />
                <meta name="keywords" content="web design Gqeberha, web design Uitenhage, web design South Africa, SEO services Gqeberha, SEO services South Africa, Sthe Digital Agency, about Sthe Digital Agency" />

                {/* Additional recommended tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/about-sthe-digital-agency" />

                {/* Open Graph tags */}
                <meta property="og:title" content="About Sthe Digital Agency | SEO & Web Design Gqeberha" />
                <meta property="og:description" content="Learn how Sthe Digital Agency helps small businesses in Gqeberha & Uitenhage with SEO and web design." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/about-sthe-digital-agency" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sthe Digital Agency | Web Design & SEO in Gqeberha" />
                <meta name="twitter:description" content="Sthe Digital Agency delivers top web design & SEO services in Gqeberha & Uitenhage, helping businesses rank higher in local searches." />                  <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img2}`} />

            </Helmet>

            <About />
            <Footer />

        </>
    )
}

export default AboutUsPage
