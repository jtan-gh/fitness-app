// themes/theme.ts

import { createTheme } from '@mui/material/styles';

const colors = {
  primaryColor: '#5E3AD4',
  accentColor: '#9A89B4',
  backgroundShade: '#FCF7FF',
  textShade: '#362B48',
  neutralBlack: '#222222',
  neutralWhite: '#F0F0F0',
}

const lightModeColors = {
  text: colors.neutralBlack,
  background: colors.neutralWhite,
};

const darkModeColors = {
  text: lightModeColors.background,
  background: lightModeColors.text,
};

const theme = createTheme({
  palette: {
    mode: 'light', // Initially set to light mode
    text: {
      primary: lightModeColors.text,
    },
    background: {
      default: lightModeColors.background,
    },
    ...colors,
    // Other palette options if required
  },
  typography: {
    fontFamily: 'var(--my-font-family)',
    h1: {
      fontSize: 'var(--h1-size)',
    },
    h2: {
      fontSize: 'var(--h2-size)',
    },
    h3: {
      fontSize: 'var(--h3-size)',
    },
    
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: colors.neutralWhite,
          // minHeight: '2em',
          backgroundColor: colors.neutralBlack,
        },
      },
    },
  },
});

// const theme = createTheme({
//   ...colors,

//   components: {
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: colors.primaryColor, // Change the AppBar background color to black
//         },
//       },
//     },
//   },
// });

export default theme;
