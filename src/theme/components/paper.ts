import { Theme, lighten } from '@mui/material/styles'

const paper = (theme: Theme) => {
  return {
    MuiPaper: {
      styleOverrides: {
        outlined: {
          borderColor: lighten(theme.palette.grey[100], 0.6)
        }
      }
    }
  }
}

export default paper
