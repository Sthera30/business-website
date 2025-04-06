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
                <title>Business Website Insights | Sthe Digital Agency Web Development</title>
                <meta name="description" content="Discover why your small business needs a website in 2025 and learn about reliable South African web hosting options with WebWay. Expert insights from Sthe Digital Agency." />
                <meta name="keywords" content="small business website, South African web hosting, WebWay hosting, business websites 2025, Sthe Digital Agency, website importance" />

                {/* Additional recommended tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/blog" />

                {/* Open Graph tags */}
                <meta property="og:title" content="Business Website Insights | Sthe Digital Agency Web Development" />
                <meta property="og:description" content="Discover why your small business needs a website in 2025 and learn about reliable South African web hosting options with WebWay. Expert insights from Sthe Digital Agency." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/blog" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Business Website Insights | Sthe Digital Agency Web Development" />
                <meta name="twitter:description" content="Discover why your small business needs a website in 2025 and learn about reliable South African web hosting options with WebWay. Expert insights from Sthe Digital Agency." />
                <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img2}`} />

            </Helmet>

            < Blogs />
            <Footer />
        </div>
    )
}

export default BlogPage
