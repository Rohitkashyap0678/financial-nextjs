import { Box, Grid, Typography } from '@mui/material'
import { CustomInfo } from '../../common'
import CustonInput from '../../common/Custom/CustomInput'
import RadioButton from '../../common/RadioButton'
function FourthChain() {
  return (
    <div>
      <Box py={2}>
        <Grid container spacing={2}>
          {/* Grid Item 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md" textTransform={'uppercase'}>
              <CustomInfo />
              MAX SELL +0.07 ETH
            </Typography>
            <CustonInput placeholder="input address" />
          </Grid>

          {/* Grid Item 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md" textTransform={'uppercase'}>
              <CustomInfo />
              MAX SELL +0.07 ETH
            </Typography>
            <CustonInput placeholder="input address" />
          </Grid>

          {/* Grid Item 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md" textTransform={'uppercase'}>
              <CustomInfo />
              MAX WALLET 0.09 ETH
            </Typography>
            <CustonInput placeholder="input address" />
          </Grid>

          {/* Grid Item 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md" textTransform={'uppercase'}>
              <CustomInfo />
              BLACKLIST FUNCTION +0.01 BNB
            </Typography>
            <RadioButton />
          </Grid>
        </Grid>
        <Typography
          p={1}
          sx={{ textAlign: 'center', alignItems: 'center' }}
          className="typo-md"
          textTransform={'uppercase'}
        >
          <CustomInfo />
          NEW SUBTOTAL: 5 BNB
        </Typography>
      </Box>
    </div>
  )
}

export default FourthChain
