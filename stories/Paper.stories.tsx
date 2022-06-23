import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Paper, PaperProps, Grid } from '@mui/material'

const meta: Meta<PaperProps> = {
    title: 'Surfaces/Paper',
    component: Paper,
}

const Template: Story<PaperProps> = args => <Paper {...args} sx={{width: 210, height: 210}} />

export const Outlined = Template.bind({})
Outlined.args = {
    variant: 'outlined'
}

export const Squared = Template.bind({})
Squared.args = {
    square: true
}

export const Elevation: Story<PaperProps> = (args) => {
    return (
        <Grid
            container
            spacing={10}
            maxWidth={1000}
            mx='auto'
        >
        {[0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((elevation) => (
            <Grid item xs={6}>
                <Paper
                    key={elevation}
                    elevation={elevation}
                    sx={{
                        lineHeight: '50px',
                        padding: 3
                    }}
                    {...args}
                >
                    {`elevation=${elevation}`}
                </Paper>
            </Grid>
        ))}
        </Grid>
    )
}
Elevation.args = {
    square: false,
    variant: 'elevation'
}

export default meta
