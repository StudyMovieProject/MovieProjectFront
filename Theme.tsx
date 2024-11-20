import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    // primary: {
    //   main: #efefef,
    // },
    // secondary: {
    //   main: '#..',
    // },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'black',
          lineHeight: 0,
          '&.Mui-selected': {
            color: 'black',
          },
        },

      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          // backgroundColor: '#F3EEEA',
          boxShadow: 'none',
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '1.8rem',
          '@media (min-width:600px)': {
            minHeight: '2rem',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'black',
          '&.Mui-selected': {
            color: '#776B5D',
          },
          indicator: {
            backgroundColor: '#776B5D',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#776B5D',


        },
      },
    },
  },
});

