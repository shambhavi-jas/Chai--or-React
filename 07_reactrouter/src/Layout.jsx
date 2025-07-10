import React from 'react'
import Footer from './COMPONENTS/Footer/Footer'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout