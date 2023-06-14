import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import authReducer from "./features";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
