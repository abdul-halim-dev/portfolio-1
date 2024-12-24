
import { FaBarsStaggered, FaSunPlantWilt } from "react-icons/fa6";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { headerStyle } from "@/style";
import { useEffect, useState } from "react";
import { FaEye, FaMoon, FaSun } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";











const Header = () => {


  const headerScroll = document.querySelector(".page-header");
  const toggleClass = "is-sticky";


  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
      headerScroll.classList.add(toggleClass);
    } else {
      headerScroll.classList.remove(toggleClass);
    }
  });


  const [theme, setTheme] = useState("dark")


  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    // select html elem
    const html = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark');
      setTheme('dark');
    } else {
      html.classList.remove('dark');
      setTheme('light');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (localStorage.getItem('theme') === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (

    <>
      <header className={`${headerStyle} page-header`}>
        <div className=" headerLogo w-[120px] sm:w-[160px] h-[45px] ">
          <a href="#home" className="w-full h-full ">
            <img className="w-full h-full object-cover" src="https://i.ibb.co.com/GFbJ2FL/logoi.png" alt="logo" border="0" />
          </a>
        </div>
        <nav className="hidden lg:flex ">
          <ul className="  flex  items-center justify-center gap-5 ">
            <li className=" text-lg font-semibold ">
              <a href="#home"
                className={`hover:text-active dark:text-deactive `}

              > Home  </a>
            </li>
            <li className=" text-lg font-semibold ">
              <a href="#about"
                className={`hover:text-active dark:text-deactive `}
              > About Me  </a>
            </li>
            <li className=" text-lg font-semibold ">
              <a href="#service"
                className={`hover:text-active dark:text-deactive `}
              > Serives   </a>
            </li>
            <li className=" text-lg font-semibold "> <a href="#resume"
              className={`hover:text-active dark:text-deactive`}
            > Resume  </a>
            </li>
            <li className=" text-lg font-semibold ">
              <a href="#portfolio"
                className={`hover:text-active dark:text-deactive`}
              > Portfolio   </a> </li>
            <li className=" text-lg font-semibold ">
              <a href="#testimonial"
                className={`hover:text-active dark:text-deactive`}
              > Testimonial   </a>
            </li>
            <li className=" text-lg font-semibold ">
              <a href="#contact"
                className={`hover:text-active dark:text-deactive`}
              > Contact   </a> </li>
          </ul>
        </nav>
        <Sheet>
          <SheetTrigger>
            <button className="sheetBtn flex lg:hidden bg-active  text-common border-none py-1 sm:py-2 px-3 sm:px-5 md:px-5 lg:px-5 font-bold text-xl sm:text-2xl "> <FaBarsStaggered /> </button>
          </SheetTrigger>
          <SheetContent className="w-[50%]   bg-sectionbg dark:bg-textColor" side={"left"}>
            <nav className=" flex   items-center justify-center lg:hidden w-full pt-[30px] " >
              <ul className=" flex flex-col lg:flex-row  items-center justify-center gap-5 ">
                <li className=" text-lg font-semibold ">
                  <a href="#home"> Home  </a>
                </li>
                <li className=" text-lg font-semibold ">
                  <a href="#about" > About Me  </a>
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
        <div className="darkMode flex gap-1 items-center justify-center absolute top-[12px] right-[80px] sm:right-[140px] lg:right-3 ">
          <button title={`${theme == "light" ? "Dark Mode" : "Light Mode"}`} onClick={handleThemeSwitch} className=' p-2  bg-black dark:bg-deactive text-white rounded-full text-xl'> {theme == "light" ? <FaMoon /> : <IoSunnyOutline />}    </button>
        </div>
      </header>
    </>


  )
}

export default Header

