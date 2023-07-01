// third party imports
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

// inner imports
import authReducer from "./auth/features";
import resumeReducer from "./resume/features";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({ auth: authReducer, resume: resumeReducer }));

export const store = configureStore({
    reducer: {
        persistedReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
});

store.subscribe(() => {
    console.log("CUSTOMIZATION STORE CHANGED", store.getState().persistedReducer.resume.customization.skills);
});

export const persistor = persistStore(store);
