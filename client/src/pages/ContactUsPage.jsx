import React from 'react'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import { Helmet } from 'react-helmet'
import img1 from '../../public/sthe-digital-agency-logo-og.png'
import img2 from '../../public/sthe-digital-agency-logo-twitter.png'



function ContactUsPage() {
  return (
    <div>

      <Helmet>
        <title>Contact Us | Web Design in Gqeberha & Uitenhage | Sthe Digital Agency</title>
        <meta
          name="description"
          content="Contact Sthe Digital Agency for expert web design in Gqeberha and Uitenhage, SEO services across South Africa, and custom websites in the Eastern Cape. Let's bring your website vision to life."
        />
        <meta
          name="keywords"
          content="web design Gqeberha, web design Uitenhage, SEO services Gqeberha, SEO services South Africa, custom websites Eastern Cape, contact web developers, website consultation South Africa"
        />

        {/* Additional recommended tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.sthedigitalagency.co.za/contact-sthe-digital-agency" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Contact Us | Web Design Gqeberha & SEO Services South Africa" />
        <meta property="og:description" content="Reach out to Sthe Digital Agency for web design in Gqeberha and Uitenhage, SEO services in South Africa, and custom web solutions in the Eastern Cape." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sthedigitalagency.co.za/contact-sthe-digital-agency" />
        <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Sthe Digital Agency | Web Design & SEO Services" />
        <meta name="twitter:description" content="Let's talk web design, SEO, and custom websites for your business in Gqeberha, Uitenhage, and across South Africa. Contact Sthe Digital Agency today." />
        <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img2}`} />
      </Helmet>

      <Contact />
      <Footer />

    </div>
  )
}

export default ContactUsPage
