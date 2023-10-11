import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

// Define the type for subItemsTools
interface FilterDropdownProps {
  subItemsTools: any[] // Replace 'any' with the actual type of subItemsTools
  className?: string
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ subItemsTools }) => {
  return (
    <div className="bg-black min-w-[300px]">
      <Box className="border-[#48494D] rounded-2xl border-2 opacity-90">
        <Box>
          <Box>
            <List component="nav" aria-label="folder" className="!p-0 !m-0">
              {subItemsTools.map(
                (
                  item: any,
                  index: number, // Specify the types for item and index
                ) => (
                  <ListItemButton className="!p-0" key={index}>
                    <ListItemText
                      primary={item}
                      className={`border-[#48494D] !text-xs !font-semibold m-1 py-2 px-6 ${
                        index === subItemsTools.length - 1 ? '' : 'border-b-2'
                      }`}
                    />
                  </ListItemButton>
                ),
              )}
            </List>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default FilterDropdown
