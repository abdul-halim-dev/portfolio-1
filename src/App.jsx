  
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Home from "./pages/home/Home"
import Portfolio from "./pages/portfolio/Portfolio"
import Resume from "./pages/resume/Resume"
import Services from "./pages/services/Services"
import Testimonial from "./pages/testimonial/Testimonial"
import './App.css' 
import Header from "./component/header/Header"
import Footer from "./component/footer/Footer"
import Mywork from "./component/mywork/Mywork"


const App = () => {
  return (
    <section>

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


      
    </section>
  )
}

export default App