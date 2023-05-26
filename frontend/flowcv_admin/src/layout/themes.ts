import { defaultTheme } from "react-admin";

export const lightTheme = {
  palette: {
    primary: {
      main: "#4f3cc9",
    },
    secondary: {
      light: "#5f5fc4",
      main: "#283593",
      dark: "#001064",
      contrastText: "#fff",
    },
    background: {
      default: "#fcfcfe",
    },
    mode: "light" as "light",
  },
  shape: {
    borderRadius: 10,
  },
  sidebar: {
    width: 220,
  },
  components: {
    ...defaultTheme.components,
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderLeft: "4px solid #fff",
          "&.RaMenuItemLink-active": {
            borderLeft: "4px solid #4f3cc9",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: "none",
        },
        root: {
          border: "1px solid #e0e0e3",
          backgroundClip: "padding-box",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: "#808080",
          backgroundColor: "#fff",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#f5f5f5",
        },
        barColorPrimary: {
          backgroundColor: "#d7d7d7",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:last-child td": { border: 0 },
        },
      },
    },
  },
  typography: {
    fontFamily: "poppins, sans-serif",
  },
  overrides: {
    "@global": {
      "@import": [
        "url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap)",
      ],
    },
  },
};
