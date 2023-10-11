import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { CustomInfo } from '../../common'
import RadioButton from '../../common/RadioButton'
import InputDesign from '../../common/Custom/InputDesign'
export default function SecoundChain() {
  return (
    <div>
      <Box py={2}>
        <Typography p={1} className="typo-md">
          Extra Anti-Whale
        </Typography>

        <Grid container spacing={6}>
          {/* Grid Item 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Extra Anti-Whale?
            </Typography>
            <RadioButton />
          </Grid>

          {/* Grid Item 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <InputDesign
              placeholder="Over:100"
              name="Token Quantity that triggers the extra fee"
            />
          </Grid>

          {/* Grid Item 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <InputDesign
              placeholder="Input Max Sell"
              name="Time That resets the allowance amount"
            />
          </Grid>

          {/* Grid Item 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <InputDesign
              placeholder="Input Max Sell"
              name="Extra Fee To Apply"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Foreign Token Recovery Activate It?{' '}
            </Typography>
            {/* <CustonInput placeholder="input address" /> */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Foreign Coin Recovery Activate It?
            </Typography>
            {/* <CustonInput placeholder="input address" /> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
