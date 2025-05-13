import React from 'react'
import { Helmet } from 'react-helmet'
import Article10 from '../components/Article10.jsx'
import img1 from '../../public/sthe-digital-agency-logo-og.png'
import img2 from '../../public/sthe-digital-agency-logo-twitter.png'
import Footer from '../components/Footer.jsx'

function Article10Page() {
  return (
    <div>

      <Helmet>
        <title>How to Host Your First Website for Free or Cheap</title>
        <meta
          name="description"
          content="Learn how to host your first website for free or with a low budget. This guide covers GitHub Pages, Netlify, Vercel, Render, and cheap hosting options in South Africa like Truehost and Hostinger."
        />
        <meta
          name="keywords"
          content="free website hosting, cheap hosting South Africa, GitHub Pages, Netlify, Vercel, Render.com, web hosting Gqeberha, hosting Eastern Cape, Truehost, Hostinger, Namecheap, Sthe Digital Agency"
        />
        {/* Additional recommended tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.sthedigitalagency.co.za/how-to-host-your-first-website-for-free-or-cheap" />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="How to Host Your First Website for Free or Cheap"
        />
        <meta
          property="og:description"
          content="Explore free and cheap ways to host your first website using GitHub Pages, Netlify, Render.com, and more. Perfect for beginners and small business owners in South Africa."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sthedigitalagency.co.za/how-to-host-your-first-website-for-free-or-cheap" />
        <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="How to Host Your First Website for Free or Cheap"
        />
        <meta
          name="twitter:description"
          content="Beginner guide to free and cheap web hosting platforms like GitHub Pages, Netlify, Render, and Truehost."
        />
        <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img2}`} />

      </Helmet>

      <Article10 />
      <Footer />

    </div>
  )
}

export default Article10Page
