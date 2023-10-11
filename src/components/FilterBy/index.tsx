import Typography from '@mui/material/Typography'
import { Box, TableContainer } from '@mui/material'

import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import CustomInfo from '../../common/Custom/CustomInfo'
import Container from '@mui/material/Container'
import * as React from 'react'
import GrayButton from '../../common/Custom/CustomButton/GrayButton'
import MaterialTabs from '../../common/MaterialTabs'
import MaterialSwitch from '../../common/MaterialSwitch'
import MaterialSearchBar from '../../common/MaterialSearchBar'
// import { FilterDropdown } from '../../common'

function FilterBy() {
  // const subItemsTools = [
  //   'Buy On BSC',
  //   'Buy on CSC',
  //   'Website',
  //   'Dashboard',
  //   'Whitepaper',
  // ]
  const tabs = [
    { value: 'one', label: 'Tab One' },
    { value: 'two', label: 'Tab Two' },
    { value: 'three', label: 'Tab Three' },
  ]

  return (
    <Container maxWidth="xl">
      <TableContainer>
        <Typography className="typo-md">Filter by</Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <MaterialTabs tabs={tabs} />
              </TableCell>

              <TableCell>
                <Typography className="typo-md !text-sm !font-semibold" noWrap>
                  Stake Fee: 1% &nbsp;&nbsp; Unstake Fee: 2%
                </Typography>
              </TableCell>
              <TableCell>
                <Typography noWrap className="typo-md !text-sm !font-semibold">
                  <MaterialSwitch
                    defaultChecked
                    className=" !text-sm !font-semibold"
                    label="Staked only"
                  />
                </Typography>
              </TableCell>

              <TableCell>
                <Typography
                  noWrap
                  className="typo-md mb-1 !text-sm !font-semibold"
                >
                  SORT BY
                </Typography>
                <Box sx={{ width: '170px' }}>
                  <GrayButton
                    className="!text-left block !text-sm !font-semibold"
                    name="filter"
                  />
                  {/* <FilterDropdown className='absolute' subItemsTools={subItemsTools} /> */}
                </Box>
              </TableCell>
              <TableCell>
                <Typography className="typo-md !text-sm !font-semibold mb-1">
                  SEARCH
                </Typography>
                <Box sx={{ width: '236px' }}>
                  {/* <GrayButton className='!text-left block !text-sm !font-semibold' name="search farms" /> */}
                  <MaterialSearchBar
                    className="!text-left !text-white block !text-sm !font-semibold"
                    defaultValue="Search Farms"
                  />
                </Box>
              </TableCell>
              <TableCell>
                <Typography noWrap className="typo-md !text-sm !font-semibold">
                  <CustomInfo /> Earn Revenue With
                  <br /> token Assets
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
