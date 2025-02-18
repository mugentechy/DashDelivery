import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import ReactPaginate from "react-paginate";
import { getShipmentsAsync } from "../features/listings/listingsActions";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../components/Button";
import AssignModal from "../components/modals/AssignModal";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function OrdersPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.currentUser);
  const { shipments, isLoading } = useSelector((state) => state.shipments);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const [activeTab, setActiveTab] = useState("NEW");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedListingId, setSelectedListingId] = useState(null);

  useEffect(() => {
    if (currentUser?.id) {
      dispatch(getShipmentsAsync(currentUser?.id));
    }
  }, [dispatch, currentUser]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleRowClick = (id) => {
    navigate(`/dispatch/${id}`);
  };



    const handleOpenModal = (listingId) => {
    setSelectedListingId(listingId);
    setIsModalOpen(true);
  };
  console.log(shipments)

  const handleCloseModal = () => {
    setSelectedListingId(null);
    setIsModalOpen(false);
  };



  const summaryCounts = shipments?.reduce((acc, shipment) => {
    acc[shipment.status] = (acc[shipment.status] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.keys(summaryCounts || {}).map((status, index) => ({
    name: status,
    value: summaryCounts[status],
    color: COLORS[index % COLORS.length],
  }));

  const filteredShipments = shipments?.filter((shipment) => shipment.status === activeTab) || [];
  const slicedShipments = filteredShipments.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <main className="pt-5 max-w-7xl mx-auto px-8">
      {/* Summary & Pie Chart Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          {Object.keys(summaryCounts).map((status) => (
            <div key={status} className="p-4 bg-gray-100 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">{status}</h3>
              <p className="text-2xl font-bold">{summaryCounts[status]}</p>
            </div>
          ))}
        </div>
        <PieChart width={300} height={300}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Status Tabs */}
      <div className="flex space-x-4 mb-5">
        {["NEW", "ASSIGNED", "ACCEPTED", "Returned"].map((status) => (
          <button
            key={status}
            className={`px-4 py-2 rounded-md ${
              activeTab === status ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(status)}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Shipments Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Parcel</th>
                <th className="px-6 py-3">Receiver Name</th>
                <th className="px-6 py-3">Receiver Contact</th>
                <th className="px-6 py-3">Receiver Country</th>
                <th className="px-6 py-3">Sender Country</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {slicedShipments.map((shipment) => (
                <tr
                  key={shipment.id}
                  className="bg-white border-b hover:bg-gray-100 cursor-pointer"
                 
                >
                  <td className="px-6 py-4">{shipment.parcel}</td>
                  <td className="px-6 py-4">{shipment.reciever_name}</td>
                  <td className="px-6 py-4">{shipment.reciever_contact}</td>
                  <td className="px-6 py-4">{shipment.reciever_location}</td>

                  <td className="px-6 py-4">{shipment.sender_location}</td>
<td>
  {shipment.status === "NEW" ? (
    <Button
      onClick={() => handleOpenModal(shipment?.id)}
      outline
      label="Assign"
    />
  ) : (
    <Button
      onClick={() => handleRowClick(shipment.id)}
      outline
      label="View"
    />
  )}
</td>



                </tr>
              ))}
            </tbody>
          </table>

          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={Math.ceil(filteredShipments.length / itemsPerPage)}
            onPageChange={handlePageChange}
            containerClassName="pagination flex justify-center space-x-2 mt-4"
            activeClassName="font-bold"
          />
        </div>
         <AssignModal isOpen={isModalOpen} onClose={handleCloseModal} selectedListingId={selectedListingId} />
      </div>
    </main>
  );
}

export default OrdersPage;
