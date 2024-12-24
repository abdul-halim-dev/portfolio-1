
import { DiResponsive } from "react-icons/di";
import { IoPricetagsOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { TbTargetArrow } from "react-icons/tb";
import { VscTools } from "react-icons/vsc";
import { ServiceCont, serviceCardStyle, serviceCardWrapper, serviceheaders, serviceIcon } from "@/style";



const Services = () => {
  return (

    <>
      <section id="service" className={ServiceCont}>

        <div className={serviceheaders}>
          <h1 className=" font-bold text-4xl text-hoverout uppercase dark:text-whiteColor " > My Services</h1>
          <p className=" text-lg font-medium text-para dark:text-textColor uppercase ">A Lead UX & UI designer based in Canada</p>
        </div>

        <div
          data-aos="fade-right" className={serviceCardWrapper}>

          <div
            className={serviceCardStyle}>
            <div className=" flex items-start justify-start  ">
              <span className={serviceIcon}> <DiResponsive /> </span>
            </div>

            <div className=" dddd flex items-start justify-center gap-4 flex-col ">
              <h6 className=" font-semibold text-xl text-hoverout dark:text-whiteColor ">Responsiveness</h6>
              <p className=" dark:text-textColor  text-[18px] text-para">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
            </div>

          </div>

          <div
            className={serviceCardStyle}>
            <div className=" flex items-start justify-start  ">
              <span className={serviceIcon}> <IoPricetagsOutline /> </span>
            </div>

            <div className=" dddd flex items-start justify-center gap-4 flex-col ">
              <h6 className="dark:text-whiteColor font-semibold text-xl text-hoverout ">Different Layout</h6>
              <p className=" dark:text-textColor  text-[18px] text-para">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
            </div>

          </div>

          <div
            className={serviceCardStyle}>
            <div className=" flex items-start justify-start  ">
              <span className={serviceIcon}> <TiMessages /> </span>
            </div>

            <div className=" dddd flex items-start justify-center gap-4 flex-col ">
              <h6 className="dark:text-whiteColor font-semibold text-xl text-hoverout ">Make it Simple</h6>
              <p className=" dark:text-textColor  text-[18px] text-para">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
            </div>

          </div>

          <div className={serviceCardStyle}>
            <div className=" flex items-start justify-start  ">
              <span className={serviceIcon}> <DiResponsive /> </span>
            </div>

            <div className=" dddd flex items-start justify-center gap-4 flex-col ">
              <h6 className="dark:text-whiteColor font-semibold text-xl text-hoverout ">Responsiveness</h6>
              <p className=" dark:text-textColor  text-[18px] text-para">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
            </div>

          </div>

          <div className={serviceCardStyle}>
            <div className=" flex items-start justify-start  ">
              <span className={serviceIcon}> <TbTargetArrow /> </span>
            </div>

            <div className=" dddd flex items-start justify-center gap-4 flex-col ">
              <h6 className="dark:text-whiteColor font-semibold text-xl text-hoverout ">Testing for Perfection</h6>
              <p className=" dark:text-textColor  text-[18px] text-para">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
            </div>

          </div>

          <div className={serviceCardStyle}>
            <div className=" flex items-start justify-start  ">
              <span className={serviceIcon}> <VscTools /> </span>
            </div>

            <div className=" dddd flex items-start justify-center gap-4 flex-col ">
              <h6 className="dark:text-whiteColor font-semibold text-xl text-hoverout ">Advanced Options</h6>
              <p className="  dark:text-textColor text-[18px] text-para">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Services