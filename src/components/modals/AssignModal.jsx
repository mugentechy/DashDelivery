import useAssignModal from "../../hooks/useAssignModal";
import axios from 'axios'
import { url } from "../../utils/url"
import {  useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { authUserAsync } from '../../features/user/userActions'
import { useForm } from 'react-hook-form'
import { toast } from "react-hot-toast";
import { useCallback, useMemo } from "react";
import { BiCar } from "react-icons/bi";
import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Button from "../Button";

function AssignModal({isOpen, onClose,selectedListingId}) {


const { drivers } = useSelector((state) => state.drivers)
  const [open, setOpen] = useState(true)
  const [isLoading, setIsLoading] = useState(false);
  const { error } = useSelector((state) => state.user)
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const assignModal = useAssignModal();


const onSubmit = async (driverId) => {
  try {
    // Send a POST request to your Flask route with the selected driver's ID
    await axios.post(`${url}/accept_delivery/${selectedListingId}/${driverId}`);
    
    // Assuming a successful response, you can handle further actions (e.g., displaying a success message)
    toast.success('Delivery accepted successfully');
  } catch (error) {
    // Handle error, display an error message, etc.
    toast.error('Error accepting delivery');
  }
};






  const bodyContent = (
    <div className="flex flex-col gap-4">
<table className="w-full text-sm text-left ">
  <thead className="text-xs uppercase  ">
    <tr>
      <th scope="col" className="px-6 py-3">Name</th>
      <th scope="col" className="px-6 py-3"># of Assign Orders</th>
      <th scope="col" className="px-6 py-3">Mobile</th>
    </tr>
  </thead>
  <tbody>
    {drivers?.map((driver) => (
      <tr
        key={driver.id}
        onClick={() => onSubmit(driver.id)}
        className="bg-white  border-b  hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
      >
        <td className="px-6 py-4 font-medium ">
          {driver.name}
        </td>
        <td className="px-6 py-4 text-center">
          <BiCar className="text-xl text-blue-600" />
        </td>
        <td className="px-6 py-4 font-medium ">
          {driver.mobile}
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  )




  return (
    <>
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Assign Order"
      actionLabel="Cancel"
      onClose={onClose}
      
      body={bodyContent}

    />
    </>
  )
}

export default AssignModal
