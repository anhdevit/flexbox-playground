
import AsyncStorage from '@react-native-community/async-storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER
} from "redux-persist";
import rootReducer from './';
import { ThunkAction } from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth',], //Things u want to persist
  blacklist: ['form', 'search', 'checkout', 'board'], //Things u dont
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    // },
    thunk: {
      // extraArgument: myCustomApiService
    }
  })
})

export let persistor = persistStore(store)
