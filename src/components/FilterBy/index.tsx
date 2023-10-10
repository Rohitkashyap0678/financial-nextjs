import Typography from '@mui/material/Typography'
import { Box, TableContainer } from '@mui/material'

import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import CustomInfo from '../../common/Custom/CustomInfo'
import Container from '@mui/material/Container'
import Switch from '@mui/material/Switch'
import * as React from 'react'
import GrayButton from '../../common/Custom/CustomButton/GrayButton'
// import { FilterDropdown } from '../../common'

function FilterBy() {
  const [checked, setChecked] = React.useState<boolean>(true)

  // const subItemsTools = [
  //   'Buy On BSC',
  //   'Buy on CSC',
  //   'Website',
  //   'Dashboard',
  //   'Whitepaper',
  // ]

  return (
    <Container maxWidth="xl">
      <TableContainer>
        <Typography variant="subtitle1" color="white">
          Filter by
        </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>
                <button className="live-button">Live</button>
              </TableCell>
              <TableCell sx={{ color: 'white' }} align="right">
                <Typography noWrap variant="subtitle2" color="white">
                  Upcoming
                </Typography>
              </TableCell>

              <TableCell sx={{ color: 'white ' }}>
                <Typography variant="subtitle2" noWrap color="white">
                  Finished
                </Typography>
              </TableCell>
              <TableCell sx={{ color: '#fff' }}>
                <Typography variant="subtitle2" noWrap>
                  Stake Fee: 1% Unstake Fee: 2%
                </Typography>
              </TableCell>
              <TableCell sx={{ color: 'white' }}>
                <Typography noWrap variant="subtitle2" color="white">
                  <Switch
                    checked={checked}
                    onChange={(event: any) => setChecked(event.target.checked)}
                  />
                  Staked only
                </Typography>
              </TableCell>

              <TableCell sx={{ color: 'white' }}>
                <Typography noWrap variant="subtitle2" color="white">
                  SORT BY
                </Typography>
                <Box sx={{ width: '170px' }}>
                  <GrayButton name="filter" />
                  {/* <FilterDropdown className='absolute' subItemsTools={subItemsTools} /> */}
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" color="white">
                  SEARCH
                </Typography>
                <Box sx={{ width: '236px' }}>
                  <GrayButton name="search farms" />
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" color="white">
                  <CustomInfo />
                  Earn Revenue With token Assets
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default FilterBy
