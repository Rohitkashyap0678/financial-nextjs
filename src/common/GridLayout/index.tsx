import React from 'react'

import Grid from '@mui/material/Grid'

import ChainButton from '../Custom/CustomButton/ChainButton'

interface GridItemData {
  id: number
  label: string
}

interface Props {
  data: GridItemData[]
}

const GridLayout: React.FC<Props> = ({ data }) => {
  return (
    <Grid container spacing={1}>
      {data.map((item) => (
        <Grid item xs={4} key={item.id}>
          <ChainButton className="typo-sm !" name={item.label} />
        </Grid>
      ))}
    </Grid>
  )
}

export default GridLayout
