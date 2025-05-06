import React from 'react'
import { Helmet } from 'react-helmet'
import img1 from '../../public/business-blogging-content-creation.jpeg'
import Article7 from '../components/Article7.jsx'
import Footer from '../components/Footer.jsx'

function Article7Page() {
    return (
        <div>

            <Helmet>

                {/* Primary Meta Tags */}
                <title>Will AI Replace Web Development? The Reality in 2025</title>
                <meta name="description" content="Discover the real impact of AI on web development in 2025. Learn what AI can actually do, where it falls short, and how developers are adapting to thrive in this new landscape." />                
                <meta name="keywords" content="AI web development, future of web development, web developers and AI, web design AI tools, AI website builders, web development industry, AI collaboration, custom web development, web development 2025" />

                {/* Recommended additional tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/will-web-development-be-replaced-by-ai" />
                <meta name="author" content="Sthe Digital Agency" />

                {/* Open Graph tags */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Will AI Replace Web Developers? Here's What's Really Happening in 2025" />
                <meta property="og:description" content="AI is changing web development, but not replacing humans. Explore how AI tools are transforming the industry, what they can and can't do, and how developers can thrive by embracing this technology." />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/will-web-development-be-replaced-by-ai" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />
                <meta property="og:site_name" content="Sthe Digital Agency" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="The Truth About AI and Web Development in 2025" />
                <meta name="twitter:description" content="AI is transforming web development but not replacing developers. Learn how the industry is evolving and how developers are using AI to create better websites faster." />
                <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

            </Helmet>

            <Article7 />
            <Footer />

        </div>
    )
}

export default Article7Page
