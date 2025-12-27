import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a1a1a",
      light: "#424242",
      dark: "#000000",
    },
    secondary: {
      main: "#d4af37",
      light: "#e5c158",
      dark: "#b8941f",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: '"Archivo", "Roboto", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 800,
      letterSpacing: "-0.015em",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "0.875rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
          },
        },
        contained: {
          "&:hover": {
            boxShadow: "0 8px 24px rgba(212, 175, 55, 0.4)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
