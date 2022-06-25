import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'

export interface ButtonProps extends MuiButtonProps {
    rounded?: boolean;
}

export default styled(Button, {
    shouldForwardProp: prop => prop !== 'rounded',
})<ButtonProps>(({rounded, theme}) => ({
    borderRadius: rounded ? '10em' : theme.shape.borderRadius
}));
