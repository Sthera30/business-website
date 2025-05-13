import React from 'react'
import { Helmet } from 'react-helmet'
import img1 from '../../public/sthe-digital-agency-logo-og.png'
import img2 from '../../public/sthe-digital-agency-logo-twitter.png'
import Article12 from '../components/Article12.jsx'
import Footer from '../components/Footer.jsx'

function Article12Page() {
  return (
    <div>

      <Helmet>
        <title>Why Blogs Matter | Web Designer Gqeberha & Uitenhage</title>
        <meta
          name="description"
          content="Discover why blogging is essential for your website's success, especially if you're a business in Gqeberha, Uitenhage, or the Eastern Cape. Improve SEO, attract local clients, and build trust with expert blog strategies."
        />
        <meta
          name="keywords"
          content="web designer Gqeberha, custom web designer, Eastern Cape, Uitenhage, website blog SEO, blogging for business, Gqeberha website tips, local SEO blogging"
        />
        {/* Additional recommended tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.sthedigitalagency.co.za/why-blogs-are-important-gqeberha-uitenhage" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Why Blogs Matter | Web Designer Gqeberha & Uitenhage" />
        <meta
          property="og:description"
          content="Learn why having a blog on your website is crucial for boosting SEO, building trust, and attracting local clients in Gqeberha, Uitenhage, and the Eastern Cape."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sthedigitalagency.co.za/why-blogs-are-important-gqeberha-uitenhage" />
        <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Blogs Matter | Web Designer Gqeberha & Uitenhage" />
        <meta
          name="twitter:description"
          content="Blogging helps local businesses in Gqeberha and Uitenhage rank higher on Google and build trust. Find out why it matters."
        />
        <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img2}`} />

      </Helmet>

      <Article12 />
      <Footer />

    </div>
  )
}


export default Article12Page
