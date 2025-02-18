
import { categories } from '../components/navbar/Categories';
import Button from "../components/Button";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import Loader from "../components/Loader"

import { FaPlus, FaMinus } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { BiSolidBookContent } from "react-icons/bi";
import { BiSolidMap } from "react-icons/bi";

import { BiSolidCar } from "react-icons/bi";
import { FiMapPin, FiFileText, FiDatabase, FiSend } from "react-icons/fi";
import { BiSolidTruck } from "react-icons/bi";
import { BiSolidBriefcase } from "react-icons/bi";

function HomePage({listings ,isLoading}) {

 const { currentUser } = useSelector((state) => state.currentUser)
   const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    { title: "Business Situation & Challenge", content: "Description of the business situation and challenges faced." },
    { title: "Business Approach to the Challenge", content: "How the business tackled the challenge effectively." },
    { title: "Outcome", content: "The results and impact after implementing the solution." },
  ];

  return (
    <>
<div className="w-full h-[750px] sm:h-[500px] lg:h-[650px] xl:h-[750px] 2xl:h-[850px] bg-cover bg-center flex items-center  sm:px-12 bg-black/50" 
  style={{ backgroundImage: "url('/images/banner.png')" }}>
  
  {/* Content Section */}
  <div className="flex flex-col lg:flex-row items-center justify-between w-full">
    
    {/* Left - Text Section */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug sm:leading-tight">
        Trusted Data for EUDR Compliance and Reporting
      </h2>
      <p className="mt-6 text-lg sm:text-xl leading-relaxed">
        End-to-end solution for trusted and auditable data on sustainability to address your compliance and reporting needs.
      </p>
      <button className="mt-8 px-8 py-4 text-lg button text-white rounded-lg">Explore our solutions</button>
    </div>

    {/* Right - Image Section (Hidden on small screens) */}
    <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0 hidden sm:block">
      <img className="w-full max-w-[600px] object-cover" src="/images/visual.png" alt="Second Image" />
    </div>

  </div>
</div>



<main>


<div className="flex flex-col items-center justify-center text-center px-6 sm:px-12 py-12">
  <h2 className="text-4xl sm:text-5xl font-semibold pb-5 text-gray-900">
    AgriLink
  </h2>
  <p className="text-lg sm:text-xl text-gray-700 max-w-2xl leading-relaxed">
    End-to-end solution for regulatory compliance and reporting.
  </p>
</div>




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


  <div className="relative bg-white py-16 px-6 md:px-12 lg:px-20">
      
      {/* Background Image (Covers full width and is hidden on small screens) */}
      <div 
        className="absolute inset-0 hidden md:block bg-cover bg-center" 
        style={{ backgroundImage: `url(/images/Int.png)` }}
      ></div>

      {/* Overlay to darken the background slightly for better readability */}
      <div className="absolute inset-0 hidden md:block bg-black opacity-20"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center">

        {/* Left Side Content */}
  

        {/* Right Side Accordion */}
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg relative z-10 md:ml-auto">


              <div className="bg-white p-6 rounded-lg shadow-lg relative z-10">
          <h3 className="text-green-500 font-bold text-lg">CASE STUDY</h3>
          <h2 className="text-2xl font-bold mt-2">
            A leading CPG Implements Our End-to-End Compliance Solution for its Coffee and Cocoa Supply Chains
          </h2>
          <p className="text-gray-600 mt-3">
            The mission of our collaboration is to ensure compliance with the upcoming EU Deforestation Regulation 
            with a high degree of automation.
          </p>
        </div>


          {sections.map((section, index) => (
            <div key={index} className="mb-3">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full bg-green-500 text-white font-semibold py-3 px-5 rounded-md text-left"
              >
                {section.title}
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-100 text-gray-700 rounded-md mt-2">{section.content}</div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>

 </main>
    </>
  )
}

export default HomePage
