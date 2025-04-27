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
                <title>What Makes a Homepage Great? Key Elements You Should Never Ignore | Sthe Digital Agency</title>
                <meta name="description" content="A well-crafted homepage is essential for your business's online presence. Learn the key elements you should never ignore when designing a homepage for maximum impact." />
                <meta name="keywords" content="homepage design, business website homepage, key elements of homepage, homepage optimization, web design tips, website layout, homepage branding, Sthe Digital Agency, website design for business, homepage best practices" />

                {/* Recommended additional tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.sthedigitalagency.co.za/what-makes-a-homepage-great?" />
                <meta name="author" content="Sthe Digital Agency" />

                {/* Open Graph tags */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content="What Makes a Homepage Great? Key Elements You Should Never Ignore | Sthe Digital Agency" />
                <meta property="og:description" content="Create a great homepage with these essential elements. From clear branding and intuitive navigation to mobile optimization and fast loading speed, learn the strategies that will elevate your business’s online presence." />
                <meta property="og:url" content="https://www.sthedigitalagency.co.za/what-makes-a-homepage-great?" />
                <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />
                <meta property="og:site_name" content="Sthe Digital Agency" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="What Makes a Homepage Great? Key Elements You Should Never Ignore | Sthe Digital Agency" />
                <meta name="twitter:description" content="Discover the key elements that make a homepage great. Learn how to design a homepage that converts visitors into customers and drives results for your business." />
                <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

            </Helmet>

            <Article8 />
            <Footer />

        </div>
    )
}

export default Article8Page
