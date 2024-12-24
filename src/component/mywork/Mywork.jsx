
import { workProgressStyle } from "@/style"


const Mywork = () => {
  return (
    <>

      <section id="service" className="dark:bg-bgDark  w-full flex  items-center justify-center  gap-6 flex-col bg-common px-[20px] sm:px-[50px]  pb-[60px]">

        <div className="w-full items-start justify-start   flex">
          <h1 className=" font-bold text-3xl text-hoverout dark:text-whiteColor uppercase " > My Skill </h1>

        </div>

        <div className=" w-full flex flex-col sm:flex-row items-center justify-center  gap-0 sm:gap-[35px]  ">

          <div data-aos="fade-down-right" className="w-full sm:w-[50%] z-0 ">
            <ul className="unorder w-full flex items-start  justify-center flex-col p-[20] m-[20px auto]">
              <li className={`${workProgressStyle} html dark:text-whiteColor`}> HTML
                <span className="dark:text-whiteColor"> 95% </span>
              </li>
              <li className={`${workProgressStyle} css dark:text-whiteColor `}> CSS
                <span className="dark:text-whiteColor"> 90% </span>
              </li>
              <li className={`${workProgressStyle} java dark:text-whiteColor `}> JAVASCRIPT
                <span className="dark:text-whiteColor"> 85% </span>
              </li>

            </ul>
          </div>
          <div data-aos="fade-down-left" className="w-full  sm:w-[50%] z-0   ">
            <ul className="unorder w-full flex items-start  justify-center flex-col p-[20] m-[20px auto]">
              <li className={`${workProgressStyle} react dark:text-whiteColor`}> React js
                <span className="dark:text-whiteColor"> 95% </span>
              </li>
              <li className={`${workProgressStyle} tailwind dark:text-whiteColor`}> Tailwindcss
                <span className="dark:text-whiteColor"> 90% </span>
              </li>
              <li className={`${workProgressStyle} boot  dark:text-whiteColor`}> Bootstrap
                <span className="dark:text-whiteColor"> 85% </span>
              </li>

            </ul>
          </div>



        </div>

      </section>

    </>
  )
}

export default Mywork