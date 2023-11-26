import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#f7f9fc",
    },
    primary: {
      main: "#c24b5a",
    },
    grey: {
      "700": "#565959",
    },
    text: {
      primary: "#000000BD",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
