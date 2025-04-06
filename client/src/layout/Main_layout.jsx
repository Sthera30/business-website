import React from 'react'
import Navbar from '../components/Navbar.jsx'
import {Outlet} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'

function Main_layout() {
  return (
    <div>
      
      <Navbar />
      <Toaster containerStyle={{marginTop: '5rem', position: 'top-center'}} />
      <Outlet />
      <WhatsAppButton phoneNumber="0624192299" />
      <ScrollToTop />

    </div>
  )
}

export default Main_layout
