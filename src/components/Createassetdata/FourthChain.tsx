import { Box, Grid, Typography } from '@mui/material'
import { CustomInfo } from '../../common'
import RadioButton from '../../common/RadioButton'
import InputDesign from '../../common/Custom/InputDesign'
function FourthChain() {
  return (
    <div>
      <Box py={2}>
        <Grid container spacing={6}>
          {/* Grid Item 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <InputDesign
              placeholder="Input Max Sell"
              name="MAX SELL +0.07 ETH"
            />
          </Grid>

          {/* Grid Item 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <InputDesign placeholder="Input Max Buy" name="MAX BUY 0.08 ETH" />
          </Grid>

          {/* Grid Item 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <InputDesign
              placeholder="Input Max Wallet"
              name="MAX WALLET 0.09 ETH"
            />
          </Grid>

          {/* Grid Item 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              BLACKLIST FUNCTION +0.01 BNB
            </Typography>
            <RadioButton />
          </Grid>
        </Grid>
        <Typography
          p={2}
          sx={{ textAlign: 'center', alignItems: 'center' }}
          className="typo-md"
        >
          <CustomInfo />
          NEW SUBTOTAL: 5 BNB
        </Typography>
      </Box>
    </div>
  )
}

export default FourthChain
