import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { CustomInfo } from '../../common'
import RadioButton from '../../common/RadioButton'
import InputDesign from '../../common/Custom/InputDesign'
export default function SecoundChain() {
  return (
    <div>
      <Box py={2}>
        <Grid container spacing={2}>
          {/* Grid Item 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <InputDesign
              placeholder="input address"
              name={'Different Supply Recipient +0.01 BNB'}
            />
          </Grid>

          {/* Grid Item 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <InputDesign
              placeholder="input address"
              name="Different Owner +0.02 ETH"
            />
          </Grid>

          {/* Grid Item 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Renounce Ownership Activate? +0.02 ETH
            </Typography>
            <RadioButton />
          </Grid>

          {/* Grid Item 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Pausable +0.02 ETH
            </Typography>
            <RadioButton />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
