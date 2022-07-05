import InputBase, { InputBaseProps } from '@mui/material/InputBase'
import { styled, alpha } from '@mui/material/styles'


export { default as FormLabel } from './formLabel'
export { default as FormHelperText } from './formHelperText'

export { FormControl } from '@mui/material'

export interface InputProps extends InputBaseProps {
    rounded?: boolean;
}

export default styled(InputBase, {
    shouldForwardProp: prop => prop !== 'rounded',
})<InputProps>(({theme, color, rounded, size, multiline}) => {
    let borderColor = theme.palette.grey[300]
    let backgroundColor: string = theme.palette.common.white
    let iconFill = alpha(theme.palette.text.primary, 0.7)

    if (theme.palette.mode === 'dark') {
        borderColor = alpha(theme.palette.common.white, 0.2)
        backgroundColor = alpha(theme.palette.common.white, 0.015)
        iconFill = alpha(theme.palette.text.primary, 0.6)
    }

    let inputPadding =`${theme.spacing(2.5)} ${theme.spacing(2.4)}`
    let shadowSize = '2px'
    let iconSize = '1.5rem'

    if (size === 'small') {
        inputPadding =`${theme.spacing(1.5)} ${theme.spacing(2)}`
        shadowSize = '1px'
        iconSize = '1.3rem'
    }
    
    return {
        backgroundColor,
        borderRadius: rounded && !multiline ? '5em' : theme.shape.borderRadius,
        border: `1px solid ${borderColor}`,
        color: theme.palette.text.primary,
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ], {
            duration: 150
        }),

        '& .MuiInputBase-input': {
            padding: inputPadding,
        },

        '&:focus, &:focus-within': {
            boxShadow: `${theme.palette[color||'primary'].main} 0 0 0 ${shadowSize}`,
            borderColor: theme.palette[color||'primary'].main,
        },

        '&.MuiInputBase-adornedStart': {
            paddingLeft: theme.spacing(2),
        },

        '&.MuiInputBase-adornedEnd': {
            paddingRight: theme.spacing(2),
        },

        // Disabled
        '&.Mui-disabled': {
            opacity: 0.55,
            color: theme.palette.text.disabled,
        },
        '&.Mui-disabled .MuiInputBase-input.Mui-disabled': {
            color: theme.palette.text.disabled,
        },

        // Error
        '&.Mui-error': {
            boxShadow: `${theme.palette.error.main} 0 0 0 ${shadowSize}`,
            borderColor: theme.palette.error.light,

            '&:focus, &:focus-within': {
                boxShadow: `${theme.palette.error.main} 0 0 0 ${shadowSize}`,
            }
        },
        '&.Mui-error .MuiInputBase-input, &.Mui-error .MuiInputBase-input.Mui-disabled': {
            color: theme.palette.error.main,
            '-webkit-text-fill-color': theme.palette.error.main
        },

        '& .MuiSvgIcon-root': {
            fontSize: iconSize,
            fill: iconFill,
        }
    }
})
