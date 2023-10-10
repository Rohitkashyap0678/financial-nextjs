import React from 'react'
import Header from '../../common/Header'
import EmptyGridBox from '../../common/EmptyGridBox'
import NewestFarms from '../NewestFarms'
import Container from '@mui/material/Container'
import Footer from '../../Footer/Footer'

const Home = () => {
  // new linesss
  return (
    <div>
      <Container maxWidth="xl">
        <Header />
        <EmptyGridBox />
        <NewestFarms />
      </Container>
      <Footer />
    </div>
  )
}

export default Home
