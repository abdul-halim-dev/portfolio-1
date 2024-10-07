 
import { FaBarsStaggered } from "react-icons/fa6";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { headerStyle } from "@/style";
import { useState } from "react";


const Header = () => {

  const [active, setactive] = useState('all')

  const filterProducts = (item)=>{
    setactive(item)

  }

  return (
    <header className={headerStyle}>
      <div className="logo">
        <a href="#home" className=" text-3xl font-bold uppercase text-hoverout ">Halim</a>
      </div>


      <Sheet>
        <SheetTrigger>
          <button className=" flex lg:hidden bg-active text-common border-none py-2 px-5 font-bold text-2xl "> <FaBarsStaggered /> </button>

        </SheetTrigger>
        <SheetContent className="sm:w-[50%]   bg-sectionbg" side={"left"}>
          <nav className=" flex   items-center justify-center lg:hidden w-full pt-[30px] " >
            <ul className=" flex flex-col lg:flex-row  items-center justify-center gap-5 ">
            <li className=" text-lg font-semibold ">
            <a href="#home"> Home  </a>
          </li>
          <li className=" text-lg font-semibold ">
            <a href="#about"> About Me  </a>
          </li>

          <li className=" text-lg font-semibold ">

            <a href="#service"> Serives   </a>

          </li>
          <li className=" text-lg font-semibold "> <a href="#resume"> Resume  </a>
          </li>
          <li className=" text-lg font-semibold ">

            <a href="#portfolio"> Portfolio   </a> </li>
          <li className=" text-lg font-semibold ">
            <a href="#testimonial" > Testimonial   </a>
          </li>
          <li className=" text-lg font-semibold ">
            <a href="#contact"> Contact   </a> </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>


      <nav className="hidden lg:flex ">
        <ul className="  flex  items-center justify-center gap-5 ">
          <li className=" text-lg font-semibold ">
            <a   href="#home" 
            className={`hover:text-active  ${
              active === "home" ? "text-active" : " "
            }`}
            onClick={() => filterProducts("home")}
            > Home  </a>
          </li>
          <li className=" text-lg font-semibold ">
            <a href="#about"
              className={`hover:text-active ${
                active === "about" ? "text-active" : " "
              }`}
              onClick={() => filterProducts("about")}
            
            > About Me  </a>
          </li>

          <li className=" text-lg font-semibold ">

            <a href="#service"
             className={`hover:text-active ${
              active === "service" ? "text-active" : " "
            }`}
            onClick={() => filterProducts("service")}

            > Serives   </a>

          </li>
          <li className=" text-lg font-semibold "> <a href="#resume"
          
          className={`hover:text-active ${
            active === "resume" ? "text-active" : " "
          }`}
          onClick={() => filterProducts("resume")}
          > Resume  </a>
          </li>
          <li className=" text-lg font-semibold ">

            <a href="#portfolio"
            
            className={`hover:text-active ${
              active === "portfolio" ? "text-active" : " "
            }`}
            onClick={() => filterProducts("portfolio")}
            > Portfolio   </a> </li>
          <li className=" text-lg font-semibold ">
            <a href="#testimonial"
             className={`hover:text-active ${
              active === "testimonial" ? "text-active" : " "
            }`}
            onClick={() => filterProducts("testimonial")}
            
            > Testimonial   </a>
          </li>
          <li className=" text-lg font-semibold ">
            <a href="#contact"
             className={`hover:text-active ${
              active === "contact" ? "text-active" : " "
            }`}
            onClick={() => filterProducts("contact")}
            
            > Contact   </a> </li>
        </ul>
      </nav>












    </header>
  )
}

export default Header