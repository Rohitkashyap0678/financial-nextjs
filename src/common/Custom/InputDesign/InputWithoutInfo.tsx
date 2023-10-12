import React from 'react'

import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
interface MyComponentProps {
  placeholder: string
  name?: string
  className?: string
}

function InputWithoutInfo({ placeholder, name, className }: MyComponentProps) {
  return (
    <Box>
      <Typography py={1} className={`typo-md ${className}`}>
        {name}
      </Typography>
      <input placeholder={placeholder} className="custom-input" />
    </Box>
  )
}

export default InputWithoutInfo
