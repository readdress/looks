import { PaletteMode, alpha } from '@mui/material'

const DefaultPalette = (mode: PaletteMode = 'light') => {
  let background = '#F4F5FA'
  let paperBackground = '#fff'

  let primaryColor = '#2D3748'
  let secondaryColor = '#718096'
  let disabledColor = '#A0AEC0'

  if (mode === 'dark') {
    background = '#1b2431'
    paperBackground = '#303a4e'

    primaryColor = '#CBD5E0'
    secondaryColor = '#A0AEC0'
    disabledColor = '#718096'
  }

  return {
    common: {
      black: '#000',
      white: '#fff'
    },
    mode: mode,
    primary: {
      light: '#49cf5a',
      main: '#30b640',
      dark: '#238d31',
      contrastText: '#fff'
    },
    secondary: {
      light: '#edf1f7',
      main: '#cdd6e3',
      dark: '#acbbd0',
      contrastText: '#080c12'
    },
    success: {
      light: '#66bb6a',
      main: '#4caf50',
      dark: '#43a047',
      contrastText: '#fff'
    },
    error: {
      light: '#ef5350',
      main: '#f44336',
      dark: '#e53935',
      contrastText: '#fff'
    },
    warning: {
      light: '#ffb74d',
      main: '#ffa726',
      dark: '#ff9800',
      contrastText: '#fff'
    },
    info: {
      light: '#42a5f5',
      main: '#2196f3',
      dark: '#1e88e5',
      contrastText: '#fff'
    },
    grey: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030'
    },
    text: {
      primary: primaryColor,
      secondary: secondaryColor,
      disabled: disabledColor,
    },
    divider: alpha(primaryColor, 0.12),
    background: {
      paper: paperBackground,
      default: background
    },
    action: {
      active: alpha(primaryColor, 0.54),
      hover: alpha(primaryColor, 0.04),
      selected: alpha(primaryColor, 0.08),
      disabled: alpha(primaryColor, 0.3),
      disabledBackground: alpha(primaryColor, 0.18),
      focus: alpha(primaryColor, 0.12)
    }
  }
}

export default DefaultPalette
