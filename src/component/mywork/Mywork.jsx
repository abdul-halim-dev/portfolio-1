 
import { workProgressStyle } from "@/style"
 
 
 
 const Mywork = () => {
   return (
    <section id="service" className="  w-full flex  items-center justify-center  gap-6 flex-col bg-common px-[20px] sm:px-[50px]  pb-[60px]">

      <div className="w-full items-start justify-start   flex">
        <h1 className=" font-bold text-3xl text-hoverout uppercase " > My Skill </h1>
        
      </div>

      <div className=" w-full flex flex-col sm:flex-row items-center justify-center  gap-0 sm:gap-[35px]  ">

        <div className="w-full sm:w-[50%] z-0 ">
        <ul className="unorder w-full flex items-start  justify-center flex-col p-[20] m-[20px auto]">
    <li className={`${workProgressStyle} html`}> HTML 
      <span> 95% </span>
    </li>
    <li className={`${workProgressStyle} css`}> CSS 
    <span> 90% </span>
    </li>
    <li className={`${workProgressStyle} java`}> JAVASCRIPT 
    <span> 85% </span>
    </li>
     
</ul>
        </div>

        
        <div className="w-full  sm:w-[50%] z-0   ">
        <ul className="unorder w-full flex items-start  justify-center flex-col p-[20] m-[20px auto]">
    <li className={`${workProgressStyle} react`}> React js 
      <span> 95% </span>
    </li>
    <li className={`${workProgressStyle} tailwind`}> Tailwindcss 
    <span> 90% </span>
    </li>
    <li className={`${workProgressStyle} boot`}> Bootstrap 
    <span> 85% </span>
    </li>
     
</ul>
        </div>



      </div>



      </section>
   )
 }
 
 export default Mywork