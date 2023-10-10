import React from 'react'
import Header from '../../common/Header'
import EmptyGridBox from '../../common/EmptyGridBox'
import NewestFarms from '../NewestFarms'
import Container from '@mui/material/Container'
import NewTokensFarms from '../NewTokensFarms'

const Home = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Header />
        <EmptyGridBox />
        <NewestFarms />
        <NewTokensFarms />
      </Container>
    </div>
  )
}

export default Home
