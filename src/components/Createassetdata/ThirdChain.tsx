import { Box, Grid, Typography } from '@mui/material'
import { CustomInfo } from '../../common'
import RadioButton from '../../common/RadioButton'
function ThirdChain() {
  return (
    <div>
      <Box py={2}>
        <Grid container spacing={2}>
          {/* Grid Item 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md" textTransform={'uppercase'}>
              <CustomInfo />
              Renounce Ownership Activate? +0.02 ETH
            </Typography>
            <RadioButton />
          </Grid>

          {/* Grid Item 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md" textTransform={'uppercase'}>
              <CustomInfo />
              Pausable +0.02 ETH
            </Typography>
            <RadioButton />
          </Grid>
        </Grid>
        <Typography
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

export default ThirdChain
