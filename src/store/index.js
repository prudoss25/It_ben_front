import { configureStore, combineReducers} from '@reduxjs/toolkit'
import sidebarDrawerReducer from '../services/reducers/SidebarDrawer/SidebarDrawerSlice';
import eventReducer from '../services/reducers/Event/EventSlice';
import sponsorReducer from '../services/reducers/Sponsor/SponsorSlice';
import townReducer from '../services/reducers/Town/TownSlice';
import serviceReducer from '../services/reducers/Service/ServiceSlice';
import userReducer from '../services/reducers/User/UserSlice';
import authReducer from '../services/reducers/Auth/AuthSlice';
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage: storage
}
export const rootReducers = combineReducers({
  auth:authReducer,
  user:userReducer,
  sidebarDrawer:sidebarDrawerReducer,
  event:eventReducer,
  sponsor:sponsorReducer,
  town:townReducer,
  service:serviceReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})
export const persistor = persistStore(store)