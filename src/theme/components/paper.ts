import { Theme, lighten } from '@mui/material/styles'

const paper = (theme: Theme) => {
  const colorMode = theme.palette.mode

  const borderColor = colorMode === 'dark' ? lighten(theme.palette.grey[700], 0.05) : lighten(theme.palette.grey[100], 0.6)

  return {
    MuiPaper: {
      styleOverrides: {
        outlined: {
          borderColor
        }
      }
    }
  }
}

export default paper
