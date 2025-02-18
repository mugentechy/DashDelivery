import { categories } from '../components/navbar/Categories';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Button from "../components/Button";
import Loader from "../components/Loader"
import AssignModal from "../components/modals/AssignModal"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import the styles
import { BiCheck } from "react-icons/bi";
import CameraSharing from '../components/CameraSharing';
import Chat from "../components/Chat"
import EmptyState from "../components/EmptyState";
import { AiOutlinePlus } from "react-icons/ai";

import Heading from "../components/Heading";
import useAssignModal from "../hooks/useAssignModal"
import useRentModal from "../hooks/useRentModal";
import { BiCalendar } from "react-icons/bi";
import { BiSolidBookContent } from "react-icons/bi";
import { BiSolidMap } from "react-icons/bi";
import Map from "../components/Map";
import { BiSolidCar } from "react-icons/bi";
import { useState } from "react";
import { BiSolidTruck } from "react-icons/bi";
import { BiSolidBriefcase } from "react-icons/bi";
import { useParams } from "react-router-dom";
import {  useEffect } from "react";
import { getRouteAsync } from "../features/driver/driverActions";
import { BiCar } from "react-icons/bi";
import {QRCodeCanvas} from 'qrcode.react';




function DetailsPage({routes ,isLoading}) {
const dispatch = useDispatch();
let { id } = useParams()
 let navigate = useNavigate();
 const { currentUser } = useSelector((state) => state.currentUser)
 const { location } = useSelector((state) => state.user)
const [isModalOpen, setIsModalOpen] = useState(false);
 const rentModal = useRentModal();
const [currentLocation, setCurrentLocation] = useState(null);
const [locationError, setLocationError] = useState(null);



  const tabs = [
    { id: 'chat', label: 'Chat' },
    { id: 'camera', label: 'Camera Sharing' },
  ];

 const [receiverCountryLabel, setReceiverCountryLabel] = useState('');
  const [senderCountyLabel, setSenderCountyLabel] = useState('');
const { drivers,route } = useSelector((state) => state.drivers)

console.log(route)

  useEffect(() => {
    
    if (id) {
      dispatch(getRouteAsync(id));

    }
  }, [dispatch, id]);





  const [selectedrouteId, setSelectedrouteId] = useState(null);


  const handleOpenModal = (routeId) => {
     setSelectedrouteId(routeId);
     setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedrouteId(null);
    setIsModalOpen(false);
  };


  return (
    <>
      <main className="pt-10 px-8 sm:px-16">
        <section className="pt-20">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Left: Delivery Status History */}
  <div className="rounded-lg shadow-lg bg-white p-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Delivery Status</h3>
    <table className="w-full text-sm text-left  border-gray-200">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="px-6 py-3 border-b">STATUS</th>
          <th className="px-6 py-3 border-b">DATE</th>
          <th className="px-6 py-3 border-b">HISTORY</th>
        </tr>
      </thead>
      <tbody>
        {route?.status_history?.map((status, index) => (
          <tr key={index} className="bg-white hover:bg-gray-100 cursor-pointer">
            <td className="px-6 py-4">{status.name}</td>
            <td className="px-6 py-4">{status.updated_at}</td>
            <td className="px-6 py-4 truncate max-w-xs">
              001b31892fad9556bfb3202335e
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Right: Map Section */}
  <div className="rounded-lg shadow-lg bg-white p-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Delivery Route</h3>
    <div className="h-[400px] w-full rounded-lg overflow-hidden bg-gray-200">
      {/* Replace this div with your Map component */}
      <Map
   senderCoordinates={route?.shipment?.sender_coordinates}
   receiverCoordinates={route?.shipment?.reciever_coordinates}
   driverCoordinates={route?.delivery?.driver_coordinates[0]} 
  height={100}
      />
    </div>
  </div>
</div>


          {/* Bottom Section */}

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
  {/* General Information - Slightly Bigger */}
  <div className="rounded-lg shadow-lg bg-white p-6 md:col-span-2">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">General Information</h3>
    <table className="w-full text-sm text-left border border-gray-200">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="px-4 py-3 border-b">PARCEL</th>
          <th className="px-4 py-3 border-b">FROM (A)</th>
          <th className="px-4 py-3 border-b">TO (B)</th>
          <th className="px-4 py-3 border-b">ORDER DATE</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b hover:bg-gray-100 cursor-pointer">
         <td className="px-4 py-4">{route?.shipment?.parcel}</td>
          <td className="px-4 py-4">{route?.shipment?.sender_location}</td>
          <td className="px-4 py-4">{route?.shipment?.reciever_location}</td>
          <td className="px-4 py-4">{route?.shipment?.created_at}</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Customer Info */}
  <div className="rounded-lg shadow-lg bg-white p-6 md:col-span-1">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Info</h3>
   <p className="text-gray-600"><strong>Name:</strong> {route?.shipment?.reciever_name}</p>
    <p className="text-gray-600"><strong>Contact:</strong> {route?.shipment?.reciever_contact}</p>
    <p className="text-gray-600"><strong>Email:</strong> {route?.shipment?.reciever_email}</p>route
  </div>

  {/* QR Code for Easy Access */}
  <div className="rounded-lg shadow-lg bg-white p-6 flex flex-col items-center md:col-span-1">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Delivery QR Code</h3>
    <QRCodeCanvas value={window.location.href} size={120} />
    <p className="text-gray-600 text-sm mt-2">Scan to track shipment</p>
  </div>
</div>

     
        </section>

       


       
      </main>

      <div className="rounded-sm col-span-1 md:col-span-1">

  <Chat currentUser={currentUser}  sender={route?.shipments?.sender_name}/>

 

</div>

    </>
  )
}

export default DetailsPage
