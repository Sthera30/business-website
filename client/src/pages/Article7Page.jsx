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
                <title>Why Every Business Needs a Blog to Stay Relevant and Visible Online | Sthe Digital Agency</title>
                <meta name="description" content="Learn why blogging is key to business success. Boost SEO, build trust, drive traffic, and turn visitors into loyal customers with a smart blog strategy" />
                <meta name="keywords" content="business blogging, SEO blogging, content marketing, blog strategy, build brand authority, customer engagement, blogging tips, website traffic, blogging for business, Sthe Digital Agency" />

                {/* Recommended additional tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/why-every-business-needs-a-blog-to-stay-relevant-and-visible-online" />
                <meta name="author" content="Sthe Digital Agency" />

                {/* Open Graph tags */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Why Every Business Needs a Blog to Stay Relevant and Visible Online | Sthe Digital Agency" />
                <meta property="og:description" content="Discover how blogging keeps your business visible, trusted, and growing online. Drive organic traffic, connect with your audience, and stay ahead in 2025 with a strong blog strategy." />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/why-every-business-needs-a-blog-to-stay-relevant-and-visible-online" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />
                <meta property="og:site_name" content="Sthe Digital Agency" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Why Every Business Needs a Blog to Stay Relevant and Visible Online | Sthe Digital Agency" />
                <meta name="twitter:description" content="Learn how blogging drives SEO, builds brand authority, and grows your business in a competitive online world. Start leveraging the power of blogging today!" />
                <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

            </Helmet>

            <Article7 />
            <Footer />

        </div>
    )
}

export default Article7Page
