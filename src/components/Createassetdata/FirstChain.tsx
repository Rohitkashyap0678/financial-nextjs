import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

import Box from '@mui/material/Box'
import InputDesign from '../../common/Custom/InputDesign'
interface GridItem {
  id: number
  text: string
  placeholder: string
}

const gridData: GridItem[] = [
  { id: 1, text: 'tocken name', placeholder: 'Input Token Name' },
  { id: 2, text: 'tocken symbol', placeholder: 'Input Token symbol' },
  { id: 3, text: 'tocken decimals', placeholder: 'Input Token Decimals' },
  { id: 4, text: 'tocken supply', placeholder: 'Input Initial supply' },
]
function FirstChain() {
  return (
    <Box>
      <Typography className="typo-md">
        Common Features Price: 0.1 BNB
      </Typography>
      <Box py={2}>
        <Grid container spacing={6}>
          {gridData.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <InputDesign
                className="uppercase"
                placeholder={item.placeholder}
                name={item.text}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default FirstChain
