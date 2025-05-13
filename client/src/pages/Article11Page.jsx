import React from 'react'
import { Helmet } from 'react-helmet'
import Article11 from '../components/Article11.jsx'
import Footer from '../components/Footer.jsx'
import img1 from '../../public/sthe-digital-agency-logo-og.png'
import img2 from '../../public/sthe-digital-agency-logo-twitter.png'


function Article11Page() {
    return (
        <div>

            <Helmet>
                <title>How Long to Build a Website? | Gqeberha Web Designer</title>
                <meta
                    name="description"
                    content="Wondering how long it takes to build a website? Discover timelines for basic sites, e-commerce, and custom designs. Ideal for clients in Gqeberha, Uitenhage, and the Eastern Cape."
                />
                <meta
                    name="keywords"
                    content="web designer Gqeberha, custom web designer, Eastern Cape web design, Uitenhage websites, website timelines South Africa, how long to build a website, small business websites"
                />
                {/* Additional recommended tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/how-long-to-build-a-website" />

                {/* Open Graph tags */}
                <meta property="og:title" content="How Long to Build a Website? | Web Designer Gqeberha" />
                <meta property="og:description" content="Learn how long it takes to build different types of websites. From one-page designs to full e-commerce builds. A helpful guide for clients in Gqeberha, Uitenhage, and the Eastern Cape." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/how-long-to-build-a-website" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="How Long to Build a Website? | Web Designer Gqeberha" />
                <meta name="twitter:description" content="Explore how long it really takes to build a website. Helpful tips for Gqeberha, Uitenhage, and Eastern Cape clients from your local custom web designer." />
                <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img2}`} />

            </Helmet>

            <Article11 />
            <Footer />

        </div>
    )
}

export default Article11Page
