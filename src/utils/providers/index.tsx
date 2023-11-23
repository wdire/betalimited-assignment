"use client";

import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CacheRegistry from "./CacheRegistry";
import theme from "../theme";

function Providers({ children }: React.PropsWithChildren) {
  return (
    <CacheRegistry options={{ key: "main-app" }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheRegistry>
  );
}

export default Providers;
