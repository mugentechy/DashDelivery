

import { configureStore  } from '@reduxjs/toolkit'
import  user from './features/user/userSlice'
import  location from './features/user/userSlice'
import currentUser from './features/user/userSlice'
import shipments from './features/listings/listingsSlice'
import listing from './features/listing/listingSlice'

import drivers from './features/driver/driverSlice'
import delivery from './features/driver/driverSlice'


const store = configureStore({
  reducer: {
    user,
    location,
    currentUser,
    shipments,
    listing,
    delivery,
  
    drivers
  },
  devTools: process.env.NODE_ENV !== 'production',
})
export default store