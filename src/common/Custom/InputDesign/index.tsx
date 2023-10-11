import React from 'react'

import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import CustomInfo from '../CustomInfo'
interface MyComponentProps {
  placeholder: string
  name?: string
}

function InputDesign({ placeholder, name }: MyComponentProps) {
  return (
    <Box>
      <Typography py={1} textTransform={'uppercase'} className="typo-md">
        <CustomInfo /> {name}
      </Typography>
      <input placeholder={placeholder} className="custom-input" />
    </Box>
  )
}

export default InputDesign
