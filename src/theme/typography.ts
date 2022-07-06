import { Theme } from '@mui/material/styles'

const Typography = (theme: Theme) => {
  const headdingFontFamily = [
    'Nunito',
    'Roboto',
    'Arial',
    'sans-serif',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(',')

  return {
    h1: {
      fontFamily: headdingFontFamily,
      fontWeight: 700,
      letterSpacing: '-1.5px',
      color: theme.palette.text.primary
    },
    h2: {
      fontFamily: headdingFontFamily,
      fontWeight: 700,
      letterSpacing: '-0.5px',
      color: theme.palette.text.primary
    },
    h3: {
      fontFamily: headdingFontFamily,
      fontWeight: 700,
      letterSpacing: 0,
      color: theme.palette.text.primary
    },
    h4: {
      fontFamily: headdingFontFamily,
      fontWeight: 700,
      letterSpacing: '0.25px',
      color: theme.palette.text.primary
    },
    h5: {
      fontFamily: headdingFontFamily,
      fontWeight: 700,
      letterSpacing: 0,
      color: theme.palette.text.primary
    },
    h6: {
      fontFamily: headdingFontFamily,
      fontWeight: 700,
      letterSpacing: '0.15px',
      color: theme.palette.text.primary
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0.15px',
      color: theme.palette.text.primary
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0.1px',
      color: theme.palette.text.secondary
    },
    body1: {
      fontSize: '0.875rem',
      letterSpacing: '0.15px',
      color: theme.palette.text.primary
    },
    body2: {
      lineHeight: 1.5,
      fontSize: '0.75rem',
      letterSpacing: '0.15px',
    },
    button: {
      letterSpacing: '0.3px',
      color: theme.palette.text.primary,
      textTransform: 'none'
    },
    caption: {
      letterSpacing: '0.4px',
      color: theme.palette.text.secondary
    },
    overline: {
      letterSpacing: '1px',
      color: theme.palette.text.secondary,
      textTransform: 'none'
    }
  }
}

export default Typography
