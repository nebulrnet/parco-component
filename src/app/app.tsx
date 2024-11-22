"use client";

import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeSettings } from "@/utils/theme";

import { store } from "@/store/store";

import "@/app/api"

const MyApp = ({ children }: { children: React.ReactNode }) => {
  const theme = ThemeSettings();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
