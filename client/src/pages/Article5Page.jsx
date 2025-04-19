import React from 'react'
import { Helmet } from 'react-helmet'
import img1 from '../../public/mobile-first-web-design-development-process.png'
import Article5 from '../components/Article5.jsx'
import Footer from '../components/Footer.jsx'

function Article5Page() {
    return (
        <div>

            <Helmet>
                <title>Mobile-First Web Design: Why It Matters More Than Ever in 2025 | Sthe Digital Agency</title>
                <meta
                    name="description"
                    content="In 2025, mobile-first design is no longer optional — it's essential. Learn why designing for smartphones first improves SEO, speed, and conversions."
                />
                <meta
                    name="keywords"
                    content="mobile-first web design, responsive design 2025, mobile website SEO, mobile friendly site, Sthe Digital Agency, modern web design, website conversion optimization"
                />

                {/* Recommended additional tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/what-is-mobile-first-web-design" />
                <meta name="author" content="Sthe Digital Agency" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Mobile-First Web Design: Why It Matters More Than Ever in 2025" />
                <meta
                    property="og:description"
                    content="Mobile-first design isn't a trend — it's a necessity. Discover how mobile-friendly websites rank higher, load faster, and convert better in 2025."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/what-is-mobile-first-web-design" />
                <meta
                    property="og:image"
                    content={`https://www.sthedigitalagency.co.za/${img1}`}
                />
                <meta property="og:site_name" content="Sthe Digital Agency" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Mobile-First Web Design in 2025: Why It’s a Must-Have" />
                <meta
                    name="twitter:description"
                    content="Over 70% of users browse from mobile devices. Learn how mobile-first web design helps your business grow in 2025 and beyond."
                />
                <meta
                    name="twitter:image"
                    content={`https://www.sthedigitalagency.co.za/${img1}`}
                />
            </Helmet>


            <Article5 />
            <Footer />

        </div>
    )
}

export default Article5Page
