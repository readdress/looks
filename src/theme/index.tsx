import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import getThemeOptions from './themeOptions'
import DirectionComponent from './direction'
import GlobalStyling from './globalStyles'
import componentOverides from './components'
import typography from './typography'
import { createTheme, responsiveFontSizes, ThemeOptions, ThemeProvider, PaletteMode } from '@mui/material'
import { deepmerge } from '@mui/utils'
import { ReactNode } from 'react'

interface ThemeComponentProps {
  children: ReactNode
  themeOptions?: ThemeOptions
  colorMode?: PaletteMode
}

const ThemeComponent = (props: ThemeComponentProps) => {

    const themeOptions = getThemeOptions(props.colorMode, props.themeOptions)

    let theme = createTheme(themeOptions)

    const mergeComponentOverrides = deepmerge({...componentOverides(theme)}, props.themeOptions?.components)

    const mergedTypography = deepmerge(typography(theme), props.themeOptions?.typography)

    theme = createTheme(theme, {
      components: mergeComponentOverrides,
      typography: mergedTypography,
    })

    theme = responsiveFontSizes(theme)

    return (
      <ThemeProvider theme={theme}>
        <DirectionComponent direction={themeOptions.direction}>
          <CssBaseline />
          <GlobalStyles styles={() => GlobalStyling() as any} />
          {props.children}
        </DirectionComponent>
      </ThemeProvider>
    )
}

export default ThemeComponent
