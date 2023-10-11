// Footer.tsx
import { Grid, Typography, Box, Container } from '@mui/material'
import React from 'react'

const footerItems = [
  'Development Email: info@cakefinance.com',
  '$CAKE Token',
  'General Statement',
  '© CAKEFinance.com 2020-2023',
]

const Footer: React.FC = () => {
  return (
    <Box py={3} sx={{ width: '100%', background: '#151618' }}>
      <Container sx={{ alignItems: 'right' }} maxWidth="xl">
        <Grid container spacing={2}>
          {footerItems.map((item, index) => (
            <Grid item xs={12} sm={2} key={index}>
              <Typography
                noWrap
                className="typo-sm"
                variant="body2"
                textAlign={'right'}
                color="white"
              >
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
