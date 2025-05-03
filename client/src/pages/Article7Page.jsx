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
                <title>Why Every Business Needs a Blog | SEO Services & Web Design in Gqeberha | Sthe Digital Agency</title>
                <meta name="description" content="Discover why blogging is essential for businesses in Gqeberha, Uitenhage, and across South Africa. Improve SEO, support custom websites, and drive web design success with fresh content." 
 />
                <meta name="keywords" content="web design Gqeberha, web design Uitenhage, SEO services Gqeberha, SEO services South Africa, custom websites Eastern Cape, business blogging, content marketing South Africa, blog strategy for SEO, Sthe Digital Agency" />

                {/* Recommended additional tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/why-every-business-needs-a-blog-to-stay-relevant-and-visible-online" />
                <meta name="author" content="Sthe Digital Agency" />

                {/* Open Graph tags */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Why Every Business Needs a Blog | SEO & Web Design Gqeberha | Sthe Digital Agency" />
                <meta property="og:description" content="Blogging boosts visibility for web design in Uitenhage, Gqeberha, and across South Africa. Learn how blogs support SEO services and custom websites in the Eastern Cape." />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/why-every-business-needs-a-blog-to-stay-relevant-and-visible-online" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />
                <meta property="og:site_name" content="Sthe Digital Agency" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Why Every Business Needs a Blog | Gqeberha Web Design & SEO Services" />
                <meta name="twitter:description" content="Blogging keeps your site fresh and visible. Ideal for web design in Gqeberha, SEO in South Africa, and building trust with clients across the Eastern Cape." />
                <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

            </Helmet>

            <Article7 />
            <Footer />

        </div>
    )
}

export default Article7Page
