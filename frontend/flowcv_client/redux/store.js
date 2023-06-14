import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import authReducer from "./auth/features";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({ auth: authReducer }));

export const store = configureStore({
    reducer: {
        persistedReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
