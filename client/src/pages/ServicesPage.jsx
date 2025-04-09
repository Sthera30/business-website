import React from 'react'
import OurServices from '../components/OurServices.jsx'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer.jsx'
import img1 from '../../public/sthe-digital-agency-logo-og.png'
import img2 from '../../public/sthe-digital-agency-logo-twitter.png'


function ServicesPage() {
    return (
        <div>

            <Helmet>

                <title>Web Development Services | Sthe Digital Agency</title>
                <meta
                    name="description"
                    content="Stand out online with expert web design, e-commerce, and SEO from Sthe Digital Agency. Let's grow your digital footprint."
                />
                <meta
                    name="keywords"
                    content="web development services, custom website design, e-commerce development, SEO optimization, South Africa web developer"
                />

                {/* Additional recommended tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/sthe-digital-agency-services" />

                {/* Open Graph tags */}
                <meta property="og:title" content="Web Development Services | Sthe Digital Agency" />
                <meta property="og:description" content="Professional web development services including custom website design, e-commerce solutions, and SEO optimization. Transform your online presence with Sthe Digital Agency." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/sthe-digital-agency-services" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Web Development Services | Sthe Digital Agency" />
                <meta name="twitter:description" content="Professional web development services including custom website design, e-commerce solutions, and SEO optimization. Transform your online presence with Sthe Digital Agency." />
                <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img2}`} />

            </Helmet>

            <OurServices />
            <Footer />

        </div>
    )
}

export default ServicesPage
