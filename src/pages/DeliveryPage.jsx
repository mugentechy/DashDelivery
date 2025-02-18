import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeliveryAsync } from "../features/driver/driverActions";
import { updateUserLocation } from "../features/user/userActions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import ReactPaginate from "react-paginate";
import { BiCar } from "react-icons/bi";
import Button from "../components/Button";
import EmptyState from "../components/EmptyState";
import { url } from "../utils/url";

function DeliveryPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Redux State
  const { currentUser } = useSelector((state) => state.currentUser);
  const { delivery } = useSelector((state) => state.delivery);

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  
  useEffect(() => {
    if (currentUser?.id) {
      dispatch(getDeliveryAsync(currentUser?.id));
    }
  }, [dispatch, currentUser]);

  // Handle location and API submission
const acceptSubmit = async (driverId, status) => {
  try {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const formattedLocation = [longitude, latitude]; // Ensure correct format

        await dispatch(updateUserLocation({ latitude, longitude }));

        // Send status update with formatted location
        await axios.post(`${url}/delivery/status`, {
          driverId,
          status,
          location: formattedLocation, // Send as [longitude, latitude]
        });

        toast.success(`Delivery ${status} successfully`);
        dispatch(getDeliveryAsync(currentUser?.id)); // Refresh deliveries
      },
      (error) => {
        console.error("Error fetching location:", error.message);
        toast.error("Please enable location services.");
      }
    );
  } catch (error) {
    toast.error(error?.response?.data?.error || "An error occurred");
  }
};

  const handleAccept = (driverId) => acceptSubmit(driverId, "ACCEPTED");
  const handleDecline = (driverId) => acceptSubmit(driverId, "DECLINED");
  const navigateToViewPage = (id) => navigate(`/details/${id}`);

  if (!delivery || delivery.length === 0) {
    return <EmptyState title="All clear" subtitle="No tasks available." />;
  }

  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <h2 className="text-4xl font-semibold pb-5">Product and Service</h2>

      <div className="bg-white mt-4 shadow-md rounded-lg overflow-hidden">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">From</th>
                <th className="px-6 py-3">To</th>
                <th className="px-6 py-3">Vehicle</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {delivery.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((row) => (
                <tr key={row.id} className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900">{row.parcel}</td>
                  <td className="px-6 py-4">{row.reciever_location}</td>
                  <td className="px-6 py-4">{row.sender_location}</td>
                  <td className="px-6 py-4"><BiCar /></td>
                  <td className="px-6 py-4">{row.status}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-4">
                      {row.status === "ACCEPTED" ? (
                        <Button label="View Details" onClick={() => navigateToViewPage(row.id)} />
                      ) : (
                        <>
                          <Button label="Accept" onClick={() => handleAccept(row.id)} />
                          <Button label="Decline" onClick={() => handleDecline(row.id)} />
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            breakLabel="..."
            pageCount={Math.ceil(delivery.length / itemsPerPage)}
            onPageChange={({ selected }) => setCurrentPage(selected)}
            containerClassName="pagination"
            activeClassName="active"
          />
        </div>
      </div>
    </main>
  );
}

export default DeliveryPage;
