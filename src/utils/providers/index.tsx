"use client";

import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CacheRegistry from "./CacheRegistry";

const theme = createTheme({});

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
