import { Theme } from '@mui/material'

export default (theme: Theme) => {
    return {
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(4)
                }
            }
        },

        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(4),
                    paddingTop: 0,
                }
            }
        }
    }
}
