"use client";

import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CircularProgress } from '@mui/material';
import { ReactNode } from "react";

export function Providers({ children } : { children : ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={
        <CircularProgress />
        } persistor={persistor}>
          {children}
      </PersistGate>
    </Provider>
  );
}

