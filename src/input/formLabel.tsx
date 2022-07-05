import { FormLabel, FormLabelProps, styled } from '@mui/material'
import { red } from '@mui/material/colors'

export default styled(FormLabel)<FormLabelProps>(({ theme }) => {
    return {
        display: 'block',
        fontWeight: 500,
        marginBottom: theme.spacing(1.5),

        '& .MuiFormLabel-asterisk': {
            color: red[500]
        },

        '&.Mui-focused': {
            color: 'inherit',
        },

        '&.Mui-error': {
            color: theme.palette.error.main,
        },

        '&.Mui-disabled': {
            opacity: 0.55,
            color: theme.palette.text.disabled,
        }
    }
})
