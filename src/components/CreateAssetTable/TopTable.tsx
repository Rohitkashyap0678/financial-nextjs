import Typography from '@mui/material/Typography'
import { Box, TableContainer } from '@mui/material'

import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import CustomInfo from '../../common/Custom/CustomInfo'
import Container from '@mui/material/Container'
import React, { useState } from 'react'
import GrayButton from '../../common/Custom/CustomButton/GrayButton'

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MySearch from '../../common/Custom/MySearch'

function TopTable() {
  const subItemsTools = [
    'Alphabetical order',
    'Sponsored',
    'APR',
    'Shared',
    'Most Voted',
    'Token to Stake',
    'NFT to Stake',
    'Verified',
    'Risky',
  ]
  // const tabs = [
  //   { value: 'one', label: 'Live' },
  //   { value: 'two', label: 'Upcoming' },
  //   { value: 'three', label: 'Finished' },
  // ]

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <Container maxWidth="xl" className="!px-0">
      <TableContainer className="contents !px-0">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="!pl-0"></TableCell>

              <TableCell></TableCell>
              <TableCell></TableCell>

              <TableCell>
                <Typography
                  noWrap
                  className="typo-md mb-1 !text-sm !font-semibold"
                >
                  SORT BY
                </Typography>
                <Box sx={{ width: '170px' }} className="relative">
                  <GrayButton
                    className="!text-left block !text-sm !font-semibold"
                    name="filter"
                    onClick={toggleDropdown} // Handle click to toggle the dropdown
                  />
                  {isDropdownOpen && (
                    <div className="bg-[#151618] absolute top-11 min-w-[170px] rounded-[16px]">
                      <Box className="border-[#48494D] rounded-2xl border-2 opacity-90">
                        <List className="!p-0 !m-0">
                          {subItemsTools.map(
                            (
                              item: any,
                              index: number, // Specify the types for item and index
                            ) => (
                              <ListItemButton className="!p-0" key={index}>
                                <ListItemText
                                  primary={item}
                                  className={`border-[#48494D] !text-white list-item-text !text-xs !font-semibold m-1 py-2 px-4 ${
                                    index === subItemsTools.length - 1
                                      ? ''
                                      : 'border-b-2'
                                  }`}
                                />
                              </ListItemButton>
                            ),
                          )}
                        </List>
                      </Box>
                    </div>
                  )}
                </Box>
              </TableCell>
              <TableCell>
                <MySearch defaultValue="Search Farm" />
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

export default TopTable
