import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 550,
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.3rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          'width': '100%'
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          'width': '100%'
        }
      }
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          'width': '100%'
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          'width': '100%'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          'width': '20%'
        }
      }
    }
  }
};