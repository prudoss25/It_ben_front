import { configureStore } from '@reduxjs/toolkit'
import sidebarDrawerReducer from '../services/reducers/SidebarDrawer/SidebarDrawerSlice';
import eventReducer from '../services/reducers/Event/EventSlice';
import sponsorReducer from '../services/reducers/Sponsor/SponsorSlice';
import townReducer from '../services/reducers/Town/TownSlice';
import userReducer from '../services/reducers/User/UserSlice';
import authReducer from '../services/reducers/Auth/AuthSlice';


const store = configureStore({
  reducer: {
    auth:authReducer,
    user:userReducer,
    sidebarDrawer:sidebarDrawerReducer,
    event:eventReducer,
    sponsor:sponsorReducer,
    town:townReducer
  },
})

export default store;