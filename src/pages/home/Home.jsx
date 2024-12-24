 
import { TypeAnimation } from "react-type-animation"
import { homeHoverStyle } from "@/style"
import ScrollToTop from "react-scroll-to-top"

 
 const Home = () => {
   return (
  <>
     <section  id="home" className=" dark:bg-bgDark w-full flex flex-col md:flex-row  items-center justify-center space-y-7 md:gap-3 px-[20px] sm:px-[50px] bg-common py-[70px]  ">
<div data-aos="fade-right" className=" w-full md:w-[50%] flex  items-start justify-center flex-col gap-5  ">
    <span className="  font-bold text-xl text-hoverout dark:text-whiteColor"> Hello There... </span>
    <h1 className=" font-bold text-4xl sm:text-6xl text-hoverout dark:text-whiteColor ">Abdul Halim</h1>
    
    <TypeAnimation className="dark:text-whiteColor"
sequence={[
'I Am Passionate Developer',
1000,
'I Am Passionate Designer',
1000,
'I Am Passionate Freelancer',
1000,
]}
speed={50}
style={{ fontSize: '18px', fontWeight:'700',  }}
repeat={Infinity}
/>
    <p className=" text-para font-medium text-lg dark:text-textColor">The namics of how users interact with interactive elements within a user interface flow chart based on container proportion.</p>

    <div className=" flex items-start justify-center gap-2 sm:gap-4 ">
      <a className={homeHoverStyle} href="#portolio"> My Work</a>
      <a   className={homeHoverStyle} href="https://www.fiverr.com/abdulhalim_dev" target="_blank"> Hire Me</a>
    </div>

</div>

<div data-aos="fade-left" className=" w-full h-full md:w-[50%] flex  items-start justify-center   ">
  <img className=" w-full  h-full sm:object-cover object-contain " src="https://i.ibb.co.com/DzMgsKj/home-about.png" alt="" />
</div>


<ScrollToTop title="Back to Top" className="scrollbtn !bg-active dark:!bg-deactive dark:hover:!bg-active !text-common" smooth   />
  
</section>
 
</>
   )
 }
 
 export default Home




//  import React from 'react'
// import { FaChevronDown } from "react-icons/fa";

// const Animation = ({url}) => {
//   return (
//     <a title={"Go Down"} href={url} className=" z-20 absolute bottom-4 w-[30px] h-[30px] bg-active rounded-full flex items-center justify-center text-white  text-lg shadow animated  ">
//     <FaChevronDown/>
     
//     </a>
   
//   )
// }

 

 