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
import { CustomInfo } from '../../common'
import Twitter from '../../img/twitter.png'
import AprCalculatorPopup from '../../common/AprCalculatorPopup'

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
          <Typography noWrap className="typo-lg pt-3 ">
            TOKE/BNB
          </Typography>
        </TableCell>
        <TableCell className="!p-3">
          <CustomButton
            classname="inherit"
            onClick={handleClickOpen}
            name="Stake"
          />
        </TableCell>
        <TableCell className="!p-3 typo-sm">
          <Typography noWrap className="text-xs font-semibold">
            My Earned
          </Typography>
          <Typography className="text-xs font-semibold">0</Typography>
        </TableCell>
        <TableCell className="!p-3 typo-sm">
          <Typography className="text-xs font-semibold">Earn</Typography>
          <Typography
            variant="subtitle2"
            noWrap
            color="#00F904"
            className="whitespace-nowrap text-xs font-semibold"
          >
            APR <RocketLaunchIcon className="w-5 h-5 text-[--primary-color]" />{' '}
            Up to 40%
            <CalculateIcon className="w-5 pl-[1px] h-5 text-[--primary-color] opacity-90" />
          </Typography>
        </TableCell>
        <TableCell className="!p-3 typo-sm">
          <Typography noWrap className="text-xs font-semibold">
            Staked Assets
          </Typography>
          <Typography className="text-xs font-semibold">78,000</Typography>
        </TableCell>

        <TableCell className="!p-3 typo-sm">
          <Typography noWrap className="text-xs font-semibold">
            Available Rewards
          </Typography>
          <Typography className="text-xs font-semibold">0000</Typography>
        </TableCell>
        <TableCell className="!p-3 typo-sm">
          <Typography className="text-xs font-semibold">Staked</Typography>
          <Typography className="text-xs font-semibold">000</Typography>
        </TableCell>
        <TableCell className="!p-3 typo-sm ">
          <Typography className="text-xs font-semibold">
            <CustomInfo /> Penalty: 2%
          </Typography>
          <Typography className="text-xs font-semibold" noWrap>
            <CustomInfo /> Rewards Maturation: 60 Seconds
          </Typography>
          <Typography className="text-xs font-semibold" noWrap>
            Start: 10/10/2023 End: 15/10/2023
          </Typography>
        </TableCell>
        <TableCell className="!p-3">
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
