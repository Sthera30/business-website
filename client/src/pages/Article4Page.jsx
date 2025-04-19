import React from 'react'
import { Helmet } from 'react-helmet'
import img1 from '../../public/modern-website-landing-page-design-reviews-optimization.jpg'
import Article4 from '../components/Article4.jsx'
import Footer from '../components/Footer.jsx'

function Article4Page() {
    return (
        <div>

            <Helmet>
                <title>Your Website is Your First Impression — Here’s How to Make It Count | Sthe Digital Agency</title>
                <meta
                    name="description"
                    content="Your website is often the first thing people see about your business. Here's how to make a strong first impression online and turn visitors into customers."
                />
                <meta
                    name="keywords"
                    content="first impression website, business website tips, modern website design, responsive web design, website user experience, CTAs, Sthe Digital Agency"
                />

                {/* Recommended additional tags */}

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/your-website-is-your-first-impression" />
                <meta name="author" content="Sthe Digital Agency" />

                {/* Open Graph tags */}
                <meta property="og:title" content="Your Website is Your First Impression — Here’s How to Make It Count" />
                <meta
                    property="og:description"
                    content="Learn why your website is your business's 24/7 salesperson and how to make that first impression count."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/your-website-is-your-first-impression" />
                <meta
                    property="og:image"
                    content={`https://www.sthedigitalagency.co.za/${img1}`}
                />
                <meta property="og:site_name" content="Sthe Digital Agency" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Your Website is Your First Impression — Make It Count" />
                <meta
                    name="twitter:description"
                    content="Your website makes or breaks your business's first impression. Here’s how to get it right in 2025."
                />
                <meta
                    name="twitter:image"
                    content={`https://www.sthedigitalagency.co.za/${img1}`}
                />
            </Helmet>

            <Article4 />
            <Footer />

        </div>
    )
}

export default Article4Page
