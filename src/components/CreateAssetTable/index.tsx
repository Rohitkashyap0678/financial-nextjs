import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'

import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { CustomButton } from '../../common/Custom/CustomButton'
import { Box } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import LanguageIcon from '@mui/icons-material/Language'
import SearchIcon from '@mui/icons-material/Search'
import CampaignIcon from '@mui/icons-material/Campaign'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import Twitter from '../../img/twitter.png'
import AprCalculatorPopup from '../../common/AprCalculatorPopup'

export default function CreateAssetTable() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleClickOpen = () => {
    setIsDialogOpen(true)
  }

  const handleClose = () => {
    setIsDialogOpen(false)
  }

  const renderTableRow = () => {
    return (
      <TableRow>
        <TableCell className="!p-3">
          <Typography
            height="40px"
            width="40px"
            variant="h4"
            noWrap
            component="a"
            href="/"
            className="md:mr-2 mr-0 flex bg-white rounded-full md:w-12 md:h-12 h-8 w-8"
          ></Typography>
        </TableCell>
        <TableCell className="!p-3" align="right">
          <Typography noWrap className="typo-md">
            Token Name
          </Typography>
          <Typography noWrap className="typo-lg pt-3 ">
            Cake
          </Typography>
        </TableCell>
        <TableCell className="!p-3">
          <Typography noWrap className="typo-md">
            price
          </Typography>
          <Typography noWrap className="typo-lg pt-3 ">
            $0,099
          </Typography>
        </TableCell>
        <TableCell className="!p-3 typo-sm">
          <Typography noWrap className="typo-md">
            Date
          </Typography>
          <Typography noWrap className="typo-lg pt-3 ">
            10/10/2023
          </Typography>
        </TableCell>
        <TableCell className="!p-3 typo-sm">
          <Typography noWrap className="text-xs font-semibold">
            Staked Assets
          </Typography>
          <Typography className="text-xs font-semibold">78,000</Typography>
        </TableCell>

        <TableCell className="!p-3 ">
          <Box className="flex justify-center items-center">
            <Box
              className="flex gap-[2px]  justify-between"
              sx={{
                padding: '4px 6px',
                display: 'flex',
                margin: '4px',
                background: '#151617',
                borderRadius: '20px',
                color: 'gray',
              }}
            >
              <TelegramIcon />
              <img
                alt="twitter"
                className=" text-[--primary-color]"
                src={Twitter.src}
              />
              <LanguageIcon className="text-[--primary-color]" />
            </Box>
            <Box
              className="flex gap-[2px] justify-between"
              sx={{
                padding: '4px 6px',
                display: 'flex',
                margin: '4px',
                background: '#151617',
                borderRadius: '20px',
                color: 'gray',
              }}
            >
              <SearchIcon className="text-[--primary-color] opacity-50" />
              <CampaignIcon className="text-[--primary-color]" />
              <InsertDriveFileIcon className="text-[--primary-color] opacity-50" />
            </Box>
          </Box>
        </TableCell>

        <TableCell
          className="!p-3"
          sx={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}
        >
          <Box className="flex justify-center items-center">
            <Typography className="flex gap-1 mr-2 items-center">
              <ThumbUpAltIcon className="text-[--primary-color]" /> 100
            </Typography>
            <Typography className="flex gap-1 items-center">
              <ThumbDownAltIcon className="text-[--secondary-color]" /> 100
            </Typography>
          </Box>
        </TableCell>

        <TableCell>
          <CustomButton
            classname="inherit"
            onClick={handleClickOpen}
            name="Buy"
          />
        </TableCell>
        <TableCell>
          <CustomButton
            classname="inherit !whitespace-nowrap !w-full"
            onClick={handleClickOpen}
            name="Create Your"
          />
        </TableCell>
      </TableRow>
    )
  }

  // Use the map function to create three copies of the table row
  const tableRows = Array(8)
    .fill(null)
    .map((_, index) => (
      <React.Fragment key={index}>{renderTableRow()}</React.Fragment>
    ))

  return (
    <>
      <Container maxWidth="xl" className="!px-5 !py-0 bg-[#1F2023]">
        <TableContainer
          sx={{ height: '800px', background: '#1F2023' }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>{tableRows}</TableHead>
          </Table>
        </TableContainer>
      </Container>
      <AprCalculatorPopup open={isDialogOpen} handleClose={handleClose} />
    </>
  )
}
