import Footer from '@/component/footer/Footer'
import Header from '@/component/header/Header'
import React from 'react'
import About from './about/About'
import Services from './services/Services'
import Resume from './resume/Resume'
import Mywork from '@/component/mywork/Mywork'
import Portfolio from './portfolio/Portfolio'
import Testimonial from './testimonial/Testimonial'
import Home from './home/Home'
import Contact from './contact/Contact'
 

const Layout = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Mywork/>
        <Portfolio/>
        <Testimonial/>
        <Contact/> 
        <Footer/>
    </div>
  )
}

export default Layout