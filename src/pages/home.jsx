
import { categories } from '../components/navbar/Categories';
import Button from "../components/Button";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import Loader from "../components/Loader"
import ListingCard from "../components/ListingCard";
import { FaPlus, FaMinus } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { BiSolidBookContent } from "react-icons/bi";
import { BiSolidMap } from "react-icons/bi";

import { BiSolidCar } from "react-icons/bi";
import { FiMapPin, FiFileText, FiDatabase, FiSend } from "react-icons/fi";
import { BiSolidTruck } from "react-icons/bi";
import { BiSolidBriefcase } from "react-icons/bi";
import { FaUserFriends, FaBuilding, FaExchangeAlt } from "react-icons/fa";


import { FaTruckMoving } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaGift } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { AiFillMedicineBox } from "react-icons/ai";
import { IoFlower } from "react-icons/io5";
import { FiPackage } from "react-icons/fi";
import { RiEBike2Fill } from "react-icons/ri";


function HomePage({listings ,isLoading}) {

 const { currentUser } = useSelector((state) => state.currentUser)
   const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    { title: "Real-Time Tracking", content: "Customers and businesses can track deliveries in real time, ensuring transparency and accountability" },
    { title: "Smart Contracts", content: "Payments are automated and released instantly upon successful delivery, eliminating delays and disputes" },
    { title: "Immutable Records", content: "Blockchain ensures that all delivery data is tamper-proof and permanently recorded." },
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
        Blockchain Powered Supply Chain Compliance and Reporting
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







<div className="bg">
 <h2 className="text-center text-4xl sm:text-5xl font-semibold pb-5 text-gray-900">
    Our solutions
  </h2>
    <p className="text-center text-lg sm:text-xl text-gray-700  leading-relaxed">
    End-to-end solution for regulatory compliance and reporting.
  </p>

<section className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10 py-4  sm:px-12">


  {/* Card 1 */}
  <div className="w-full text-center p-6 flex flex-col items-center">
    <FiFileText className="w-10 h-10 mb-4 text-green-600" />
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
      Collect and manage supply chain location data, including GPS coordinates and polygons, in one place.
    </p>
  </div>


  {/* Card 4 */}
  <div className="w-full text-center p-6 flex flex-col items-center">
    <FiDatabase className="w-10 h-10 mb-4 text-green-600" />
    <p className="text-base sm:text-lg font-normal">
      <strong>Data Storage and Access for Audits</strong><br />
      Easily Access and manage all DDS submissions and records, ensuring secure and reliable traceability data
    </p>
  </div>

</section>

</div>


<main className="max-w-7xl mx-auto  sm:px-16">

<section className="">

    <div 
        className="
          py-6
          grid 
          grid-cols-1 
          md:grid-cols-4
          gap-4
       
      
        "
      >

 


       <ListingCard
             icon={IoFastFoodSharp}
              image='/images/food.jpg'
          label="Food Delivery"
          description="Our food delivery software optimizes routes and automates food deliveries to cut down resource usage and increase revenue."
      
        />


    


       <ListingCard
             icon={GiFruitBowl}
              image='/images/grocery.jpg'
          label="Grocery Delivery"
          description="Get all your groceries delivered fresh & on time backed via a solid framework of grocery delivery software"
      
        />

   <ListingCard
             icon={BiSolidTruck}
              image='/images/log.jpg'
          label="Logistics Delivery"
          description="Quick Delivery seamless integration automates the delivery process & improves operational efficiency."
      
        />













              <ListingCard
             icon={AiFillMedicineBox}
              image='/images/med.jpg'
          label="Medicine Delivery"
          description="Ensure faster and timely delivery of medicines to your customers with optimized solutions."
      
        />


    


       <ListingCard
             icon={IoFlower}
              image='/images/flower.webp'
          label="Flower Delivery"
          description="Channelize smooth delivery of fresh flowers & meet customers' demand on every season with flower delivery software"
      
        />

   <ListingCard
             icon={FaGift}
              image='/images/delivery.jpg'
          label="Pickup & Delivery"
          description="Shifting is made easy with pickup and delivery software to quickly move goods around by optimum usage of resources."
      
        />


       <ListingCard
             icon={FaTruckMoving}
              image='/images/moving.jpg'
          label="Courier Delivery"
          description="Don't miss out on your orders. Get them all delivered on time and in the quickest time with courier dispatch software"
      
        />

   <ListingCard
             icon={RiEBike2Fill}
              image='/images/mile.jpg'
          label="Last Mile Delivery"
          description="Ensure on-time delivery of goods and services while you automate the last leg of your journey with Quick Delivery."
      
        />

</div>


        </section>
</main>

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
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg relative  md:ml-auto">


              
          <h3 className="text-green-500 font-bold text-lg">CASE STUDY</h3>
          <h2 className="text-2xl font-bold mt-2">
             Leveraging blockchain technology  our solution ensures real-time tracking and secure transactions
          </h2>
          <p className="text-gray-600 mt-3">
            The delivery industry is plagued by inefficiencies, lack of transparency, 
            and high operational costs.These challenges hinder trust and efficiency in the delivery ecosystem,

          </p>
        

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

 <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col lg:flex-row items-center justify-between w-full">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl sm:text-5xl font-semibold pb-5 text-gray-900">
          Advanced Delivery Solution for Every Business Model
        </h2>
        <img
          className="w-full max-w-[500px] object-cover"
          src="/images/del.png"
          alt="Delivery Solution"
        />
      </div>

      {/* Right Section - Service Cards */}
      <div className="w-full lg:w-1/2 grid gap-6 mt-8 lg:mt-0">
        {/* Business to Customer */}
        <div className="flex items-center p-6 bg-white shadow-lg rounded-lg">
          <FaUserFriends className="text-green-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Business to Customer</h3>
            <p className="text-gray-600">
              Deliver a seamless and transparent experience between providers
              and customers for effortless exchange of products or services.
            </p>
          </div>
        </div>

        {/* Business to Business */}
        <div className="flex items-center p-6 bg-white shadow-lg rounded-lg">
          <FaBuilding className="text-green-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Business to Business</h3>
            <p className="text-gray-600">
              Enable smooth collaboration and operations between businesses with
              advanced efficiency.
            </p>
          </div>
        </div>

        {/* Three-Sided Marketplace */}
        <div className="flex items-center p-6 bg-white shadow-lg rounded-lg">
          <FaExchangeAlt className="text-green-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Three-Sided Marketplace</h3>
            <p className="text-gray-600">
              Foster transparent connections between businesses, providers, and
              customers—all in one streamlined platform.
            </p>
          </div>
        </div>
      </div>
    </div>

 </main>
    </>
  )
}

export default HomePage
