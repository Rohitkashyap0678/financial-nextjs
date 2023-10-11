import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import EllipseIcon from '../../common/EllipseIcon'
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
import CalculateIcon from '@mui/icons-material/Calculate'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import LanguageIcon from '@mui/icons-material/Language'
import SearchIcon from '@mui/icons-material/Search'
import CampaignIcon from '@mui/icons-material/Campaign'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import SubscriptIcon from '@mui/icons-material/Subscript'
import AprCalculatorPopup from '../../common/AprCalculatorPopup'
import { CustomInfo } from '../../common'

export default function YieldData() {
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
          <EllipseIcon />
        </TableCell>
        <TableCell className="!p-3" align="right">
          <Typography noWrap className="typo-md">
            <CustomInfo /> STK | RWD
          </Typography>
          <Typography noWrap className="typo-lg pt-2">
            TOKE/BNB
          </Typography>
        </TableCell>
        <TableCell className="!p-3">
          <CustomButton
            classname="inherit"
            onClick={handleClickOpen}
            // style={{ position: 'inherit' }}
            name="Stake"
          />
        </TableCell>
        <TableCell className="!p-3 typo-sm">
          <Typography noWrap>My Earned</Typography>
          <Typography className="">0</Typography>
        </TableCell>
        <TableCell className="!p-3 typo-sm">
          <Typography>Earn</Typography>
          <Typography
            variant="subtitle2"
            noWrap
            color="#00F904"
            className="whitespace-nowrap"
          >
            APR <RocketLaunchIcon className=" text-[--primary-color]" /> Up to
            40%
            <CalculateIcon className="text-[--primary-color]" />
          </Typography>
        </TableCell>
        <TableCell className="!p-3 typo-sm">
          <Typography noWrap>Staked Assets</Typography>
          <Typography>78,000</Typography>
        </TableCell>

        <TableCell className="!p-3 typo-sm">
          <Typography noWrap>Available Rewards</Typography>
          <Typography>0000</Typography>
        </TableCell>
        <TableCell className="!p-3 typo-sm">
          <Typography>Staked</Typography>
          <Typography>000</Typography>
        </TableCell>
        <TableCell className="!p-3 typo-sm ">
          <Typography>
            <CustomInfo /> Penalty: 2%
          </Typography>
          <Typography noWrap>
            <CustomInfo /> Rewards Maturation: 60 Seconds
          </Typography>
          <Typography noWrap>Start: 10/10/2023 End: 15/10/2023</Typography>
        </TableCell>
        <TableCell className="!p-3">
          <Box
            className="flex gap-[2px]"
            sx={{
              padding: '10px',
              display: 'flex',
              margin: '4px',
              background: '#151617',
              borderRadius: '10px',
              color: 'gray',
            }}
          >
            <TelegramIcon />
            <SubscriptIcon className="text-[--primary-color]" />
            <LanguageIcon className="text-[--primary-color]" />
          </Box>
          <Box
            className="flex gap-[2px]"
            sx={{
              padding: '10px',
              display: 'flex',
              margin: '4px',
              background: '#151617',
              borderRadius: '10px',
              color: 'gray',
            }}
          >
            <SearchIcon className="text-[--primary-color]" />
            <CampaignIcon className="text-[--primary-color]" />
            <InsertDriveFileIcon className="text-[--primary-color]" />
          </Box>
        </TableCell>
        <TableCell
          className="!p-3"
          sx={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}
        >
          <Typography className="flex gap-1 mb-3 items-center">
            <ThumbUpAltIcon className="text-[--primary-color]" /> 100
          </Typography>
          <Typography className="flex gap-1 items-center">
            <ThumbDownAltIcon className="text-[--secondary-color]" /> 100
          </Typography>
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
      <Container maxWidth="xl">
        <TableContainer
          className="!p-4"
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
