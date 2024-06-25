import React from 'react'
import Movie2 from "../images/meRiver.gif"
import { saveAs } from 'file-saver';

function Landing() {

  const downloadPDF = () => {
    // Download the pdf
    const pdfUrl = `${process.env.PUBLIC_URL}/Resume.pdf`;
    const pdfName = 'Justin-Aguirre-Resume.pdf';
    saveAs(pdfUrl, pdfName);
  };

  return (
    <div className='w-full md:mt-24 lg:mt-0 h-full flex flex-col space-y-10 md:flex-row justify-between items-center font-reddit text-[#4B3F3A] dark:text-[#EAE3D2] duration-500 font-bold'>
      <div className='w-full h-96 mt-20 md:mt-48 md:h-full lg:w-1/2 md:w-[39%] xl:w-1/3 md:ml-12 lg:ml-20 xl:ml-28'>
        <img src={Movie2} autoPlay loop muted className='h-full rounded-lg mx-auto' />
      </div>
      <div className='flex flex-end flex-col space-y-8 h-full w-full md:w-full lg:w-3/4 items-center justify-center relative'>          
        <div className='text-3xl sm:text-5xl xl:text-4xl flex flex-row justify-center w-full'>Hello there<span className='animate-wave flex md:px-4 hidden md:flex'>👋 </span>, I'm </div>
        <span className='text-5xl sm:text-6xl xl:text-8xl text-[#476B6B] dark:text-[#824747] pb-12'>JW Aguirre.</span>
        <div className='flex flex-col flex justify-center items-center'>
          <div className='font-normal text-xl text-center flex '>Python &#8226; Javascript &#8226; Java &#8226; SQL &#8226; Linux </div>
          <div onClick={downloadPDF} className='mt-16 flex justify-center bg-[#A8C3BC] dark:bg-[#476B6B] duration-500 hover:scale-105 cursor-pointer rounded-lg w-1/2 p-2'>Download my Resume!</div>
        </div>
      </div>
    </div>
  )
}
 
export default Landing