import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from '@mui/material'

const meta: Meta<ButtonProps> = {
    title: 'Inputs/Button',
    component: Button,
}

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Contained = Template.bind({})
Contained.args = {
    variant: 'contained',
    children: 'Contained',
}

export const Outlined = Template.bind({})
Outlined.args = {
    variant: 'outlined',
    children: 'Outlined',
}

export const Text = Template.bind({})
Text.args = {
    variant: 'text',
    children: 'Text',
}

export default meta
