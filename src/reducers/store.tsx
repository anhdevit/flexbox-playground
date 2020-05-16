
import AsyncStorage from '@react-native-community/async-storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from "redux-persist";
import { rootReducer } from './';
import { useDispatch } from 'react-redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['',], //Things u want to persist
  blacklist: ['form'], //Things u dont
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    thunk: {
    }
  })
})

export type AppDispacth = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispacth>(); // Export a hook that can be resused to resolve types

export let persistor = persistStore(store)
