import React from 'react'
import { Helmet } from 'react-helmet'
import img1 from '../../public/importance-of-seo-for-your-business.jpeg'
import Blogger from '../components/Blogger.jsx'
import Footer from '../components/Footer.jsx'

function BlogerPage() {
    return (
        <div>

            <Helmet>
                <title>Why SEO is Essential for Every Business in 2025 | Sthe Digital Agency</title>
                <meta
                    name="description"
                    content="Learn why SEO is crucial in 2025 for business growth, brand visibility, and long-term success online. Make sure your customers can find you on Google!"
                />
                <meta
                    name="keywords"
                    content="SEO 2025, business SEO, digital marketing, search engine optimization, online visibility, Google ranking, website traffic, Sthe Digital Agency"
                />

                {/* Recommended additional tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/why-seo-is-essential-for-every-business-in-2025" />
                <meta name="author" content="Sthe Digital Agency" />

                {/* Open Graph tags */}
                <meta property="og:title" content="Why SEO is Essential for Every Business in 2025" />
                <meta
                    property="og:description"
                    content="SEO helps businesses stand out online in 2025. Discover why showing up on Google is a game-changer for brand visibility and growth."
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
                    content="Make your business stand out on Google. Learn why SEO in 2025 is more important than ever."
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
