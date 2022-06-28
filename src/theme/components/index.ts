import { Theme } from '@mui/material/styles'

import MuiButton from './button'
import MuiPaper from './paper'
import MuiTypography from './typography'

const ComponentOverrides = (theme: Theme) => {

  const button = MuiButton(theme)
  const paper = MuiPaper(theme)
  const typography = MuiTypography(theme)

  return Object.assign(
    button,
    paper,
    typography,
  )
}

export default ComponentOverrides
