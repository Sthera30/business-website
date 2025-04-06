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
        <title>Contact Sthe Digital Agency | Web Development Services in South Africa</title>
        <meta
          name="description"
          content="Get in touch with Sthe Digital Agency for professional web development services. Reach out for a consultation, quote, or to discuss your website project today."
        />
        <meta
          name="keywords"
          content="contact web developers, web design consultation, website quote, Sthe Digital Agency contact, South African web development"
        />

        {/* Additional recommended tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.sthedigitalagency.co.za/contact-sthe-digital-agency" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Contact Sthe Digital Agency | Web Development Services" />
        <meta property="og:description" content="Get in touch with Sthe Digital Agency for professional web development services. Reach out for a consultation, quote, or to discuss your website project today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sthedigitalagency.co.za/contact-sthe-digital-agency" />
        <meta property="og:image" content={`https://www.sthedigitalagency.co.za/${img1}`} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Sthe Digital Agency | Web Development Services" />
        <meta name="twitter:description" content="Get in touch with Sthe Digital Agency for professional web development services. Reach out for a consultation, quote, or to discuss your website project today." />
        <meta name="twitter:image" content={`https://www.sthedigitalagency.co.za/${img2}`} />
      </Helmet>

      <Contact />
      <Footer />

    </div>
  )
}

export default ContactUsPage
