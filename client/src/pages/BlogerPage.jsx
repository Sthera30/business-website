import React from 'react'
import { Helmet } from 'react-helmet'
import img1 from '../../public/importance-of-seo-for-your-business.jpeg'
import Blogger from '../components/Blogger.jsx'
import Footer from '../components/Footer.jsx'

function BlogerPage() {
    return (
        <div>

            <Helmet>
                <title>Why SEO is Essential for Every Business in 2025 | SEO Services in Gqeberha & South Africa</title>
                <meta
                    name="description"
                    content="SEO services in Gqeberha, Uitenhage, and South Africa are no longer optional in 2025. Discover how showing up on Google can grow your business, build trust, and drive targeted traffic."
                />

                <meta
                    name="keywords"
                    content="SEO services South Africa, SEO Gqeberha, SEO Uitenhage, web design South Africa, Google ranking 2025, SEO for business, digital marketing, online visibility, Sthe Digital Agency"
                />

                {/* Recommended additional tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/why-seo-is-essential-for-every-business-in-2025" />
                <meta name="author" content="Sthe Digital Agency" />

                {/* Open Graph tags */}
                <meta property="og:title" content="Why SEO is Essential for Every Business in 2025" />
                <meta
                    property="og:description"
                    content="In 2025, your website needs SEO to get found. Discover the impact of professional SEO services in Gqeberha and beyond for long-term business growth and visibility."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/why-seo-is-essential-for-every-business-in-2025" />
                <meta
                    property="og:image"
                    content={`https://www.sthedigitalagency.co.za/${img1}`}
                />
                <meta property="og:site_name" content="Sthe Digital Agency" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Why SEO is Essential for Every Business in 2025" />
                <meta
                    name="twitter:description"
                    content="Get found online in 2025. Discover why SEO in Gqeberha, Uitenhage, and South Africa matters more than ever."
                />
                <meta
                    name="twitter:image"
                    content={`https://www.sthedigitalagency.co.za/${img1}`}
                />

            </Helmet>

            <Blogger />
            <Footer />

        </div>
    )
}

export default BlogerPage
