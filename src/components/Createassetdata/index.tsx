import { Divider, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import CustomInfo from '../../common/Custom/CustomInfo'
import CustonInput from '../../common/Custom/CustomInput'
import Box from '@mui/material/Box'
import RadioButton from '../../common/RadioButton'
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
function Createassetdata() {
  return (
    <Box p={2}>
      <Typography variant="subtitle2" color="white">
        Common Features Price: 0.1 BNB
      </Typography>
      <Box py={4}>
        <Grid container spacing={2}>
          {gridData.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Typography
                variant="subtitle2"
                textTransform={'uppercase'}
                color="white"
              >
                <CustomInfo />
                {item.text}
              </Typography>
              <CustonInput placeholder={item.placeholder} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider color="white" />
      <Box py={2}>
        <Grid container spacing={2}>
          {/* Grid Item 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="subtitle2"
              textTransform={'uppercase'}
              color="white"
            >
              <CustomInfo />
              Different Supply Recipient +0.01 BNB
            </Typography>
            <CustonInput placeholder="input address" />
          </Grid>

          {/* Grid Item 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="subtitle2"
              textTransform={'uppercase'}
              color="white"
            >
              <CustomInfo />
              Different Owner +0.02 ETH
            </Typography>
            <CustonInput placeholder="input address" />
          </Grid>

          {/* Grid Item 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="subtitle2"
              textTransform={'uppercase'}
              color="white"
            >
              <CustomInfo />
              Renounce Ownership Activate? +0.02 ETH
            </Typography>
            <RadioButton />
          </Grid>

          {/* Grid Item 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="subtitle2"
              textTransform={'uppercase'}
              color="white"
            >
              <CustomInfo />
              Pausable +0.02 ETH
            </Typography>
            <RadioButton />
          </Grid>
        </Grid>
      </Box>
      <Divider color="white" />

      <Box py={2}>
        <Grid container spacing={2}>
          {/* Grid Item 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="subtitle2"
              textTransform={'uppercase'}
              color="white"
            >
              <CustomInfo />
              Renounce Ownership Activate? +0.02 ETH
            </Typography>
            <RadioButton />
          </Grid>

          {/* Grid Item 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="subtitle2"
              textTransform={'uppercase'}
              color="white"
            >
              <CustomInfo />
              Pausable +0.02 ETH
            </Typography>
            <RadioButton />
          </Grid>
        </Grid>
        <Typography
          sx={{ textAlign: 'center', alignItems: 'center' }}
          variant="subtitle2"
          textTransform={'uppercase'}
          color="white"
        >
          <CustomInfo />
          NEW SUBTOTAL: 5 BNB
        </Typography>
      </Box>
      <Divider color="white" />
    </Box>
  )
}

export default Createassetdata
