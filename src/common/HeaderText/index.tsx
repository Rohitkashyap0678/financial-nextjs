import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface Props {
  headerName: string
}

const HeaderText: React.FC<Props> = ({ headerName }) => {
  return (
    <Box className="p-6">
      <Typography variant="h6" color="white">
        {headerName}
      </Typography>
    </Box>
  )
}

export default HeaderText
