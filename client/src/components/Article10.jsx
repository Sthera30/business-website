import React from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaArrowDown, FaMailBulk } from 'react-icons/fa'
import { Globe } from 'lucide-react'
import { Calendar } from 'lucide-react'
import img1 from '../../public/launching-your-first-website-illustration.png'


function Article10() {
  return (
    <>

      <div className='article-burner' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-6rem', height: '40rem' }}>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: '.8', delay: '.7' }} className='article-burner-inner'>

          <h1 style={{ fontSize: '3.5rem', maxWidth: '45rem', textAlign: 'center', display: 'flex', alignItems: 'center' }}>How to Host Your First Website for Free or Cheap</h1>

        </motion.div>

      </div>


      <div className='article-container'>

        <div className='article-content'>

          <img src={img1} alt="Illustration of a website launching from a computer screen with a rocket, symbolizing going live online" title="Launching Your First Website Online – Step-by-Step Hosting Guide" loading='lazy' width={667} height={489} />
          <div className='article-content-desc'>

            <h2>How to Host Your First Website for Free or Cheap</h2>

            <p>So you’ve built your very first website, maybe a personal portfolio, a small business site, or a side project. Now you’re probably wondering, <b>How do I put my website online without spending too much?</b> The good news is, You can host your website for free or with a very low budget, even if you’re a total beginner.</p>
            <p>In this step-by-step guide, i will show you how to host a website for free, explore cheap website hosting options, and give you the best tools to make your website live today.</p>

          </div>


          <div
            className='table-contents'
          >
            <h2 style={{ fontWeight: 300, fontSize: '2rem' }}>Table of Contents</h2>

            <div className='table-of-contents'>

              <ul>

                <li><a href="#free-web-hosting-platforms-for-beginners">Free Web Hosting Platforms for Beginners</a></li>
                <li><a href="#cheap-website-hosting-for-more-control">Cheap Website Hosting for More Control</a></li>
                <li><a href="#get-a-custom-domain-name">Get a Custom Domain Name</a></li>
                <li><a href="#final-thoughts">Final Thoughts</a></li>

              </ul>

            </div>

            <div
            />

          </div>

          <h2 id="free-web-hosting-platforms-for-beginners" style={{ fontWeight: 300 }}>1. Free Web Hosting Platforms for Beginners</h2>
          <p>If you just want to get your site live quickly and don’t need fancy features, these free web hosting platforms are perfect for your first website.</p>

          <p><b>GitHub Pages (Great for static websites)</b></p>

          <ul className='un'>

            <li>Ideal for beginner developers and portfolios</li>
            <li>Free hosting for personal projects using HTML, CSS, or JavaScript</li>
            <li>You will get a free URL like yourname.github.io</li>

          </ul>

          <p>Why it’s great? It's because its reliable and beginner friendly. If you're learning to code or building your first site, GitHub Pages for beginners is a solid start.</p>

          <p><b>Netlify (User-friendly & powerful)</b></p>

          <ul className='un'>

            <li>Free website hosting with custom domain support</li>
            <li>Drag and drop your site or connect your GitHub repo</li>
            <li>Includes free HTTPS and forms support</li>

          </ul>

          <p>This one is perfect if you are looking for a simple hosting options for non tech people</p>


          <p><b>Vercel (Ideal for JavaScript projects)</b></p>

          <ul className='un'>

            <li>Free hosting for static and dynamic sites built with Next.js, React, or plain HTML</li>
            <li>GitHub integration makes it easy to update your site</li>
            <li>Very fast deployments</li>

          </ul>

          <p>Both Vercel and Netlify are excellent choices</p>



          <p><b>Render.com (Great for fullstack projects)</b></p>

          <ul className='un'>

            <li>Free plan supports static sites, Node.js, Python, and full backend projects</li>
            <li>Auto deploys from GitHub</li>
            <li>Supports web services, and even databases</li>

          </ul>

          <p>If you are building a fullstack app, <b>Render.com is a strong choice</b></p>



          <h3 id='cheap-website-hosting-for-more-control' style={{ fontWeight: 300, marginTop: '4rem' }}>2. Cheap Website Hosting for More Control</h3>
          <p>If you' are using WordPress or any programming language and just want reliable, affordable hosting for your website, with custom domains, email, or backend support, here are some cheap web hosting platforms to consider. These are perfect for small businesses or beginner developers in Africa.</p>

          <p><b>Truehost (Great for African users)</b></p>

          <ul className='un'>

            <li>Starting from R33/month</li>
            <li>Local support and payment options</li>
            <li>Offers website builders, email hosting, and domain registration</li>

          </ul>

          <p>Excellent for African users who want affordable hosting</p>


          <p><b>Hostinger / Namecheap</b></p>

          <ul className='un'>

            <li>Starting from R40–R50/month</li>
            <li>Supports custom domains, static/dynamic websites, and backend integration</li>
            <li>Works well with any stack,  HTML, Node.js, or even WordPress</li>

          </ul>

          <p>A solid, global option for developers or business owners.</p>


          <h3 id='get-a-custom-domain-name' style={{ fontWeight: 300, marginTop: '4rem' }}>3. Get a Custom Domain Name</h3>
          <p>A free website hosting plan usually gives you a URL like yourproject.netlify.app,  but for professionalism, get a custom domain like: www.yourbusinessname.co.za</p>

          <p>You can register domains at:</p>
          <ul className='un'>

            <li>
              <p><a href="https://www.namecheap.com/" target='_blank' rel="noopener noreferrer">Namecheap</a></p>
            </li>
            <li>
              <p><a href="https://truehost.co.za/?gad_source=1&gad_campaignid=9861628762&gbraid=0AAAAADigKM9rZwlLaVHvtljHbkCwwizNT&gclid=CjwKCAjwuIbBBhBvEiwAsNypvQilDTs7CxTKRTVZLkb1HljrEXrXxZl9H7CQy19x2mlsMf7G8U7lzRoCRM0QAvD_BwE" target='_blank' rel="noopener noreferrer">Truehost</a></p>

            </li>

          </ul>

          <p>A domain usually costs R100–R200/year, which is great for a cheap web hosting setup with a custom domain.</p>

          <h3 style={{fontWeight: '300'}}>What’s the Best Hosting for You?</h3>

          <p>Your goal: </p>

          <ul className='un'>

            <li>Just learning to code? → Go with GitHub Pages - it’s free and super beginner-friendly</li>
            <li>Building a quick personal site? → Try Netlify or Vercel for fast, modern deployment</li>
            <li>Need WordPress or full control? → Use Truehost, Hostinger, or Namecheap</li>
            <li>Creating a small business website? → Choose cheap hosting + a custom domain for a professional setup</li>

          </ul>

          <h2 id='final-thoughts' style={{ fontWeight: 300, marginTop: '4rem' }}>Final Thoughts</h2>
          <p>Whether you're a beginner programmer building your first project or a small business owner asking <b>how do I make my website live?</b>,  hosting your first website doesn’t have to be expensive or overwhelming. Start simple, choose the right platform, and focus on getting your site online.</p>

          <div className='foo'>

            <p><a href="https://www.sthedigitalagency.co.za/" target="_blank" rel="noopener noreferrer"><Globe style={{ color: 'blue' }} />&nbsp;Visit Sthe Digital Agency</a> </p>
            <p style={{ marginTop: '-1rem' }}><a href="mailto:support@sthedigitalagency.co.za"><FaMailBulk />&nbsp;support@sthedigitalagency.co.za</a></p>

          </div>

          <div className='article-inner-content'>

            <p><FaUser />&nbsp;Sthe Digital Agency</p>
            <p><Calendar />&nbsp;
              Tue 13 May, 2025
            </p>

          </div>

        </div>

      </div>

    </>
  )
}

export default Article10
