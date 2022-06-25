import { PaletteMode } from '@mui/material'

const DefaultPalette = (mode: PaletteMode = 'light') => {
  const lightColor = '58, 53, 65'
  const darkColor = '231, 227, 252'
  const mainColor = mode === 'light' ? lightColor : darkColor

  const defaultBgColor = () => {
    if (mode === 'light') {
      return '#F4F5FA'
    } else if (mode === 'dark') {
      return '#1b2431'
    } else return '#F4F5FA'
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
      light: '#4caf50',
      main: '#43a047',
      dark: '#388e3c',
      contrastText: '#fff'
    },
    error: {
      light: '#e53935',
      main: '#d32f2f',
      dark: '#c62828',
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
      50: '#edf1f7',
      100: '#cdd6e3',
      200: '#acbbd0',
      300: '#8aa0bf',
      400: '#6985af',
      500: '#506c95',
      600: '#3f5474',
      700: '#2d3c51',
      800: '#1b2431',
      900: '#080c12',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030'
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.68)`,
      disabled: `rgba(${mainColor}, 0.38)`
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === 'light' ? '#fff' : '#303a4e',
      default: defaultBgColor()
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.3)`,
      disabledBackground: `rgba(${mainColor}, 0.18)`,
      focus: `rgba(${mainColor}, 0.12)`
    }
  }
}

export default DefaultPalette
