import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
const base = createTheme({
  palette: {
    primary: {
      main: "#e50914",
    },
  },
});

const theme = responsiveFontSizes(base);

export default theme;
