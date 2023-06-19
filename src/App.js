import React from 'react'
import Logo from './components/Logo/logo'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import  About  from './components/about/about'
import CurrentJob from './components/currentjob/currentjob'
import Experience from  './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <CurrentJob/>
    <Experience/>
    <Portfolio/>
    <Contact/>
   <Footer/>
    </>
  )
}

export default App