import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import ReactGA from 'react-ga4'
import Main_layout from './layout/Main_layout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import ContactUsPage from './pages/ContactUsPage.jsx'
import ArticlesPage from './pages/ArticlesPage.jsx'
import BlogerPage from './pages/BlogerPage.jsx'
import Article4Page from './pages/Article4Page.jsx'
import Article5Page from './pages/Article5Page.jsx'
import Article6Page from './pages/Article6Page.jsx'
import Article7Page from './pages/Article7Page.jsx'
import Article8Page from './pages/Article8Page.jsx'
import Article9Page from './pages/Article9Page.jsx'
import Article10Page from './pages/Article10Page.jsx'
import Article11Page from './pages/Article11Page.jsx'
import Article12Page from './pages/Article12Page.jsx'


// Initialize Google Analytics with your Measurement ID

ReactGA.initialize('G-FDCCVZ95KE')


function App() {


    const router = createBrowserRouter(

        createRoutesFromElements(

            <Route path={"/"} element={<Main_layout />}>

                <Route index element={<HomePage />} />
                <Route path={"/about-sthe-digital-agency"} element={<AboutUsPage />} />
                <Route path={"/sthe-digital-agency-services"} element={<ServicesPage />} />
                <Route path={"/blog"} element={<BlogPage />} />
                <Route path={"/the-importance-of-having-a-website-for-your-small-business-in-2025"} element={<ArticlePage />} />
                <Route path={"/why-i-trust-web-way-for-all-my-website-hosting-needs-in-south-africa"} element={<ArticlesPage />} />
                <Route path={"/why-seo-is-essential-for-every-business-in-2025"} element={<BlogerPage />} />
                <Route path={"/your-website-is-your-first-impression"} element={<Article4Page />} />
                <Route path={"/what-is-mobile-first-web-design"} element={<Article5Page />} />
                <Route path={"/what-to-expect-when-working-with-a-web-developer"} element={<Article6Page />} />
                <Route path={"/will-web-development-be-replaced-by-ai"} element={<Article7Page />} />
                <Route path={"/what-makes-a-homepage-great"} element={<Article8Page />} />
                <Route path="/custom-vs-template-websites-which-is-right-for-growing-your-business-online" element={<Article9Page />} />
                <Route path="/how-to-host-your-first-website-for-free-or-cheap" element={<Article10Page />} />
                <Route path="/how-long-to-build-a-website" element={<Article11Page />} />
                <Route path="/why-blogs-are-important-gqeberha-uitenhage" element={<Article12Page />} />
                <Route path={"/contact-sthe-digital-agency"} element={<ContactUsPage />} />


            </Route>

        )

    )

    // Set up navigation tracking
    router.subscribe((state) => {
        const location = state.location;
        if (location) {
            ReactGA.send({ hitType: "pageview", page: location.pathname });
        }
    });

    return (
        <RouterProvider router={router} />
    )

}

export default App
