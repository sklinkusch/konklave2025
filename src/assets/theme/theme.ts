export const themeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  colorSchemes: {
    light: {
      palette: {
        // mode: "light",
        primary: {
          main: "#3f51b5",
        },
        secondary: {
          main: "#f50057",
        },
      },
      typography: {
        h1: {
          fontSize: "2.5rem",
          fontWeight: 600,
        },
        h2: {
          fontSize: "2rem",
          fontWeight: 550,
        },
        h3: {
          fontSize: "1.8rem",
          fontWeight: 500,
        },
        h4: {
          fontSize: "1.5rem",
        },
        h5: {
          fontSize: "1.3rem",
        },
        h6: {
          fontSize: "1rem",
        },
      },
      components: {
        MuiTable: {
          styleOverrides: {
            root: {
              width: "100%",
            },
          },
        },
        MuiTableHead: {
          styleOverrides: {
            root: {
              width: "100%",
            },
          },
        },
        MuiTableBody: {
          styleOverrides: {
            root: {
              width: "100%",
            },
          },
        },
        MuiTableRow: {
          styleOverrides: {
            root: {
              width: "100%",
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
              width: "20%",
              "&.flag-cell": {
                "& img": {
                  height: "1rem",
                  border: "1px solid black",
                  display: "inline-block",
                  marginInline: "5px",
                  marginInlineStart: 0,
                },
              },
            },
          },
        },
      },
    },
    dark: {
      palette: {
        // mode: "dark",
        primary: {
          main: "#ffffff",
        },
        secondary: {
          main: "rgba(255,255,255,0.7)",
        },
      },
      typography: {
        h1: {
          fontSize: "2.5rem",
          fontWeight: 600,
        },
        h2: {
          fontSize: "2rem",
          fontWeight: 550,
        },
        h3: {
          fontSize: "1.8rem",
          fontWeight: 500,
        },
        h4: {
          fontSize: "1.5rem",
        },
        h5: {
          fontSize: "1.3rem",
        },
        h6: {
          fontSize: "1rem",
        },
      },
      components: {
        MuiTable: {
          styleOverrides: {
            root: {
              width: "100%",
            },
          },
        },
        MuiTableHead: {
          styleOverrides: {
            root: {
              width: "100%",
            },
          },
        },
        MuiTableBody: {
          styleOverrides: {
            root: {
              width: "100%",
            },
          },
        },
        MuiTableRow: {
          styleOverrides: {
            root: {
              width: "100%",
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
              width: "20%",
              "&:nth-of-type(4)": {
                "& img": {
                  height: "1rem",
                  border: "1px solid white",
                  display: "inline-block",
                  marginInline: "5px",
                  marginInlineStart: 0,
                },
              },
            },
          },
        },
      },
    },
  },
};
