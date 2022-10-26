import { Global, css } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#f5f5f7",
      // light: "",
      contrastText: "#1d1d1f",
    },
    secondary: {
      main: "#06c",
      // light: "",
      // contrastText: "",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 833,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const CustomTheme = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      {children}
    </ThemeProvider>
  );
};
