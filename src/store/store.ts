import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import fundsReducer from './slices/funds';
export const store = configureStore({
  reducer: {
    fundsReducer: fundsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const rootReducer = combineReducers({
  fundsReducer: fundsReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
