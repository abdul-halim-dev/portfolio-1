import { FaFacebookF } from "react-icons/fa";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import { aboutIconStyle, aboutIconContainer, homeHoverStyle, aboutSectionStyle, aboutWrapperStyle } from "@/style";

 
const About = () => {
  return (
    <section id="about" className={aboutSectionStyle}>

    <div className=" w-full md:w-[45%] flex items-start justify-center flex-col gap-8 ">

    <div className="space-y-4 ">
      <h1 className=" font-bold text-4xl text-hoverout uppercase " > About Me</h1>
      <p className=" text-lg font-medium text-para uppercase ">A Lead UX & UI designer based in Canada</p>
    </div>
    <div className=" w-full border-[16px] border-common rounded-md relative ">
      <img className=" w-full object-contain " src="https://i.ibb.co.com/4ZpYwyz/about-us.jpg" alt="" />
      <div className={aboutIconContainer}>
        <a className={aboutIconStyle} target="_blank" href="https://www.facebook.com/profile.php?id=100068708954125" ><FaFacebookF/> </a>
        <a className={aboutIconStyle} href="#"><FaTwitter/> </a>
        <a className={aboutIconStyle} href="#"><FaInstagram/> </a>
        <a className={aboutIconStyle} href="#"><FaLinkedinIn/> </a>
   
      </div>

    </div>

    </div>

    <div className={aboutWrapperStyle}>

      <div className="flex flex-col gap-4 items-start justify-center">
        <h1 className=" text-hoverout font-bold text-2xl sm:text-3xl "> I'M Tony Smith</h1>
        <h6 className=" text-hoverout text-xl font-semibold "> A Lead <span className="text-active">UX & UI</span> designer based in <span className="text-active">Canada</span> </h6>
        <p className=" text-para text-lg ">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio</p>
      </div>

      <div className="  w-full flex sm:flex-row flex-col gap-3 ">
        <div className=" w-full sm:w-[50%] flex flex-col gap-4 items-start justify-center ">

        <div className=" flex items-center justify-center  ">
        <span className=" font-semibold text-lg pr-[35px]">Birthday : </span>
        <p className=" text-para font-semibold text-[14px]">4th april 1991</p>
        </div>

        <div className=" flex items-center justify-center ">
        <span className=" font-semibold text-lg pr-[65px]">Age : </span>
        <p className=" text-para font-semibold text-[14px]">22 Yr</p>
        </div>

        <div className=" flex items-center justify-center  ">
        <span className=" font-semibold text-lg pr-[17px]">Residence : </span>
        <p className=" text-para font-semibold text-[14px]">Canada </p>
        </div>

        <div className=" flex items-center justify-center  ">
        <span className=" font-semibold text-lg pr-[28px]">Address :</span>
        <p className=" text-para font-semibold text-[14px]">California, USA</p>
        </div>


        </div>

        <div className=" w-full sm:w-[50%] flex flex-col gap-4 items-start justify-center ">

        <div className=" flex items-center justify-center  ">
        <span className=" font-semibold text-lg pr-[35px]">E-mail : </span>
        <p className=" text-para font-semibold text-[14px]">info@domain.com</p>
        </div>

        <div className=" flex items-center justify-center ">
        <span className=" font-semibold text-lg pr-[30px]">Phone : </span>
        <p className=" text-para font-semibold text-[14px]"> 820-885-3321 </p>
        </div>

        <div className=" flex items-center justify-center  ">
        <span className=" font-semibold text-lg pr-[30px]">Skype : </span>
        <p className=" text-para font-semibold text-[14px]">Skype0404 </p>
        </div>

        <div className=" flex items-center justify-center  ">
        <span className=" font-semibold text-lg pr-[16px]">Freelance :</span>
        <p className=" text-para font-semibold text-[14px]"> Available </p>
        </div>


        </div>


      </div>

      <div className="mt-[20px]">
        <a className={homeHoverStyle} href="#"> Download CV</a>
      </div>

    </div>



    </section>
  )
}

export default About