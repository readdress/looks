import { Card as MuiCard, CardProps, styled } from '@mui/material'
export {
    CardHeader,
    CardHeaderProps,
    CardContent,
    CardContentProps,
    CardMedia,
    CardMediaProps,
    CardActions,
    CardActionsProps,
    CardActionArea,
    CardActionAreaProps,
    Collapse,
    CollapseProps,
} from '@mui/material'

export const Card = styled(MuiCard)<CardProps>(({ theme, raised }) => {
    return {
        boxShadow: raised ? theme.shadows[4] : theme.shadows[1]
    }
})
