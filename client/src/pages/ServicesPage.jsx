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

                <title>Web Design & SEO Services in Gqeberha, Uitenhage & South Africa | Sthe Digital Agency</title>
                <meta
                    name="description"
                    content="Sthe Digital Agency offers custom web design, e-commerce development, and SEO services in Gqeberha, Uitenhage, the Eastern Cape, and across South Africa. We build responsive, modern websites tailored to your business needs."
                />
                <meta
                    name="keywords"
                    content="web design Gqeberha, web design Uitenhage, SEO services Gqeberha, SEO services South Africa, e-commerce website South Africa, custom websites Eastern Cape, professional web development South Africa"
                />

                {/* Additional recommended tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/sthe-digital-agency-services" />

                {/* Open Graph tags */}
                <meta property="og:title" content="Web Design & SEO Services in Gqeberha, Uitenhage & South Africa | Sthe Digital Agency" />
                <meta property="og:description" content="Explore our full range of professional web development services, including custom website design, e-commerce solutions, and SEO services in South Africa." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/sthe-digital-agency-services" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Web Design & SEO Services in Gqeberha, Uitenhage & South Africa | Sthe Digital Agency" />
                <meta name="twitter:description" content="From business websites to custom e-commerce platforms, Sthe Digital Agency delivers web design and SEO services that drive results across South Africa." />
                <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img2}`} />

            </Helmet>

            <OurServices />
            <Footer />

        </div>
    )
}

export default ServicesPage
