import React from 'react'
import { Paper, Box } from '@mui/material'
import { Meta, Story } from '@storybook/react'
import { DescriptionList, DescriptionListProps, Description, Button } from '../src'

const meta: Meta<DescriptionListProps> = {
    title: 'Data display/Description list',
    component: DescriptionList,
    argTypes: {
        labelPlacement: {
            options: [
                'left',
                'top',
            ],
            control: { type: 'select' },
        },
        actionPlacement: {
            options: [
                'right',
                'bottom',
            ],
            control: { type: 'select' },
        }
    }
}

export default meta

export const Basics: Story<DescriptionListProps> = ({ width, ...args }) => {
    return (
        <Paper sx={{ width, p: 4 }} elevation={6}>
            <DescriptionList {...args} rowSpacing={9}>
                <Description label='Name'>Musa Mahmoud Jingo</Description>
                
                <Description
                    label='Email'
                    actions={<Button size='small'>Verify email</Button>}
                >
                    musajmahmoud@gmail.com
                </Description>
                
                <Description label='Phone number'>+971 52 816 6131</Description>
                
                <Description label='Role'>Administrator</Description>

                <Description
                    label='Additional information'
                    helperText='Anything else about about this person'
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. 
                </Description>
            </DescriptionList>
        </Paper>
    )
}

Basics.args = {
    width: 700,
    bordered: false,
    labelPlacement: 'left',
    actionPlacement: 'right'
}

export const Columns: Story<DescriptionListProps> = ({ width, ...args }) => {
    return (
        <Box sx={{ width }}>
            <DescriptionList {...args} rowSpacing={10}>
                <Description label='name'>Musa Mahmoud Jingo</Description>
                
                <Description label='email'>musajmahmoud@gmail.com</Description>
                
                <Description label='phone number'>+971 52 816 6131</Description>
                
                <Description label='Role'>Administrator</Description>
            </DescriptionList>
        </Box>
    )
}

Columns.args = {
    width: 700,
    bordered: false,
    columns: 1,
}