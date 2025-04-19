import React from 'react'
import Articles from '../components/Articles.jsx'
import { Helmet } from 'react-helmet'
import img1 from '../../public/webway-south-africa-hosting-client-portal.jpg'
import Footer from '../components/Footer.jsx'

function ArticlesPage() {
    return (
        <div>

            <Helmet>
                <title>Why I Trust WebWay for Hosting in South Africa | Sthe Digital Agency</title>
                <meta name="description" content="Explore why WebWay is the top choice for website hosting in South Africa. Learn from experience with reliable uptime and support for small businesses." />
                <meta name="keywords" content="WebWay hosting South Africa, reliable hosting 2025, website hosting for business, Sthe Digital Agency reviews" />


                {/* Recommended additional tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/why-i-trust-web-way-for-all-my-website-hosting-needs-in-south-africa" />
                <meta name="author" content="Sthe Digital Agency" />

                {/* Social sharing */}
                <meta property="og:title" content="Why I Trust WebWay for Hosting in South Africa" />
                <meta property="og:description" content="Discover why WebWay is my go-to hosting provider for South African business websites." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/why-i-trust-web-way-for-all-my-website-hosting-needs-in-south-africa" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />
                <meta property="og:site_name" content="Sthe Digital Agency" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Why I Trust WebWay for Hosting in South Africa" />
                <meta name="twitter:description" content="Discover why WebWay is my go-to hosting provider for South African business websites." />
                <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

            </Helmet>

            <Articles />
            <Footer />

        </div>
    )
}

export default ArticlesPage
