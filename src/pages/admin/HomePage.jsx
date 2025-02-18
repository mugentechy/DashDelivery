import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getListingAsync } from "../../features/listing/listingActions";
import { AiOutlinePlus } from "react-icons/ai";
import { BiCar } from "react-icons/bi";
import Map from "../../components/Map";
import Button from "../../components/Button";
import Chat from "../../components/Chat"
import {QRCodeCanvas} from 'qrcode.react';

function HomePage({ listings, isLoading }) {
  const dispatch = useDispatch();
  let { id } = useParams();
  let navigate = useNavigate();

  const { listing } = useSelector((state) => state.listing);
  const { drivers } = useSelector((state) => state.drivers);
  const { currentUser } = useSelector((state) => state.currentUser)
  



  useEffect(() => {
    if (id) {
      dispatch(getListingAsync(id));
    }
  }, [dispatch, id]);



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
        {listing?.status_history?.map((status, index) => (
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
  senderCoordinates={listing?.shipment?.sender_coordinates}
  receiverCoordinates={listing?.shipment?.reciever_coordinates}
  driverCoordinates={listing?.shipment?.deliveries[0]?.driver_coordinates} // Added driver coordinates
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
          <td className="px-4 py-4">{listing?.shipment?.parcel}</td>
          <td className="px-4 py-4">{listing?.shipment?.sender_location}</td>
          <td className="px-4 py-4">{listing?.shipment?.reciever_location}</td>
          <td className="px-4 py-4">{listing?.shipment?.created_at}</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Customer Info */}
  <div className="rounded-lg shadow-lg bg-white p-6 md:col-span-1">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Info</h3>
    <p className="text-gray-600"><strong>Name:</strong> {listing?.shipment?.reciever_name}</p>
    <p className="text-gray-600"><strong>Contact:</strong> {listing?.shipment?.reciever_contact}</p>
    <p className="text-gray-600"><strong>Email:</strong> {listing?.shipment?.reciever_email}</p>
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

   <Chat currentUser={currentUser}  sender={listing?.shipment?.sender_name}/>

 

</div>
    </>
  );
}

export default HomePage;
