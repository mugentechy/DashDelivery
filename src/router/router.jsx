import {  useEffect } from "react";
import Navbar from  '../components/navbar/Navbar'
import Footer from  '../components/navbar/Footer'
import LoginModal from  '../components/modals/LoginModal'
import RegisterModal from '../components/modals/RegisterModal';
import AssignModal from '../components/modals/AssignModal';
import { getDriversAsync } from "../features/driver/driverActions";
import RentModal from '../components/modals/RentModal';
import DriverModal from '../components/modals/DriverModal';
import { Toaster } from "react-hot-toast";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/home";
import AdminHomePage from "../pages/admin/HomePage";
import ContactForm from "../pages/ContactForm";
import DriversPage from "../pages/DriversPage";
import TrackPage from "../pages/Track";
import DetailsPage from "../pages/DetailsPage";
import DeliveryPage from "../pages/DeliveryPage";
import OrdersPage from "../pages/OrdersPage";
import AboutPage from "../pages/about";
import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUserAsync } from '../features/user/userActions'
import useAuthListener from '../hooks/use-auth-listener'
import { getShipmentsAsync } from "../features/listings/listingsActions";




function Router() {

const { user } = useAuthListener()


const dispatch = useDispatch();
const { shipments,isLoading } = useSelector((state) => state.shipments)
const { drivers } = useSelector((state) => state.drivers)
 const { location } = useSelector((state) => state.location)



  useEffect(() => {
    
    if (user?.user_id) {
      dispatch(getCurrentUserAsync(user.user_id));
      dispatch(getShipmentsAsync(user.user_id))
      dispatch(getDriversAsync())
    }
  }, [dispatch, user]);



  return (
    <>
       <BrowserRouter>
           <Toaster />
    <LoginModal />
      <RegisterModal />
        <RentModal />
        <AssignModal/>
          <DriverModal />
      

   <div className="">
      <Routes>
      <Route path='/' element={ <><Navbar/><HomePage listings={shipments} isLoading={isLoading}/> </>} />
      <Route path='/details/:id' element={ <><Navbar/><DetailsPage listings={shipments} isLoading={isLoading}/> </>} />
      <Route path='/route' element={ <><Navbar/><DeliveryPage /> </>} />
      <Route path='/dispatch/:id' element={ <><Navbar/><AdminHomePage drivers={drivers} /> </>} />
      <Route path='/contact' element={ <><Navbar/><ContactForm /> </>} />
      <Route path='/drivers' element={ <><Navbar/><DriversPage drivers={drivers}/> </>} />
      <Route path='/orders' element={<><Navbar/><OrdersPage parcel={shipments} /> </>} />
      <Route path='/track' element={ <><Navbar/><TrackPage /> </>}  />
      <Route path='/about' element={ <><Navbar/><AboutPage /> </>} />
      <Route path="*" element={<NotFound />} />

      </Routes>
        
          <Footer/>
          </div>
        </BrowserRouter>
        </>

  )
}

export default Router
