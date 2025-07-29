import { ButtonProps, createTheme } from '@mui/material';
import { ThemeOptions, Theme } from '@mui/material/styles';

// 1. Extend the Button variant
interface ExtendedButtonProps extends ButtonProps {
  variant?: 'white';
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    white: true;
  }
}

// 2. Extend the MUI theme to support customColors
declare module '@mui/material/styles' {
  interface Theme {
    customColors: typeof colors;
  }
  interface ThemeOptions {
    customColors?: typeof colors;
  }
}

const fontSizes = {
  h1: '3.5rem',
  h2: '2.5rem',
  h3: '2rem',
  h4: '1.5rem',
  body: '1.2rem',
};

const fontFamily = 'Arial, Helvetica, sans-serif';

const colors = {
  primaryColor: '#5E3AD4',
  accentColor: '#9A89B4',
  backgroundShade: '#FCF7FF',
  textShade: '#362B48',
  neutralBlack: '#222222',
  neutralWhite: '#F0F0F0',
};

const lightModeColors = {
  text: colors.neutralBlack,
  background: colors.neutralWhite,
};

const darkModeColors = {
  text: lightModeColors.background,
  background: lightModeColors.text,
};

// 3. Create the theme and include customColors
const theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: lightModeColors.text,
    },
    background: {
      default: lightModeColors.background,
    },
    primary: {
      main: colors.primaryColor,
    },
  },
  spacing: 2,
  typography: {
    fontFamily: fontFamily,
    h1: {
      fontSize: fontSizes.h1,
      fontWeight: 800,
      color: colors.primaryColor,
    },
    h2: {
      fontSize: fontSizes.h2,
      fontWeight: 700,
      color: colors.primaryColor,
    },
    h3: {
      fontSize: fontSizes.h3,
      fontWeight: 600,
      color: colors.primaryColor,
    },
    h4: {
      fontSize: fontSizes.h4,
      fontWeight: 500,
      color: colors.primaryColor,
    },
    button: {
      textTransform: 'none',
    },
    body1: {
      padding: '1rem 0',
    }
  },
  breakpoints: {
    values: {
      xs: 480,
      sm: 768,
      md: 1024,
      lg: 1200,
      xl: 1900,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        html: {
          overflowX: 'hidden',
          width: '100%',
        },
        body: {
          h1: theme.typography.h1,
          h2: theme.typography.h2,
          h3: theme.typography.h3,
          h4: theme.typography.h4,
          p: theme.typography.body1,
          margin: 0,
          padding: 0,
          overflowX: 'hidden',
          width: '100%',
          fontFamily: fontFamily,
        },
      }),
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: colors.neutralWhite,
          backgroundColor: colors.neutralBlack,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'white' },
          style: {
            color: colors.neutralWhite,
            border: `1px solid ${colors.neutralWhite}`,
            '&:hover': {
              color: colors.primaryColor,
              backgroundColor: colors.neutralWhite,
            },
            '&:active': {
              backgroundColor: colors.neutralWhite,
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: 'none', // Optional: prevent all-caps
          fontWeight: 600,
          borderRadius: 8,
        },
        sizeSmall: {
          width: 120,
          height: 40,
          padding: '0 1rem',
        },
        sizeMedium: {
          width: 130,
          height: 48.5,
          padding: '0 1.25rem',
        },
        sizeLarge: {
          width: 150,
          height: 58,
          padding: '0 1.5rem',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'white', // this fills in the whole input box
          borderRadius: 8, // optional
        },
        input: {
          // Padding sizes per input size
          '&.MuiInputBase-inputSizeSmall': {
            padding: '0.5rem 2rem',
          },
          '&.MuiInputBase-inputSizeMedium': {
            padding: '0.75rem 2.25rem',
          },
          '&.MuiInputBase-inputSizeLarge': {
            padding: '1rem 3.5rem',
          },
        },
      },
    },
  },
  customColors: colors,
});

export default theme;
