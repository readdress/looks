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
                    sx={{ padding: 4 }}
                    {...args}
                >
                    {`elevation=${elevation}`}
                    <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged.
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
