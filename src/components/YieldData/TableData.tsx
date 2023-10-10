import React from 'react'
import EllipseIcon from '../../common/EllipseIcon'
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
import { CustomInfo } from '../../common/Custom/CustomInfo'
export const TableData = () => {
  return (
    <div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'white' }}>
              <EllipseIcon />
            </TableCell>
            <TableCell sx={{ color: 'white' }} align="right">
              <Typography noWrap variant="subtitle2" color="white">
                <CustomInfo /> STK | RWD
              </Typography>
              <Typography noWrap variant="subtitle2" color="white">
                TOKE/BNB
              </Typography>
            </TableCell>
            <TableCell sx={{ color: 'white' }}>
              <CustomButton name="stake" />
            </TableCell>
            <TableCell sx={{ color: 'white ' }}>
              <Typography variant="subtitle2" noWrap color="white">
                My Earned
              </Typography>
              <Typography variant="subtitle2" color="white">
                0
              </Typography>
            </TableCell>
            <TableCell sx={{ color: 'white' }}>
              <Typography variant="subtitle2" color="white">
                Earn
              </Typography>
              <Typography variant="subtitle2" noWrap color="#00F904">
                APR* Up to 40% **
              </Typography>
            </TableCell>
            <TableCell sx={{ color: 'white' }}>
              <Typography noWrap variant="subtitle2" color="white">
                Staked Assets
              </Typography>
              <Typography variant="subtitle2" color="white">
                78,000
              </Typography>
            </TableCell>

            <TableCell sx={{ color: 'white' }}>
              <Typography noWrap variant="subtitle2" color="white">
                Available Rewards
              </Typography>
              <Typography variant="subtitle2" color="white">
                0000
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="white">
                Staked
              </Typography>
              <Typography variant="subtitle2" color="white">
                000
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="white">
                <CustomInfo />
                Penalty: 2%
              </Typography>
              <Typography noWrap variant="subtitle2" color="white">
                <CustomInfo /> Rewards Maturation: 60 Seconds
              </Typography>
              <Typography noWrap variant="subtitle2" color="white">
                Start: 10/10/2023 End: 15/10/2023
              </Typography>
            </TableCell>
            <TableCell>
              <Box
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
                <TelegramIcon />
                <TelegramIcon />
              </Box>
              <Box
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
                <TelegramIcon />
                <TelegramIcon />
              </Box>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="white">
                <ThumbUpAltIcon /> 100
              </Typography>
              <Typography variant="subtitle2" color="white">
                <ThumbDownAltIcon /> 100
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </div>
  )
}
