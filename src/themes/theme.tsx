import { ButtonProps, createTheme } from '@mui/material';

interface ExtendedButtonProps extends ButtonProps {
  variant?: 'white';
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    white: true;
  }
}

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
    primary: {
      main: colors.primaryColor,
    },
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
    button: {
      textTransform: 'none',
    },
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
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: colors.neutralWhite,
          // minHeight: '2em',
          backgroundColor: colors.neutralBlack,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'white' },
          style: {
            color: 'var(--neutralWhite)',
            border: '1px solid var(--neutralWhite)',
            '&:hover': {
              color: 'var(--primaryColor)',
              backgroundColor: 'var(--neutralWhite)',
            },
            '&:active': {
              backgroundColor: 'neutralWhite', // Active (pressed) color
            },
            // Add more styles as needed
          },
        },
      ],
      
      styleOverrides: {
        root: {
          '&.MuiButton-sizeSmall': {
            padding: '0.5rem 2rem',
          },
          '&.MuiButton-sizeMedium': {
            padding: '0.75rem 2.25rem',
          },
          '&.MuiButton-sizeLarge': {
            padding: '1rem 3.5rem',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.MuiInput-sizeSmall': {
            padding: '0.5rem 2rem',
          },
          '&.MuiInput-sizeMedium': {
            padding: '0.75rem 2.25rem',
          },
          '&.MuiInput-sizeLarge': {
            padding: '1rem 3.5rem',
          },
        },
        input: {
          backgroundColor: 'white',
        },
    },
    },
  },
});

export default theme;
