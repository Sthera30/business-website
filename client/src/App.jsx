import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Main_layout from './layout/Main_layout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import ContactUsPage from './pages/ContactUsPage.jsx'

function App() {


    const router = createBrowserRouter(

        createRoutesFromElements(

            <Route path={"/"} element={<Main_layout />}>

            <Route index element={<HomePage />} />
            <Route path={"/about-sthe-digital-agency"} element={<AboutUsPage />} />
            <Route path={"/sthe-digital-agency-services"} element={<ServicesPage />} />
            <Route path={"/blog"} element={<BlogPage />} />
            <Route path={"/article/:slug"} element={<ArticlePage />} />
            <Route path={"/contact-sthe-digital-agency"} element={<ContactUsPage />} />

            </Route>

        )

    )


    return (
        <RouterProvider router={router} />
    )

}

export default App
