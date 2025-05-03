
import React, { Suspense, lazy } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Main_layout from './layout/Main_layout.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const AboutUsPage = lazy(() => import('./pages/AboutUsPage.jsx'))
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'))
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'))
const ArticlePage = lazy(() => import('./pages/ArticlePage.jsx'))
const ArticlesPage = lazy(() => import('./pages/ArticlesPage.jsx'))
const BlogerPage = lazy(() => import('./pages/BlogerPage.jsx'))
const Article4Page = lazy(() => import('./pages/Article4Page.jsx'))
const Article5Page = lazy(() => import('./pages/Article5Page.jsx'))
const Article6Page = lazy(() => import('./pages/Article6Page.jsx'))
const Article7Page = lazy(() => import('./pages/Article7Page.jsx'))
const Article8Page = lazy(() => import('./pages/Article8Page.jsx'))
const Article9Page = lazy(() => import('./pages/Article9Page.jsx'))
const ContactUsPage = lazy(() => import('./pages/ContactUsPage.jsx'))


function App() {


    const router = createBrowserRouter(

        createRoutesFromElements(

            <Route path={"/"} element={<Main_layout />}>

                <Route
                    index
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <HomePage />
                        </Suspense>
                    }
                />
                <Route
                    path="/about-sthe-digital-agency"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <AboutUsPage />
                        </Suspense>
                    }
                />

                <Route
                    path="/sthe-digital-agency-services"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <ServicesPage />
                        </Suspense>
                    }
                />

                <Route
                    path="/blog"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <BlogPage />
                        </Suspense>
                    }
                />

                <Route
                    path="/the-importance-of-having-a-website-for-your-small-business-in-2025"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <ArticlePage />
                        </Suspense>
                    }
                />

                <Route
                    path="/why-i-trust-web-way-for-all-my-website-hosting-needs-in-south-africa"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <ArticlesPage />
                        </Suspense>
                    }
                />


                <Route
                path="/why-seo-is-essential-for-every-business-in-2025"
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <BlogerPage />
                    </Suspense>
                }
            />


            <Route
            path="/your-website-is-your-first-impression"
            element={
                <Suspense fallback={<div>Loading...</div>}>
                    <Article4Page />
                </Suspense>
            }
        />

                <Route
                    path="/what-is-mobile-first-web-design"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Article5Page />
                        </Suspense>
                    }
                />

                <Route
                    path="/what-to-expect-when-working-with-a-web-developer"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Article6Page />
                        </Suspense>
                    }
                />


                <Route
                    path="/why-every-business-needs-a-blog-to-stay-relevant-and-visible-online"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Article7Page />
                        </Suspense>
                    }
                />


                <Route
                    path="/what-makes-a-homepage-great"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Article8Page />
                        </Suspense>
                    }
                />


                <Route
                    path="/custom-vs-template-websites-which-is-right-for-growing-your-business-online"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Article9Page />
                        </Suspense>
                    }
                />


                <Route
                    path="/contact-sthe-digital-agency"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <ContactUsPage />
                        </Suspense>
                    }
                />


            </Route>

        )

    )


    return (
        <RouterProvider router={router} />
    )

}

export default App
