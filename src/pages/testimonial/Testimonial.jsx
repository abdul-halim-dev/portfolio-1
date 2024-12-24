
 import React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 


const Testimonial = () => {
 
const testimonial = [
 
{
  id:1,
  name:"Mark",
  title:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamusrror officiis atque voluptates magnam!",
  img:"https://i.ibb.co.com/S3Ljhzk/pro2.jpg"
},
{
  id:2,
  name:"NoodMon",
  title:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamusrror officiis atque voluptates magnam!",
  img:"https://i.ibb.co.com/XDGtWJb/pro3.jpg"
},
{
  id:3,
  name:"Randy",
  title:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamusrror officiis atque voluptates magnam!",
  img:"https://i.ibb.co.com/gWBFd1d/pro1.jpg"
},
{
  id:4,
  name:"Hume",
  title:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamusrror officiis atque voluptates magnam!",
  img:"https://i.ibb.co.com/DtM7Cyd/pro4.jpg"
},
{
  id:5,
  name:"Henry",
  title:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamusrror officiis atque voluptates magnam!",
  img:"https://i.ibb.co.com/c1cRtJM/pro5.jpg"
},
{
  id:6,
  name:"Denisha",
  title:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamusrror officiis atque voluptates magnam!",
  img:"https://i.ibb.co.com/h9HRBHh/pro6.jpg"
},

]

  return (
<section id="testimonial" className=" dark:bg-bgDark bg-white relative  scroll-my-6  ">
  <div className="mx-auto max-w-screen-xl px-[20px] py-8 sm:px-[2.5rem] lg:px-[50px] lg:py-16">
    <div className="flex items-start justify-center gap-4 flex-col">
    <h2 className="text-left text-3xl font-bold tracking-tight dark:text-whiteColor text-gray-900 sm:text-4xl uppercase">
     Testimonials
    </h2>
    <p className=" text-para text-lg font-semibold uppercase dark:text-textColor "> A Lead UX & UI designer based in Canada </p>

    </div>
    <div className="mt-8 flex items-center justify-center gap-4 px-0 sm:px-3"> 

    <Carousel
      opts={{
        align: "center",
        loop:"true",
        
      }}
 className="w-full  "
    >
      <CarouselContent  className="w-full ">
 
        {testimonial.map((item) => (
          <CarouselItem key={item.id} className=" md:basis-1/2 lg:basis-1/3">
            <blockquote className=" w-full h-full cursor-pointer  rounded-lg bg-gray-50 dark:bg-slate-800 p-3 shadow-sm  sm:p-8">
        <div className="flex items-center gap-4">
          <img
            alt=""
            src={item.img}
            className="size-14 rounded-full object-cover"
          />

          <div>
            <div className="flex justify-center gap-0.5 text-active dark:text-deactive">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>

            <p className="mt-0.5 text-lg  font-medium text-gray-900 dark:text-whiteColor"> {item.name}</p>
          </div>
        </div>

        
        <p className="mt-4 text-gray-700 dark:text-textColor">
          {item.title}
        </p>
       
      </blockquote>
          </CarouselItem>
        ))}
      </CarouselContent >
      <CarouselPrevious className="bg-[#eaedf2] dark:bg-deactive dark:text-white ml-10 sm:ml-0 shadow " />
      <CarouselNext className="bg-[#eaedf2] dark:bg-deactive dark:text-white mr-14 sm:mr-0 shadow " />
    </Carousel>
              
    </div>
  </div>
</section>
 
  )
}

export default Testimonial