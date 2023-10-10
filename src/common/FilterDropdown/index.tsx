import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const FilterDropdown = () => {
  const subItemsTools = [
    'Buy On BSC',
    'Buy on CSC',
    'Website',
    'Dashboard',
    'Whitepaper',
  ]

  return (
    <div className="bg-black min-w-[300px]">
      <Box className="border-white rounded-2xl border-2 opacity-90">
        <Box>
          <Box>
            <List component="nav" aria-label="folder" className="!p-0 !m-0">
              {subItemsTools.map((item, index) => (
                <ListItemButton className="!p-0" key={index}>
                  <ListItemText
                    primary={item}
                    className={`border-white font-semibold m-1 py-4 px-6 ${
                      index === subItemsTools.length - 1 ? '' : 'border-b-2'
                    }`}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default FilterDropdown
