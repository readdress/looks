import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Box, Typography } from '@mui/material'
import { Card, CardActions, CardContent, Button } from '../src'

const meta: Meta = {
    title: 'Surfaces/Card',
    component: Card,
}

export default meta

export const Basic: Story = args => {
    return (
        <Box sx={{ maxWidth: '320px' }}>
            <Card {...args}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    
                    <Typography variant="h5" component="div">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>

                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button>Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

Basic.args = {
    raised: false
}
