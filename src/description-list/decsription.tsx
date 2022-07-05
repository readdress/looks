import React, { useContext } from 'react'
import { Typography, Stack, StackProps, Box, BoxProps, Grid, GridProps, styled } from '@mui/material'
import DescriptionListContext from './context'

export interface DescriptionProps extends GridProps {
    label: string
    helperText?: string
    actions?: React.ReactNode
    labelPlacement?: 'left' | 'top'
    actionPlacement?: 'right' | 'bottom'
    bordered?: boolean
}

const Label = styled(Box, {
    shouldForwardProp: prop => prop !== 'placement',
})<BoxProps & {placement?: 'left' | 'top'}>(({placement = 'left', theme}) => {
    return ({
        width: placement === 'left' ? '40%' : '100%',
        minWidth: 120,
        maxWidth: 240,
        flexShrink: 0,
        ...(placement === 'left' ? { paddingRight: theme.spacing(5) } : { paddingBottom: theme.spacing(1) })
    })
})

const Value = styled(Box)<BoxProps & { actionsPlacement?: 'right' | 'bottom' }>(({ actionsPlacement = 'right' }) => ({
    display: 'flex',
    flexDirection: actionsPlacement === 'right' ? 'row' : 'column',
    flexGrow: 1,
}))

const Data = styled(Box)<BoxProps>(() => ({
    flexGrow: 1
}))

const Actions = styled(Stack, {
    shouldForwardProp: prop => prop !== 'placement',
})<StackProps & {placement?: 'right' | 'bottom'}>(({placement = 'right', theme}) => ({
    ...(placement === 'bottom' ? { width: '100%' } : { maxWidth: 180 }),
    ...(placement === 'right' ? { paddingLeft: theme.spacing(5) } : { paddingTop: theme.spacing(3) })
}))

const Container = styled(Box, {
    shouldForwardProp: prop => ['bordered', 'labelPlacement'].indexOf(prop as string) < 0,
})<BoxProps & {bordered?: boolean, labelPlacement?: 'left' | 'top'}>(({bordered = false, labelPlacement = 'left', theme}) => ({
    display: 'flex',
    flexDirection: labelPlacement === 'left' ? 'row' : 'column',
    paddingBottom: bordered ? theme.spacing(4) : 0,
    borderBottom: bordered ? `1px solid ${theme.palette.divider}` : 'none',
}))

const Description: React.FC<DescriptionProps> = props => {
    const {
        children,
        label,
        helperText,
        actions,
        bordered,
    } = props

    const context = useContext(DescriptionListContext)

    const columns = context.columns || 1

    const labelPlacement = props.labelPlacement || context.labelPlacement
    const actionPlacement = props.actionPlacement || context.actionPlacement;

    return (
        <Grid xs={12 / columns} item>
            <Container bordered={bordered} labelPlacement={labelPlacement}>
                <Label placement={labelPlacement}>
                    <Typography color='text.secondary' fontWeight={500}>
                        { label }
                    </Typography>

                    { helperText && (
                        <Typography color='text.disabled'>
                            { helperText }
                        </Typography>
                    )}
                </Label>

                <Value actionsPlacement={actionPlacement}>
                    <Data>{ children }</Data>
                    { actions && (
                        <Actions
                            spacing={3}
                            placement={actionPlacement}
                            direction={actionPlacement === 'right' ? 'column' : 'row'}
                        >
                            { actions }
                        </Actions>
                    )}
                </Value>
            </Container>
        </Grid>
    )
}

export default Description
