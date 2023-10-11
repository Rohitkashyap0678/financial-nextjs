import React from 'react'
import Header from '../../common/Header'
import EmptyGridBox from '../../common/EmptyGridBox'
import NewestFarms from '../NewestFarms'
import Container from '@mui/material/Container'

import NewTokensFarms from '../NewTokensFarms'
import Footer from '../../Footer/Footer'

const Home = () => {
  // Define an array of components to render conditionally
  const componentsToRender = [
    <EmptyGridBox key="emptyGridBox" />,
    <NewestFarms key="newestFarms" />,
    <NewTokensFarms key="newTokensFarms" />,
  ]

  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        {/* Use the map function to render components */}
        {componentsToRender.map((component) => component)}
      </Container>
      <Footer />
    </div>
  )
}

export default Home
