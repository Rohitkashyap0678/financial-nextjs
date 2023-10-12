import React from 'react'

import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import MaterialSearchBar from '../../MaterialSearchBar'
interface MyComponentProps {
  defaultValue?: string
}

function MySearch({ defaultValue }: MyComponentProps) {
  return (
    <Box>
      <Typography className="typo-md !text-sm !font-semibold mb-1">
        SEARCH
      </Typography>
      <Box sx={{ width: '236px' }}>
        <MaterialSearchBar
          className="!text-left !text-white block !text-sm !font-semibold"
          defaultValue={defaultValue}
        />
      </Box>
    </Box>
  )
}

export default MySearch
