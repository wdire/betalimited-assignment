"use client";

import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CacheRegistry from "./CacheRegistry";
import theme from "../theme";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store";

function Providers({ children }: React.PropsWithChildren) {
  return (
    <CacheRegistry options={{ key: "main-app" }}>
      <MuiThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <CssBaseline />
          {children}
        </ReduxProvider>
      </MuiThemeProvider>
    </CacheRegistry>
  );
}

export default Providers;
