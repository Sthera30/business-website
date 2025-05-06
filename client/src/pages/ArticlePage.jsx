import React from 'react'
import Article from '../components/Article.jsx'
import { Helmet } from 'react-helmet'
import img1 from '../../public/small-business-website-importance-2025.jpg'
import Footer from '../components/Footer.jsx'

function ArticlePage() {
    return (
        <div>

            <Helmet>
                <title>The Importance of having a Website for Your Small Business in 2025</title>
                <meta name="description" content="In 2025, having a website is essential for small businesses. Learn how professional web design in Gqeberha and SEO services in South Africa can grow your business." />
                <meta name="keywords" content="web design Gqeberha, web design Uitenhage, SEO services Gqeberha, SEO services South Africa, custom websites Eastern Cape, small business website 2025, digital presence 2025, Sthe Digital Agency, online visibility" />

                {/* Recommended additional tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/the-importance-of-having-a-website-for-your-small-business-in-2025" />
                <meta name="author" content="Sthe Digital Agency" />

                {/* Open Graph */}
                <meta property="og:title" content="Why Your Small Business Needs a Website in 2025" />
                <meta property="og:description" content="Discover how web design in Uitenhage and SEO services in Gqeberha help small businesses grow in 2025. Build trust, boost visibility, and stay competitive." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/the-importance-of-having-a-website-for-your-small-business-in-2025" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />
                <meta property="og:site_name" content="Sthe Digital Agency" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Why Your Small Business Needs a Website in 2025" />
                <meta name="twitter:description" content="Find out why small businesses need a strong web presence in 2025. Featuring insights on SEO services in South Africa and custom websites in the Eastern Cape." />
                <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

            </Helmet>

            <Article />
            <Footer />

        </div>
    )
}

export default ArticlePage
