import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Switch, SwitchProps, FormGroup, FormControlLabel } from '@mui/material'
import { IOSSwitch } from '../src'

const meta: Meta<SwitchProps> = {
    title: 'Inputs/Switch',
    component: Switch,
}

export default meta

export const Basic: Story<SwitchProps> = args => {
    return <Switch {...args} />
}

Basic.args = {
    disabled: false,
    checked: false,
}

export const WithLabel: Story<SwitchProps> = () => {
    return (
        <FormGroup>
            <FormControlLabel control={<Switch />} label="Label" />
            <FormControlLabel disabled control={<Switch />} label="Disabled" />
        </FormGroup>
    )
}

export const IOSStyles: Story<SwitchProps> = args => {
    return <IOSSwitch {...args} />
}

IOSStyles.args = {
    disabled: false,
    checked: false,
}
