import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
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
                <Route path={"/contact-sthe-digital-agency"} element={<ContactUsPage />} />

            </Route>

        )

    )


    return (
        <RouterProvider router={router} />
    )

}

export default App
