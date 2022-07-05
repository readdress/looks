import { FormHelperText, FormHelperTextProps, styled } from '@mui/material'

export default styled(FormHelperText)<FormHelperTextProps>(({ theme }) => {
    return {
        marginLeft: 0,
        marginRight: 0,
        fontSize: '0.875rem',
        marginTop: theme.spacing(1.25),

        '&.MuiFormHelperText-sizeSmall': {
            fontSize: '0.75rem'
        },

        '&.Mui-disabled': {
            opacity: 0.55,
            color: theme.palette.text.disabled,
        }
    }
})
