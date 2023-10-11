import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import CustomInfo from '../../common/Custom/CustomInfo'
import CustonInput from '../../common/Custom/CustomInput'
import Box from '@mui/material/Box'
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
        <Grid container spacing={2}>
          {gridData.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Typography className="typo-md" textTransform={'uppercase'}>
                <CustomInfo />
                {item.text}
              </Typography>
              <CustonInput placeholder={item.placeholder} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default FirstChain
