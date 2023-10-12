import React from 'react'

import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import CustomInfo from '../CustomInfo'
interface MyComponentProps {
  placeholder: string
  name?: string
  className?: string
}

function InputDesign({ placeholder, name, className }: MyComponentProps) {
  return (
    <Box>
      <Typography py={1} className={`typo-md ${className}`}>
        <CustomInfo />
        {name}
      </Typography>
      <input placeholder={placeholder} className="custom-input !text-white" />
    </Box>
  )
}

export default InputDesign
