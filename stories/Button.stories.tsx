import React from 'react'
import { Button, ButtonProps } from '../src'
import { Meta, Story } from '@storybook/react'
import { Stack, IconButton } from '@mui/material'
import {
    BiAbacus,
    BiCog,
    BiChevronDown,
    BiTrash,
    BiCloudUpload,
    BiCodeAlt,
    BiDotsVerticalRounded
} from 'react-icons/bi'

const meta: Meta<ButtonProps> = {
    title: 'Inputs/Button',
    component: Button,
}

export const Basic: Story<ButtonProps> = args => {
    return (
        <Stack direction='row' spacing={6}>
            <Button {...args}>Contained (default)</Button>
            <Button {...args} variant='outlined'>Outlined</Button>
            <Button {...args} variant='text'>Text</Button>
        </Stack>
    )
}

Basic.args = {
    disabled: false,
    rounded: false,
    size: 'medium'
}

export const Colors: Story<ButtonProps> = args => {
    return (
        <Stack direction='column' spacing={6}>
            <Stack direction='row' spacing={6}>
                <Button {...args} color='primary' variant='contained'>Primary</Button>
                <Button {...args} color='primary' variant='outlined'>Primary</Button>
                <Button {...args} color='primary' variant='text'>Primary</Button>
            </Stack>

            <Stack direction='row' spacing={6}>
                <Button {...args} color='secondary' variant='contained'>Secondary</Button>
                <Button {...args} color='secondary' variant='outlined'>Secondary</Button>
                <Button {...args} color='secondary' variant='text'>Secondary</Button>
            </Stack>

            <Stack direction='row' spacing={6}>
                <Button {...args} color='success' variant='contained'>Success</Button>
                <Button {...args} color='success' variant='outlined'>Success</Button>
                <Button {...args} color='success' variant='text'>Success</Button>
            </Stack>

            <Stack direction='row' spacing={6}>
                <Button {...args} color='error' variant='contained'>Error</Button>
                <Button {...args} color='error' variant='outlined'>Error</Button>
                <Button {...args} color='error' variant='text'>Error</Button>
            </Stack>

            <Stack direction='row' spacing={6}>
                <Button {...args} color='info' variant='contained'>Info</Button>
                <Button {...args} color='info' variant='outlined'>Info</Button>
                <Button {...args} color='info' variant='text'>Info</Button>
            </Stack>

            <Stack direction='row' spacing={6}>
                <Button {...args} color='warning' variant='contained'>Warning</Button>
                <Button {...args} color='warning' variant='outlined'>Warning</Button>
                <Button {...args} color='warning' variant='text'>Warning</Button>
            </Stack>

        </Stack>
    )
}

Colors.args = {
    disabled: false,
    rounded: false,
    size: 'medium'
}

export const WithIcon: Story<ButtonProps> = args => {
    return (
        <Stack direction='column' spacing={6}>
            <Stack direction='row' spacing={6}>
                <Button {...args} color='primary' variant='contained' startIcon={<BiAbacus />}>Get shipping estimate</Button>
                <Button {...args} color='primary' variant='outlined' startIcon={<BiAbacus />}>Get shipping estimate</Button>
                <Button {...args} color='primary' variant='text' startIcon={<BiAbacus />}>Get shipping estimate</Button>
            </Stack>

            <Stack direction='row' spacing={6}>
                <Button {...args} color='secondary' variant='contained' startIcon={<BiCog />} endIcon={<BiChevronDown />}>Settings</Button>
                <Button {...args} color='secondary' variant='outlined' startIcon={<BiCog />} endIcon={<BiChevronDown />}>Settings</Button>
                <Button {...args} color='secondary' variant='text' startIcon={<BiCog />} endIcon={<BiChevronDown />}>Settings</Button>
            </Stack>
        </Stack>
    )
}

WithIcon.args = {
    disabled: false,
    rounded: false,
    size: 'medium'
}

export const IconButtons: Story<ButtonProps> = args => {
    return (
        <Stack direction='row' spacing={6}>
            <IconButton {...args} color='primary'>
                <BiCodeAlt />
            </IconButton>
            <IconButton {...args} color='secondary'>
                <BiDotsVerticalRounded />
            </IconButton>
            <IconButton {...args} color='info'>
                <BiCloudUpload />
            </IconButton>
            <IconButton {...args} color='error'>
                <BiTrash />
            </IconButton>
        </Stack>
    )
}

IconButtons.args = {
    disabled: false,
    rounded: false,
    size: 'medium'
}

export default meta
