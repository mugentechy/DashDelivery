

import EmptyState from "../components/EmptyState";
import { categories } from '../components/navbar/Categories';
import Button from "../components/Button";

import { useDispatch, useSelector } from 'react-redux'

import Loader from "../components/Loader"
import { useState } from "react";

import { BiCalendar } from "react-icons/bi";
import { BiSolidBookContent } from "react-icons/bi";
import { BiSolidMap } from "react-icons/bi";

import { BiSolidCar } from "react-icons/bi";

import { BiSolidTruck } from "react-icons/bi";
import { BiSolidBriefcase } from "react-icons/bi";


function ABoutPage() {

const [isAccordionOpen, setIsAccordionOpen] = useState(false);
const [isAccordionSOpen, setIsAccordionSOpen] = useState(false);
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };


  const toggleSAccordion = () => {

    setIsAccordionSOpen(!isAccordionSOpen);

  };


  return (
    <>
  <div className=' inline-block'>
 
<div className="w-full h-[650px] sm:h-[400px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px] bg-cover bg-center flex items-center  sm:px-12 " 
  >
  
  {/* Content Section */}
  <div className="flex flex-col lg:flex-row items-center justify-between w-full">
    
    {/* Left - Text Section */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug sm:leading-tight">
     About us
      </h2>
   
      <p className="mt-6 text-lg sm:text-xl leading-relaxed">
 Kenyan tech company delivering trusted end-to-end regulatory compliance solutions to global supply chains. 
      </p>
      <button className="mt-8 px-8 py-4 text-lg button text-white rounded-lg">Lets chat!</button>
    </div>

    {/* Right - Image Section (Hidden on small screens) */}
    <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0 hidden sm:block">
      <img className="w-full max-w-[500px] object-cover" src="/images/block.svg" alt="Second Image" />
    </div>

  </div>
</div>


    <section className="w-full  sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
  

    <div className="grid grid-cols-2 grid-rows-2 gap-6  ">
      <article className=" col-span-2  sxl:col-span-1 row-span-2 relative">
      Your Trusted Partner for Efficient Errand Services in Kenya

In a world where time is of the essence and convenience is paramount, AgriLik emerges as a beacon of efficiency in the bustling streets of Kenya. With a mission to make your life easier and your errands hassle-free, AgriLik is poised to become your trusted partner for all your errand needs.

  <h4 className="w-full mt-5 inline-block font-bold ">The AgriLik Difference</h4>
AgriLik isn't just another delivery service; it's a lifestyle enhancement. We understand that your time is precious, and mundane errands can consume hours of your day. That's where we come in. Here's why AgriLik stands out:


  <h4 className="w-full mt-5  inline-block font-bold">1. Swift and Reliable</h4>
When you choose AgriLik, you're choosing speed and reliability. Our team of dedicated runners and drivers is strategically positioned to swiftly tackle your errands. Whether it's picking up groceries, delivering important documents, or collecting your dry cleaning, we're always on the move to ensure your tasks are completed promptly.


  <h3 className="w-full mt-5  inline-block font-bold ">2. Personalized Service</h3>
We believe in personalized service tailored to your unique needs. No errand is too big or small for AgriLik. Our user-friendly platform allows you to specify your requirements, and we'll take care of the rest. We treat every errand as if it were our own, ensuring attention to detail and top-notch service.


  <h4 className="w-full mt-5  inline-block font-bold">3. Coverage Across Kenya</h4>
AgriLik is proud to offer its services across Kenya. Whether you're in Nairobi, Mombasa, Kisumu, or any other major city, we've got you covered. Our extensive network ensures that you can rely on us wherever you are in the country.


  <h4 className="w-full mt-5  inline-block font-bold">4. Secure and Efficient</h4>
Your security and the safety of your items are our top priorities. We employ state-of-the-art security measures to ensure the safe handling and transportation of your goods. Our commitment to efficiency means that you can track the progress of your errand in real-time, giving you peace of mind.


  <h4 className="w-full mt-5  inline-block font-bold ">5. Environmentally Conscious</h4>
AgriLik is committed to minimizing its environmental footprint. We optimize our routes and use eco-friendly vehicles to reduce emissions. By choosing us, you're not only saving time but also contributing to a cleaner, greener Kenya.


 <h4 className="w-full mt-5  inline-block font-bold "> How AgriLik Works</h4>

Getting started with AgriLik is a breeze:

<ul className="text-sm font-medium">
    <li className="w-full px-4 py-2 rounded-t-lg ">1. Create an Account: Sign up on our user-friendly platform or download our mobile app.</li>
    <li className="w-full px-4 py-2 ">2. Place Your Order Tell us what you need, where it needs to go, and when you need it there.</li>
    <li className="w-full px-4 py-2 ">3. Track Your Errand Keep an eye on the progress of your errand in real-time.</li>
    <li className="w-full px-4 py-2 rounded-b-lg">4. Delivery Relax as our reliable team takes care of your errand promptly.</li>
     <li className="w-full px-4 py-2 rounded-b-lg">5. Payment Conveniently pay for our services through our secure payment options.</li>
</ul>




 <h4 className="w-full mt-5  inline-block font-bold "> Your Time, Our Priority</h4>

At AgriLik, we understand that time is a finite resource. We're here to give you back the hours you'd rather not spend on errands. Let us take care of the logistics while you focus on what matters most to you.

Are you ready to experience the convenience of AgriLik? Join us on this exciting journey and discover a new level of efficiency in your daily life.

AgriLik: Your Trusted Partner for Efficient Errand Services in Kenya.
      </article>
      <article className=" col-span-2 sm:col-span-1 row-span-1 relative">
                





      </article>

    </div>
  </section>







<div class="max-w-7xl mx-auto px-8 bg-white shadow-md rounded-lg overflow-hidden">
<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button"  onClick={toggleAccordion} class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 " data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>More Shipment Details</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
    {isAccordionOpen && (
  
  <table class="w-full">
   
   
    
    <tbody>
   
      <tr class="border-b bg-gray-50 dark:bg-gray-500 dark:border-gray-700">
        <th class="px-4 py-2 text-left">Total Pieces </th>
        <th class="px-4 py-2 text-center">1</th>
  
      </tr>
      <tr>
        <td class="px-4 py-2">Weight </td>
        <td class="px-4 py-2 text-center">  
950.7 KGM</td>
   
      </tr>
     
      <tr class="border-b bg-gray-50 dark:bg-gray-500 dark:border-gray-700">
        <td class="px-4 py-2">Volume (MTQ) </td>
        <td class="px-4 py-2 text-center">  
0.457</td>
   
      </tr>
    
      <tr>
        <td class="px-4 py-2">Customer Reference</td>
        <td class="px-4 py-2 text-center">  
575479</td>
      
      </tr>
    
   <tr class="border-b bg-gray-50 dark:bg-gray-500 dark:border-gray-700">
        <td class="px-4 py-2">Shipment ID </td>
        <td class="px-4 py-2 text-center">  
  
S2303820637</td>
      
      </tr>
    
     <tr>
        <td class="px-4 py-2">Housebill</td>
        <td class="px-4 py-2 text-center">  
A839034</td>
      
      </tr>
    
    <tr>
        <th class="px-4 py-2 text-left" rowspan="2">Masterdetails</th>
        
      </tr>

      </tbody>

    
    <tbody>
   
      <tr class="border-b bg-gray-50 dark:bg-gray-500 dark:border-gray-700">
        <td class="px-4 py-2">Voyage Flight Number </td>
        <td class="px-4 py-2 text-center">  
  TK 0034</td>
   
      </tr>
     
      <tr >
        <td class="px-4 py-2">Airport of Departure </td>
        <td class="px-4 py-2 text-center">  
  IST Istanbul Airport TR </td>
   
      </tr>
    
      <tr class="border-b bg-gray-50 dark:bg-gray-500 dark:border-gray-700">
        <td class="px-4 py-2">Airport of Destination</td>
        <td class="px-4 py-2 text-center">  
575479</td>
      
      </tr>
    
   <tr>
        <td class="px-4 py-2">Estimated Departure Date </td>
        <td class="px-4 py-2 text-center">  
  
September, 06 2023 20:55 (UTC-05:00)</td>
      
      </tr>
    
     <tr class="border-b bg-gray-50 dark:bg-gray-500 dark:border-gray-700">
        <td class="px-4 py-2">Estimated Arrival Date </td>
        <td class="px-4 py-2 text-center">  
  September, 07 2023 17:05 (UTC+03:00)</td>
      
      </tr>
    </tbody>
  </table>
 
     )}
        <button type="button"  onClick={toggleSAccordion} class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 " data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>All Shipment Updates</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  

  {isAccordionSOpen && (


<ol class="m-10 relative border-l border-gray-200 dark:border-gray-700">                  
    <li class=" mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
         




        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 ">Import Document Handover</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 13th, 2022 10:15 (UTC+03:00)</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Westlands</p>
  
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            


        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900">Broker Notified</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Westlands</p>
    </li>
    <li class="ml-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
       



        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900">Arrived Final Destination</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Kangemi</p>
    </li>
</ol>


  



 
     )}
  </div>
</div>


    </div>
    </>
  )
}

export default ABoutPage
