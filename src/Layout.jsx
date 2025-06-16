import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import SidebarNav from './components/SideNavbar'

function Layout() {
  return (
    <>
      <SidebarNav />
      {/* <Header/> */}
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
