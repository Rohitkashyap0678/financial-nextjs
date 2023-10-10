import React from 'react'
import Container from '@mui/material/Container'
import HeaderText from '../../common/HeaderText'
import EmptyGridBox from '../../common/EmptyGridBox'
import YieldData from '../../components/YieldData'
import FilterBy from '../../components/FilterBy'

export default function index() {
  return (
    <div>
      <Container maxWidth="xl">
        <EmptyGridBox />
        <HeaderText headerName="YIELD FARMS" />
        {/* filter by========== */}
        <FilterBy />
        <div>
          <YieldData />
        </div>
      </Container>
    </div>
  )
}
