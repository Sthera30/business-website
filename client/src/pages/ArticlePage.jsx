import React from 'react'
import Article from '../components/Article.jsx'
import { Helmet } from 'react-helmet'
import img1 from '../../public/small-business-website-importance-2025.jpg'
import Footer from '../components/Footer.jsx'

function ArticlePage() {
    return (
        <div>

            <Helmet>
                <title>The Importance of having a Website for Your Small Business in 2025 | Sthe Digital Agency</title>
                <meta name="description" content="In 2025, a business website is no longer optional. Learn why your small business must have a digital presence to stay competitive." />
                <meta name="keywords" content="small business website 2025, why you need a website, digital presence 2025, Sthe Digital Agency, online visibility" />

                <link rel="canonical" href="https://www.sthedigitalagency.co.za/the-importance-of-having-a-website-for-your-small-business-in-2025" />

                {/* Open Graph */}
                <meta property="og:title" content="Why Your Small Business Needs a Website in 2025" />
                <meta property="og:description" content="A complete guide on why a website is essential for your business in 2025 — and how it boosts credibility and growth." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/the-importance-of-having-a-website-for-your-small-business-in-2025" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Why Your Small Business Needs a Website in 2025" />
                <meta name="twitter:description" content="In-depth article on the benefits of having a professional website for your small business in 2025." />
                <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />
            </Helmet>

            <Article />
            <Footer />

        </div>
    )
}

export default ArticlePage
