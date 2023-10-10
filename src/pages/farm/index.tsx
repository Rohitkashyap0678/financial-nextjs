import React from 'react'
import Container from '@mui/material/Container'
import HeaderText from '../../common/HeaderText'
import EmptyGridBox from '../../common/EmptyGridBox'
import YieldData from '../../components/YieldData'

export default function index() {
  return (
    <div>
      <Container maxWidth="xl">
        <EmptyGridBox />
        <HeaderText headerName="YIELD FARMS" />
        {/* filter by========== */}
        <div>
          <YieldData />
        </div>
      </Container>
    </div>
  )
}
