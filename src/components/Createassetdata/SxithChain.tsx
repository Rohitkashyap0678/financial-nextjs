import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { CustomInfo } from '../../common'
import CustonInput from '../../common/Custom/CustomInput'
import RadioButton from '../../common/RadioButton'
export default function SecoundChain() {
  return (
    <div>
      <Box py={2}>
        <Grid container spacing={2}>
          {/* Grid Item 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md" textTransform={'uppercase'}>
              <CustomInfo />
              Renounce Ownership Activate? +0.02 ETH
            </Typography>
            <RadioButton />
          </Grid>

          {/* Grid Item 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md" textTransform={'uppercase'}>
              <CustomInfo />
              Different Owner +0.02 ETH
            </Typography>
            <CustonInput placeholder="input address" />
          </Grid>

          {/* Grid Item 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md" textTransform={'uppercase'}>
              <CustomInfo />
              Different Owner +0.02 ETH
            </Typography>
            <CustonInput placeholder="input address" />
          </Grid>

          {/* Grid Item 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md" textTransform={'uppercase'}>
              <CustomInfo />
              Different Owner +0.02 ETH
            </Typography>
            <CustonInput placeholder="input address" />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md" textTransform={'uppercase'}>
              <CustomInfo />
              Different Owner +0.02 ETH
            </Typography>
            <CustonInput placeholder="input address" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md" textTransform={'uppercase'}>
              <CustomInfo />
              Different Owner +0.02 ETH
            </Typography>
            <CustonInput placeholder="input address" />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
