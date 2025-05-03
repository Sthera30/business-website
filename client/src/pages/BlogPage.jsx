import React from 'react'
import Blogs from '../components/Blogs.jsx'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer.jsx'
import img1 from '../../public/sthe-digital-agency-logo-og.png'
import img2 from '../../public/sthe-digital-agency-logo-twitter.png'


function BlogPage() {
    return (
        <div>

            <Helmet>
                <title>Web Design & SEO Tips | Gqeberha & Uitenhage | Sthe Digital Agency Blogs</title>
                <meta name="description" content="Read expert articles on web design in Gqeberha and Uitenhage, SEO services in South Africa, and custom website solutions across the Eastern Cape. Stay ahead with Sthe Digital Agency." />
                <meta name="keywords" content="web design Gqeberha, web design Uitenhage, SEO services Gqeberha, SEO services South Africa, custom websites Eastern Cape, digital marketing South Africa, Sthe Digital Agency blogs" />

                {/* Additional recommended tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/blog" />

                {/* Open Graph tags */}
                <meta property="og:title" content="Web Design & SEO Tips | Gqeberha & Uitenhage | Sthe Digital Agency Blogs" />
                <meta property="og:description" content="Explore web design tips for Gqeberha & Uitenhage, SEO services across South Africa, and custom websites in the Eastern Cape. Insights by Sthe Digital Agency." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/blog" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Web Design & SEO Tips | Gqeberha & Uitenhage | Sthe Digital Agency Blogs" />
                <meta name="twitter:description" content="Learn about SEO services in Gqeberha, web design trends in Uitenhage, and custom website solutions for the Eastern Cape from Sthe Digital Agency." />
                <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img2}`} />

            </Helmet>

            < Blogs />
            <Footer />
        </div>
    )
}

export default BlogPage
