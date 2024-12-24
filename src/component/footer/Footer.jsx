 

import { FaEnvelope, FaFacebookF } from "react-icons/fa";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    
    <section className=" w-full flex flex-col sm:flex-row gap-4 items-center justify-between px-[20px] sm:px-[50px]  py-[30px] bg-hoverout/40 ">
    <div className=" flex items-center justify-center gap-4  " >
            <a className=" text-common text-lg hover:text-active duration-500 " target="_blank" href="https://www.facebook.com/profile.php?id=100068708954125" ><FaFacebookF/> </a>
            <a className=" text-common text-lg hover:text-active duration-500 " href="https://x.com/Halim426" ><FaTwitter/> </a>
            <a className=" text-common text-lg hover:text-active duration-500 " href="#"><FaInstagram/> </a>
            <a className=" text-common text-lg hover:text-active duration-500 "  href="mailto:abdulhalim87897@gmail.com"><FaEnvelope/> </a>
      
      </div>

      <div className="text">
        <p className=" text-common text-lg ">© 2024 copyright all right reserved</p>
      </div>

    </section>
  )
}

export default Footer