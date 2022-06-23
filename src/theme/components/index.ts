import { Theme } from '@mui/material/styles'

import MuiButton from './button'
import MuiPaper from './paper'

const ComponentOverrides = (theme: Theme) => {

  const button = MuiButton(theme)
  const paper = MuiPaper(theme)

  return Object.assign(
    button,
    paper,
  )
}

export default ComponentOverrides
