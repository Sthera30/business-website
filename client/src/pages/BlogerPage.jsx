import React from 'react'
import { Helmet } from 'react-helmet'
import img1 from '../../public/importance-of-seo-for-your-business.jpeg'
import Blogger from '../components/Blogger.jsx'
import Footer from '../components/Footer.jsx'

function BlogerPage() {
    return (
        <div>

            <Helmet>
                <title>Why SEO is Essential for Gqeberha Businesses in 2025</title>
                <meta name="description" content="SEO in Gqeberha & Uitenhage is a must in 2025. Get found on Google, attract local customers, and grow your business with proven SEO strategies." />
                <meta name="keywords" content="SEO Gqeberha, SEO Uitenhage, local SEO services, web design Gqeberha, Google ranking 2025, SEO for small business, digital marketing Gqeberha, online visibility, Sthe Digital Agency, get more customers" />

                {/* Recommended additional tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/why-seo-is-essential-for-every-business-in-2025" />
                <meta name="author" content="Sthe Digital Agency" />

                {/* Open Graph tags */}
                <meta property="og:title" content="Gqeberha's 2025 SEO Guide | Sthe Digital Agency" />
                <meta property="og:description" content="Is your Gqeberha business visible online? Our 2025 SEO guide shows how local companies get found on Google, attract more customers, and outrank competitors." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/why-seo-is-essential-for-every-business-in-2025" />
                <meta
                    property="og:image"
                    content={`https://www.sthedigitalagency.co.za/${img1}`}
                />
                <meta property="og:site_name" content="Sthe Digital Agency" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Why SEO is Essential for Gqeberha Businesses in 2025" />
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
