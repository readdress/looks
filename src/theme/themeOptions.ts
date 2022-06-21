import getPalette from './palette'
import spacing from './spacing'
import shadows from './shadows'
import breakpoints from './breakpoints'
import { ThemeOptions, PaletteMode } from '@mui/material'
import { deepmerge } from '@mui/utils'

const getThemeOptions = (colorMode: PaletteMode = 'light', userThemeOptions?: ThemeOptions): ThemeOptions => {
  
  const userThemeConfig: any = Object.assign({}, userThemeOptions)

  const userFontFamily = userThemeConfig.typography?.fontFamily

  delete userThemeConfig.components
  delete userThemeConfig.typography

  const palette = getPalette(colorMode)

  return deepmerge(
    {
      palette: palette,
      typography: {
        fontFamily: userFontFamily || [
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
      },
      shadows: shadows(colorMode),
      ...spacing,
      breakpoints: breakpoints(),
      shape: {
        borderRadius: 4
      },
      mixins: {
        toolbar: {
          minHeight: 64
        }
      }
    },
    userThemeConfig
  )
}

export default getThemeOptions
