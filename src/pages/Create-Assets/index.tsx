import React from 'react'
import { EmptyGridBox, HeaderText } from '../../common'
import { Box } from '@mui/material'
import Container from '@mui/material/Container'
import CreateAssetTable from '../../components/CreateAssetTable'
import TopTable from '../../components/CreateAssetTable/TopTable'

export default function index() {
  return (
    <Box>
      <Container maxWidth="xl">
        <EmptyGridBox />
        <HeaderText headerName="CREATED TOKENS" />
        <TopTable />
        <CreateAssetTable />
      </Container>
    </Box>
  )
}
