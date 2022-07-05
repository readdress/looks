import React from 'react'
import { SvgIcon, Stack, Typography, Box, Grid } from '@mui/material'
import { Story, Meta } from '@storybook/react'
import { BiUserCircle, BiSend, BiMapPin } from 'react-icons/bi'
import { Input, InputProps, FormLabel, FormHelperText, FormControl } from '../src'

const meta: Meta<InputProps> = {
    title: 'Inputs/Input',
    component: Input,
    argTypes: {
        placeholder: {
            control: 'text'
        },
        disabled: {
            control: 'boolean'
        },
        rounded: {
            control: 'boolean'
        },
        error: {
            control: 'boolean'
        },
        color: {
            options: [
                'primary',
                'secondary',
                'error',
                'info',
                'success',
                'warning',
            ],
            control: { type: 'select' },
        },
        size: {
            options: [
                'medium',
                'small',
            ],
            control: { type: 'select' },
        },
    },
}

export const Basic: Story<InputProps> = args => {
    return (
        <Input {...args} />
    )
}

Basic.args = {
    disabled: undefined,
    rounded: undefined,
    error: undefined,
    placeholder: 'Placeholder text',
}

export const Addons: Story<InputProps> = args => {
    return (
        <Stack direction='column' spacing={6}>
            <Input {...args} startAdornment={<SvgIcon component={BiUserCircle} />}/>
            <Input {...args} endAdornment={<SvgIcon component={BiSend} />}/>
            <Input
                {...args}
                startAdornment={<SvgIcon component={BiMapPin} />}
                endAdornment={<Typography variant='body1'>km</Typography>}
            />
        </Stack>
    )
}

Addons.args = {
    ...Basic.args,
}

export const Form: Story<InputProps> = ({ placeholder, error, disabled, ...args}) => {
    return (
        <Box component='form' width='560px'>
            <Grid
                container
                width='100%'
                columnSpacing={5}
                rowSpacing={5}
            >
                <Grid item xs={6}>
                    <FormControl required fullWidth error={error} disabled={disabled}>
                        <FormLabel>First name</FormLabel>
                        <Input {...args} placeholder='First name' />
                        <FormHelperText>First name is required</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl required fullWidth error={error} disabled={disabled}>
                        <FormLabel>Last name</FormLabel>
                        <Input {...args}  placeholder='Last name' />
                        <FormHelperText>Last name is required</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl required fullWidth error={error} disabled={disabled}>
                        <FormLabel>Email</FormLabel>
                        <Input {...args} placeholder='Email' />
                        <FormHelperText>Enter your emal here</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl required fullWidth error={error} disabled={disabled}>
                        <FormLabel>Phone number</FormLabel>
                        <Input {...args} placeholder='Phone number' />
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <FormControl required fullWidth error={error} disabled={disabled}>
                        <FormLabel>Location information</FormLabel>
                        <Input
                            {...args}
                            multiline
                            minRows={3}
                            placeholder='Location details'
                        />
                        <FormHelperText>Whatever else you might want to say about this person</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    )
}

Form.args = {
    ...Basic.args,
}

export default meta
