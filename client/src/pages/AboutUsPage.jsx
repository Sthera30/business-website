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

                <title>About Us | Sthe Digital Agency Web Development</title>
                <meta name="description" content="Learn about Sthe Digital Agency's team of expert full-stack developers dedicated to creating stunning, functional websites for businesses of all sizes." />
                <meta name="keywords" content="about Sthe Digital Agency, web development team, full-stack developers, professional web design" />

                {/* Additional recommended tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/about-sthe-digital-agency" />

                {/* Open Graph tags */}
                <meta property="og:title" content="About Us | Sthe Digital Agency Web Development" />
                <meta property="og:description" content="Learn about Sthe Digital Agency's team of expert full-stack developers dedicated to creating stunning, functional websites for businesses of all sizes." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/about-sthe-digital-agency" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Us | Sthe Digital Agency Web Development" />
                <meta name="twitter:description" content="Learn about Sthe Digital Agency's team of expert full-stack developers dedicated to creating stunning, functional websites for businesses of all sizes." />
                <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img2}`} />

            </Helmet>

            <About />
            <Footer />

        </>
    )
}

export default AboutUsPage
