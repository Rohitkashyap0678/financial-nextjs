import React from 'react'
import Container from '@mui/material/Container'
import HeaderText from '../../common/HeaderText'
import EmptyGridBox from '../../common/EmptyGridBox'
import YieldData from '../../components/YieldData'
import Header from '../../common/Header'

export default function index() {
  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <EmptyGridBox />
        <HeaderText headerName="YIELD FARMS" />
        <div>
          <YieldData />
        </div>
      </Container>
    </div>
  )
}
