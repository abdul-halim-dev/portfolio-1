 
 
 import { useState } from "react";
 import { portfolioSection, portfolioOverly } from "@/style.js";
 
 
import productList from './../../data.js';
import { Link } from "react-router-dom";



 const Portfolio = () => {
   const [active, setActive] = useState("all");
   const [filterPro, setfilterPro] = useState(productList);
 
   const filterProducts = (items) => {
     setActive(items);
 
     if (items === "all") {
       setfilterPro(productList);
     } else {
       const filterItems = productList.filter((item) => item.category === items);
       setfilterPro(filterItems);
     }
   };


   return (
     <section id="portfolio" className={portfolioSection}>
      
        <div className=" w-full flex items-center justify-center  ">
          <h1 className=" font-bold text-4xl text-hoverout uppercase dark:text-whiteColor"> Portfolio </h1>
        </div>
       <div className=" w-full flex-wrap  flex items-center justify-center gap-4">
         <button
           className={` dark:hover:text-active dark:text-whiteColor text-lg font-semibold ${
             active === "all" ? "text-active " : " "
           }`}
           onClick={() => filterProducts("all")}
         >
         
           All 
         </button>
         <button
           className={`dark:hover:text-active dark:text-whiteColor text-lg font-semibold ${
             active === "women's clothing" ? "text-active " : " "
           }`}
           onClick={() => filterProducts("women's clothing")}
         >
         
           Web Design  
         </button>
         <button
           className={` dark:hover:text-active dark:text-whiteColor text-lg font-semibold ${
             active === "men's clothing" ? "text-active " : " "
           }`}
           onClick={() => filterProducts("men's clothing")}
         >
           
           Development  
         </button>
         <button
           className={`dark:hover:text-active dark:text-whiteColor text-lg font-semibold ${
             active === "jewelery" ? "text-active " : " "
           }`}
           onClick={() => filterProducts("jewelery")}
         >
           Mern Stack
         </button>
       </div>
 
       <div data-aos="zoom-in" className=" w-full flex items-center justify-center gap-3 flex-wrap  ">
           {filterPro.length > 0 ? (
             filterPro.map((item) => (
              
               <Link to={`/singlepage/${item.id}`}   key={item.id}  className=" w-full md:w-[49%] lg:w-[32%] relative flex items-center justify-center flex-col gap-5 ">
                 <div className=" w-full h-[230px] ">
                   <img
                     className=" w-full h-full object-cover "
                     src={item.image}
                     alt=""
                   />
                 </div>

                 <a href="#test"  className={portfolioOverly}>
                 <h1 className=" text-common font-semibold text-xl"> {item.title} </h1>
                   <p className="text-common text-lg font-semibold"> { item.price}</p>
                    </a>
                 
               </Link>
             ))
           ) : (
             <h1> Dont have any product </h1>
           )}
       
       </div>
     </section>
   );
 };
 
 export default Portfolio;
 