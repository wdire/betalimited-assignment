import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c24b5a",
    },
    text: {
      primary: "#000",
      secondary: "#000",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
