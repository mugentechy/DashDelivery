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
import { FiMapPin, FiFileText, FiDatabase, FiSend } from "react-icons/fi";

function TrackPage({listings ,isLoading}) {

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
<div className="w-full h-[750px] sm:h-[500px] lg:h-[650px] xl:h-[750px] 2xl:h-[850px] bg-cover bg-center flex items-center  sm:px-12 bg-black/50" 
  style={{ backgroundImage: "url('/images/header.webp')" }}>
  
  {/* Content Section */}
  <div className="flex flex-col lg:flex-row items-center justify-between w-full">
    
    {/* Left - Text Section */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug sm:leading-tight">
        Our traceability and compliance solutions
      </h2>
      <strong>Easy visualisation, interoperable, scalable. </strong>
      <p className="mt-6 text-lg sm:text-xl leading-relaxed">
       One trusted system for regulatory compliance, to elevate ESG sustainability efforts, and make a tangible impact. 
      </p>
      <button className="mt-8 px-8 py-4 text-lg button text-white rounded-lg">Explore our solutions</button>
    </div>

    {/* Right - Image Section (Hidden on small screens) */}
    <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0 hidden sm:block">
      <img className="w-full max-w-[600px] object-cover" src="/images/solution.svg" alt="Second Image" />
    </div>

  </div>
</div>





<main className="">





<div className="max-w-7xl mx-auto px-8 sm:px-16 flex flex-col items-center justify-center text-center px-6 sm:px-12 py-12">

  <p className="text-lg sm:text-xl text-gray-700 max-w-2xl leading-relaxed">
    Our platform helps you track & trace your product's supply chain from its source to the end consumer.
We design end-to-end traceability solutions that are designed to assist you in gathering trusted data to report on your sustainability, and ensure your compliance with regulations. 
  </p>

  <button className="mt-8 px-8 py-4 text-lg button text-white rounded-lg">Get a demo</button>
</div>



<div className="bg">
 <h2 className="text-center text-4xl sm:text-5xl font-semibold pb-5 text-gray-900">
    Our solutions
  </h2>

<section className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10 py-4  sm:px-12">


  {/* Card 1 */}
  <div className="w-full text-center p-6 flex flex-col items-center">
    <FiFileText className="w-10 h-10 mb-4 text-blue-600" />
    <p className="text-base sm:text-lg font-normal">
      <strong>Auditable Product Traceability</strong><br />
      End-to-end batch-level traceability on product traces for regulatory compliance. Leveraging industry standards for data exchange.
    </p>
  </div>

  {/* Card 2 */}
  <div className="w-full text-center p-6 flex flex-col items-center">
    <FiMapPin className="w-10 h-10 mb-4 text-green-600" />
    <p className="text-base sm:text-lg font-normal">
      <strong>Centralised Geolocation Data</strong><br />
      Collect and manage farm and supply chain location data (like GPS coordinates or polygons) in one place.
    </p>
  </div>


  {/* Card 4 */}
  <div className="w-full text-center p-6 flex flex-col items-center">
    <FiDatabase className="w-10 h-10 mb-4 text-purple-600" />
    <p className="text-base sm:text-lg font-normal">
      <strong>Data Storage and Access for Compliance Audits</strong><br />
      Quickly access all DDS submissions and records, keeping traceability data for five years as required by EUDR.
    </p>
  </div>

</section>

</div>




<div className="w-full h-[750px] sm:h-[500px] lg:h-[650px] xl:h-[750px] 2xl:h-[850px] bg-cover bg-center flex items-center  sm:px-12 " 
  >
  
  {/* Content Section */}
  <div className="flex flex-col lg:flex-row items-center justify-between w-full">
    
    {/* Left - Text Section */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug sm:leading-tight">
      Blockchain-backed traceability
      </h2>
   
      <p className="mt-6 text-lg sm:text-xl leading-relaxed">
      Our blockchain-backed traceability provides data security, immutability and fine grained access control. The use of GS1 standard data format allows interoperability with existing IT infrastructure.
We are offering off-the-shelf options and subscription-based models.
      </p>
      <button className="mt-8 px-8 py-4 text-lg button text-white rounded-lg">Lets chat!</button>
    </div>

    {/* Right - Image Section (Hidden on small screens) */}
    <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0 hidden sm:block">
      <img className="w-full max-w-[600px] object-cover" src="/images/block.svg" alt="Second Image" />
    </div>

  </div>
</div>




 </main>
    </>
  )
}

export default TrackPage
