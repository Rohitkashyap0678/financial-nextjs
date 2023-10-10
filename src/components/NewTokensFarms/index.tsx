import * as React from 'react'
import HeaderText from '../../common/HeaderText'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TokensTableView from '../TokensTableView'

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
  { name: 'Newest Tokens' },
  { name: 'Doxxed' },
  { name: 'Sponsored Tokens' },
]

const NewTokensFarms = () => {
  return (
    <div className="">
      <HeaderText headerName="NEW TOKENS" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container className="p-6" spacing={{ xs: 2, md: 3 }}>
          {headers.map((header, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
              <Item>
                <TokensTableView
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
        className="text-end pr-6 text-white cursor-pointer"
      >
        View More
      </Typography>
    </div>
  )
}

export default NewTokensFarms
