import { configureStore } from '@reduxjs/toolkit'
import sidebarDrawerReducer from '../features/SidebarDrawer/SidebarDrawerSlice';
import eventReducer from '../features/Event/EventSlice';
import sponsorReducer from '../features/Sponsor/SponsorSlice';
import townReducer from '../features/Town/TownSlice';
import userReducer from '../features/User/UserSlice';


const store = configureStore({
  reducer: {
    user:userReducer,
    sidebarDrawer:sidebarDrawerReducer,
    event:eventReducer,
    sponsor:sponsorReducer,
    town:townReducer
  },
})

export default store;