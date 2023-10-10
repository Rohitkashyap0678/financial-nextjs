import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

import Paper from '@mui/material/Paper'
import React from 'react'
import Container from '@mui/material/Container'
import HeaderText from '../../common/HeaderText'
import EmptyGridBox from '../../common/EmptyGridBox'

import Createassetdata from '../../components/Createassetdata'

export default function index() {
  return (
    <div>
      <Container maxWidth="xl">
        <EmptyGridBox />
        <HeaderText headerName="CREATE YOUR TOKEN" />
        <Typography variant="subtitle2" color="WHITE">
          Select Chain:
        </Typography>
        <TableContainer
          sx={{ height: '495px', background: '#1F2023' }}
          component={Paper}
        >
          <Createassetdata />
        </TableContainer>
      </Container>
    </div>
  )
}
