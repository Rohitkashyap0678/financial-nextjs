import React from 'react'
import Typography from '@mui/material/Typography'

interface Props {
  headerName: string
}

const HeaderText: React.FC<Props> = ({ headerName }) => {
  return <Typography className="typo-xl">{headerName}</Typography>
}

export default HeaderText
