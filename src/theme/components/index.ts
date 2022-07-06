import { Theme } from '@mui/material/styles'

import MuiButton from './button'
import MuiPaper from './paper'
import MuiCard from './card'
import MuiTypography from './typography'

const ComponentOverrides = (theme: Theme) => {

  const button = MuiButton(theme)
  const paper = MuiPaper(theme)
  const card = MuiCard(theme)
  const typography = MuiTypography(theme)

  return Object.assign(
    button,
    paper,
    card,
    typography,
  )
}

export default ComponentOverrides
