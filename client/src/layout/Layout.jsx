import React from 'react'
import Header from './Header'
import './layout.css'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout