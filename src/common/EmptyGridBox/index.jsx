import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1F2023' : '#1F2023',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  minHeight: '145px',
  color: theme.palette.text.secondary,
  borderRadius: '10px',
}))

const EmptyGridBox = () => {
  return (
    <Container maxWidth="xl" className="p-6">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* there is an empty arry for showong empty grid box */}
          {Array.from(Array(4)).map((_, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
              <Item></Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
export default EmptyGridBox
