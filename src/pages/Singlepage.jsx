import Footer from '@/component/footer/Footer';
import productList from '@/data';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaEnvelope, FaFacebook, FaTwitter } from 'react-icons/fa';


const Singlepage = () => {
    const {id} =useParams()

    const [filterPro, setfilterPro] = useState(productList);
    const [ singleCard, setsingleCard] = useState([])
  
    useEffect(()=>{
           const cardFilter = ()=>{
              const card = filterPro.filter((item)=> item.id == id)
              setsingleCard(card)
           }
           cardFilter()
    } , [id])

 
  return (
   <>
   
   <div className='w-full bg-sectionbg dark:bg-bgDark py-[20px] px-[20px] sm:px-[30px] md:px-[50px] flex items-start gap-8 justify-center flex-col '>
     <div className='w-full flex items-center justify-start gap-[10px] sm:gap-[200px] md:gap-[320px]'>
      <Link className='px-3 bg-active dark:hover:bg-active dark:bg-deactive text-common py-[2px] duration-300 hover:bg-hoverout rounded text-[14px] sm:text-[16px] ' to={"/"}> go back</Link>
      <h1 className=' text-[18px] sm:text-[22px] font-bold text-hoverout dark:text-whiteColor '> {singleCard[0]?.projectTitle} </h1>
     </div>


<div className='w-full flex flex-col sm:flex-row items-start justify-center gap-5 md:gap-10'>
<div className='w-full sm:w-[45%] h-[100%] '>


<Carousel className='w-full' showThumbs={false} showArrows={false} showStatus={false}  showIndicators={true} autoPlay={false}>
                <div className='w-full h-full'>
                <img className='w-full h-full object-cover' src={singleCard[0]?.image} alt="" />
                   
                </div>
                <div className='w-full h-full'>
                <img className='w-full h-full object-cover' src={singleCard[0]?.gallery.one} alt="" />
                  
                </div>
                <div className='w-full h-full' >
                <img className='w-full h-full object-cover' src={singleCard[0]?.gallery.two} alt="" />
                    
                </div>
                <div className='w-full h-full'>
                <img className='w-full h-full object-cover' src={singleCard[0]?.gallery.three} alt="" />
                </div>
                <div className='w-full h-full'>
                <img className='w-full h-full object-cover' src={singleCard[0]?.gallery.four} alt="" />
                </div>
             
            </Carousel>

    </div>


<div className=' w-full sm:w-[55%] flex items-start justify-center flex-col gap-5 '>
 
 <div className='w-full flex items-start justify-center flex-col gap-4 '>
 <h3 className='text-2xl text-hoverout font-bold dark:text-whiteColor'>Project Info</h3>
    <p className='text-para dark:text-textColor  text-lg '> {singleCard[0]?.projectInfo} </p>
<h3 className='text-xl text-hoverout font-bold dark:text-whiteColor'>Project Details:</h3>
 </div>
<ul className='flex w-full items-start justify-center flex-col gap-3'>
  <li className='text-hoverout dark:text-textColor border-b-[1px] pb-2 text-[16px] font-semibold border-active dark:border-deactive w-full'>Client: {singleCard[0]?.client} </li>
  <li className='text-hoverout dark:text-textColor  border-b-[1px] pb-2 text-[16px] font-semibold border-active dark:border-deactive w-full'>Technologies: {singleCard[0]?.technology} </li>
  <li className='text-hoverout dark:text-textColor  border-b-[1px] pb-2 text-[16px] font-semibold border-active dark:border-deactive w-full'>Industry: {singleCard[0]?.industary} </li>
  <li className='text-hoverout dark:text-textColor  border-b-[1px] pb-2 text-[16px] font-semibold border-active dark:border-deactive w-full'>Date:{singleCard[0]?.date} </li>
  <li className='text-hoverout dark:text-textColor  border-b-[1px] pb-2 text-[16px] font-semibold border-active dark:border-deactive w-full'>URL: <a href={"#"}> {singleCard[0]?.url}</a> </li>
</ul>

<div className='w-full flex items-center justify-start gap-8'>
  <p className='text-hoverout text-[18px] dark:text-whiteColor font-semibold'>Share: </p>
  <div className='flex gap-6'>
    <a className='text-[22px] dark:text-whiteColor hover:text-active dark:hover:text-deactive ' target='blank' href="https://www.facebook.com/abdul.halim.763335"> <FaFacebook/> </a>
    <a className='text-[22px] dark:text-whiteColor hover:text-active dark:hover:text-deactive '  target='blank'  href="https://x.com/Halim426"> <FaTwitter/> </a>
    <a className='text-[22px] dark:text-whiteColor hover:text-active dark:hover:text-deactive '  target='blank' href="mailto:abdulhalim87897@gmail.com" > <FaEnvelope/> </a>
  </div>
</div>
</div>
</div>

    </div>
    <Footer/>
   </>

  )
}

export default Singlepage