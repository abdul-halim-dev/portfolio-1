 
import { TypeAnimation } from "react-type-animation"
import { homeHoverStyle } from "@/style"
 
 
 const Home = () => {
   return (
     <section id="home" className=" w-full flex flex-col md:flex-row  items-center justify-center space-y-7 md:gap-3 px-[20px] sm:px-[50px] bg-common py-[70px]  ">

        <div className=" w-full md:w-[50%] flex  items-start justify-center flex-col gap-5  ">

            <span className=" font-bold text-xl text-hoverout"> Hello There... </span>
            <h1 className=" font-bold text-4xl sm:text-6xl text-hoverout ">Tony Smith</h1>
            


            <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'I Am Passionate Developer',
    1000,
    'I Am Passionate Designer',
    1000,
    'I Am Passionate Freelancer',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '22px', fontWeight:'700'  }}
  repeat={Infinity}
/>


            <p className=" text-para font-medium text-lg">The namics of how users interact with interactive elements within a user interface flow chart based on container proportion.</p>

            <div className=" flex items-start justify-center gap-2 sm:gap-4 ">
              <a className={homeHoverStyle} href="#portolio"> My Work</a>
              <a   className={homeHoverStyle} href="https://www.fiverr.com/abdulhalim_dev" target="_blank"> Hire Me</a>
            </div>

        </div>

        <div className=" w-full h-full md:w-[50%] flex  items-start justify-center   ">
          <img className=" w-full  h-full sm:object-cover object-contain " src="https://i.ibb.co.com/DzMgsKj/home-about.png" alt="" />
        </div>
     </section>
   )
 }
 
 export default Home