import { Be_Vietnam_Pro } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { PRIMARYCOLOR } from "../config";

const be_Vietnam_Pro = Be_Vietnam_Pro({
  weight: ["100", "200","300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: PRIMARYCOLOR,
    },
  },

  typography: {
    fontFamily: be_Vietnam_Pro.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
