import React from 'react'
import Header from '../../common/Header'
import EmptyGridBox from '../../common/EmptyGridBox'
import NewestFarms from '../NewestFarms'
import Container from '@mui/material/Container'

const Home = () => {
  // new lines
  return (
    <div>
      <Container maxWidth="xl">
        <Header />
        <EmptyGridBox />
        <NewestFarms />
      </Container>
    </div>
  )
}

export default Home
