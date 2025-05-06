import React from 'react'
import { Helmet } from 'react-helmet'
import img1 from '../../public/professional-homepage-layout.png'
import Article8 from '../components/Article8.jsx'
import Footer from '../components/Footer.jsx'

function Article8Page() {
    return (
        <div>

            <Helmet>

                {/* Primary Meta Tags */}
                <title>Homepage Design Best Practices | Web Design Gqeberha & SEO Services</title>
                <meta
                    name="description"
                    content="Discover what makes a homepage great with Sthe Digital Agency. We offer web design in Gqeberha & Uitenhage, SEO services across South Africa, and custom websites in Eastern Cape."
                />
                <meta name="keywords" content="web design Gqeberha, web design Uitenhage, SEO services Gqeberha, SEO services South Africa, custom websites Eastern Cape, homepage design tips, website layout best practices, effective homepage design, Sthe Digital Agency" />

                {/* Recommended additional tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/what-makes-a-homepage-great?" />
                <meta name="author" content="Sthe Digital Agency" />

                {/* Open Graph tags */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Homepage Design Tips | Web Design Gqeberha & SEO South Africa" />
                <meta property="og:description" content="Learn homepage design best practices from a trusted web design and SEO agency based in Gqeberha. Serving South Africa with custom websites and digital growth strategies." />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/what-makes-a-homepage-great?" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />
                <meta property="og:site_name" content="Sthe Digital Agency" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Web Design Gqeberha & SEO Services South Africa | Homepage Design Guide" />
                <meta name="twitter:description" content="Need a high-performing homepage? Discover the key elements of homepage design and explore SEO and web design services in Gqeberha, Uitenhage, and across South Africa." />
                <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

            </Helmet>

            <Article8 />
            <Footer />

        </div>
    )
}

export default Article8Page
