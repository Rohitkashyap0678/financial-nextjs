import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

import Paper from '@mui/material/Paper'
import React from 'react'
import Container from '@mui/material/Container'
import HeaderText from '../../common/HeaderText'
import EmptyGridBox from '../../common/EmptyGridBox'

import { Box } from '@mui/material'
import FirstChain from '../../components/Createassetdata/FirstChain'
import SecoundChain from '../../components/Createassetdata/SecoundChain'
import Divider from '@mui/material/Divider'
import ThirdChain from '../../components/Createassetdata/ThirdChain'
import FourthChain from '../../components/Createassetdata/FourthChain'
import FifthChain from '../../components/Createassetdata/FifthChain'
import SxithChain from '../../components/Createassetdata/SxithChain'
import { Header } from '../../common'
import Footer from '../../components/Footer/Footer'
import SeventhChain from '../../components/Createassetdata/SeventhChain'
import EightChain from '../../components/Createassetdata/EightChain'
export default function index() {
  return (
    <Box>
      <Header />
      <Container maxWidth="xl">
        <EmptyGridBox />
        <HeaderText headerName="CREATE YOUR TOKEN" />
        <Typography py={4} className="typo-md">
          Select Chain:
        </Typography>
        <TableContainer
          sx={{ background: '#1F2023', padding: '16px' }}
          component={Paper}
        >
          <FirstChain />
          <Divider className="vector-color" />
          <SecoundChain />
          <Divider className="vector-color" />
          <ThirdChain />
          <Divider className="vector-color" />
          <FourthChain />
          <Divider className="vector-color" />
          <FifthChain />
          <Divider className="vector-color" />
          <SxithChain />
          <Divider className="vector-color" />
          <SeventhChain />
          <Divider className="vector-color" />
          <EightChain />
        </TableContainer>
      </Container>
      <Footer />
    </Box>
  )
}
