import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Box, Typography, TypographyProps } from '@mui/material'

const meta: Meta<TypographyProps> = {
    title: 'Data display/Typography',
    component: Typography
}

export default meta

export const Types: Story<TypographyProps> = args => {
    return (
        <Box sx={{ width: '100%', maxWidth: 1000 }}>
            <Typography {...args} variant="h1" gutterBottom>
                H1. Heading
            </Typography>

            <Typography variant="h2" gutterBottom >
                H2. Heading
            </Typography>

            <Typography variant="h3" gutterBottom >
                H3. Heading
            </Typography>

            <Typography variant="h4" gutterBottom >
                H4. Heading
            </Typography>

            <Typography variant="h5" gutterBottom >
                H5. Heading
            </Typography>

            <Typography variant="h6" gutterBottom >
                H6. Heading
            </Typography>

            <Typography variant="subtitle1" gutterBottom >
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
            </Typography>

            <Typography variant="subtitle2" gutterBottom >
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
            </Typography>

            <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>

            <Typography variant="body2" gutterBottom>
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>

            <Typography variant="button" display="block" gutterBottom>
                button text
            </Typography>

            <Typography variant="caption" display="block" gutterBottom>
                caption text
            </Typography>

            <Typography variant="overline" display="block" gutterBottom>
                overline text
            </Typography>
        </Box>
    );
}

Types.args = {

}
