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

                <title>About Sthe Digital Agency | Web Design & SEO Services in Gqeberha & South Africa</title>
                <meta name="description" content="Sthe Digital Agency offers web design services in Gqeberha, Uitenhage, and South Africa. Learn more about our SEO services and how we help small businesses grow online." />
                <meta name="keywords" content="web design Gqeberha, web design Uitenhage, web design South Africa, SEO services Gqeberha, SEO services South Africa, Sthe Digital Agency, about Sthe Digital Agency" />

                {/* Additional recommended tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/about-sthe-digital-agency" />

                {/* Open Graph tags */}
                <meta property="og:title" content="About Sthe Digital Agency | Web Design & SEO in Gqeberha & South Africa" />
                <meta property="og:description" content="Learn more about Sthe Digital Agency, your partner in web design and SEO services across Gqeberha, Uitenhage, and South Africa." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/about-sthe-digital-agency" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Sthe Digital Agency | Web Design & SEO in Gqeberha & South Africa" />
                <meta name="twitter:description" content="Discover Sthe Digital Agency and our mission to provide top-tier web design and SEO services in Gqeberha, Uitenhage, and across South Africa." />
                <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img2}`} />

            </Helmet>

            <About />
            <Footer />

        </>
    )
}

export default AboutUsPage
