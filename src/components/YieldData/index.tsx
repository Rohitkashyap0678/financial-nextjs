import * as React from 'react'

import TableContainer from '@mui/material/TableContainer'

import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import { TableData } from './TableData'

export default function YieldData() {
  return (
    <Container maxWidth="xl">
      <TableContainer
        sx={{ height: '495px', background: '#1F2023' }}
        component={Paper}
      >
        <TableData />
        <TableData />
        <TableData />
        <TableData />
        <TableData />
        <TableData />
        <TableData />
      </TableContainer>
    </Container>
  )
}
