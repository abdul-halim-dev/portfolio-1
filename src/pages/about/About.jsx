import { FaEnvelope, FaFacebookF } from "react-icons/fa";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { aboutIconStyle, aboutIconContainer, homeHoverStyle, aboutSectionStyle, aboutWrapperStyle } from "@/style";
import Aos from "aos";

const About = () => {
  Aos.init({
    duration: 1200,
  })

  return (
    <>
      <section id="about" className={aboutSectionStyle}>

        <div className=" w-full md:w-[45%] flex items-start justify-center flex-col gap-8 ">

          <div className="space-y-4 ">
            <h1 className=" font-bold text-4xl text-hoverout dark:text-whiteColor uppercase " > About Me</h1>
            <p className=" text-lg font-medium text-para dark:text-textColor uppercase ">A Lead Front-end designer based in Bangladesh</p>
          </div>
          <div data-aos="fade-up" className=" w-full border-[16px] border-common rounded-md relative ">
            <img className=" w-full object-contain " src="https://i.ibb.co.com/4ZpYwyz/about-us.jpg" alt="" />
            <div className={aboutIconContainer}>
              <a className={aboutIconStyle} target="_blank" href="https://www.facebook.com/profile.php?id=100068708954125" ><FaFacebookF /> </a>
              <a className={aboutIconStyle} target="_blank"  href="https://x.com/Halim426"><FaTwitter /> </a>
              <a className={aboutIconStyle} target="_blank" href="#"><FaInstagram /> </a>
              <a className={aboutIconStyle} target="_blank" href="mailto:abdulhalim87897@gmail.com" > <FaEnvelope/> </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-down-left" className={aboutWrapperStyle}>
          <div className="flex flex-col gap-4 items-start justify-center">
            <h1 className=" text-hoverout dark:text-whiteColor font-bold text-2xl sm:text-3xl "> I'M Abdul Halim</h1>
            <h6 className=" text-hoverout dark:text-whiteColor text-xl font-semibold "> A Lead <span className="text-active dark:text-deactive">Front-end</span> designer based in <span className="text-active dark:text-deactive ">Bangladesh</span> </h6>
            <p className=" text-para text-lg dark:text-textColor ">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio</p>
          </div>
          <div className="  w-full flex sm:flex-row flex-col gap-3 ">
            <div className=" w-full sm:w-[50%] flex flex-col gap-4 items-start justify-center ">

              <div className=" flex items-center justify-center  ">
                <span className=" font-semibold text-lg pr-[35px] dark:text-whiteColor ">Birthday : </span>
                <p className=" text-para dark:text-textColor font-semibold text-[14px]">13 February 2002</p>
              </div>

              <div className=" flex items-center justify-center ">
                <span className=" font-semibold text-lg pr-[65px] dark:text-whiteColor ">Age : </span>
                <p className=" text-para dark:text-textColor font-semibold text-[14px]">22 Yr</p>
              </div>

              <div className=" flex items-center justify-center  ">
                <span className=" font-semibold text-lg pr-[17px] dark:text-whiteColor  ">Residence : </span>
                <p className=" text-para dark:text-textColor font-semibold text-[14px]">Bangladesh </p>
              </div>

              <div className=" flex items-center justify-center  ">
                <span className=" font-semibold text-lg pr-[28px] dark:text-whiteColor  ">Address :</span>
                <p className=" text-para dark:text-textColor font-semibold text-[14px]">Dinajpur, Bangladesh</p>
              </div>
            </div>

            <div className=" w-full sm:w-[50%] flex flex-col gap-4 items-start justify-center ">

              <div className=" flex items-center justify-center  ">
                <span className=" font-semibold text-lg pr-[35px] dark:text-whiteColor  ">E-mail : </span>
                <p className=" text-para dark:text-textColor font-semibold text-[14px]">abdulhalim87897@gmail.com</p>
              </div>

              <div className=" flex items-center justify-center ">
                <span className=" font-semibold text-lg pr-[30px] dark:text-whiteColor  ">Phone : </span>
                <p className=" text-para dark:text-textColor font-semibold text-[14px]"> +8801888602276 </p>
              </div>

              <div className=" flex items-center justify-center  ">
                <span className=" font-semibold text-lg pr-[30px] dark:text-whiteColor  ">Whatapp : </span>
                <p className=" text-para dark:text-textColor font-semibold text-[14px]">+8801888602276 </p>
              </div>

              <div className=" flex items-center justify-center  ">
                <span className=" font-semibold text-lg pr-[16px] dark:text-whiteColor ">Freelance :</span>
                <p className=" text-para dark:text-textColor font-semibold text-[14px]"> Available </p>
              </div>
            </div>
          </div>
          <div className="mt-[20px]">
            <a className={homeHoverStyle} href="#"> Download CV</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About