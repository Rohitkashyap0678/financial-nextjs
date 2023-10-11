import * as React from 'react'
import HeaderText from '../../common/HeaderText'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TableView from '../TableView'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1F2023' : '#1F2023',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  minHeight: '185px',
  borderRadius: '10px',
}))

const headers = [
  { name: 'Newest Farms' },
  { name: 'Hot Farms' },
  { name: 'Sponsored Farms' },
]

const NewestFarms = () => {
  return (
    <div>
      <HeaderText headerName="YIELD FARMS" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container className="p-6 pb-2" spacing={{ xs: 2, md: 3 }}>
          {headers.map((header, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
              <Item>
                <TableView
                  className="text-white text-start"
                  TableHeaderName={header.name}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Typography
        variant="h6"
        className=" typo-md text-end pr-6 cursor-pointer text-white"
      >
        View More
      </Typography>
    </div>
  )
}

export default NewestFarms
