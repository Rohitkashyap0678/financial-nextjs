import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { CustomInfo } from '../../common'
import CustonInput from '../../common/Custom/CustomInput'
import InputDesign from '../../common/Custom/InputDesign'

export default function SeventhChain() {
  return (
    <Box>
      <SeventhChainOne />
      <SeventhChainTwo />
      <SeventhChainThird />
    </Box>
  )
}

function SeventhChainOne() {
  return (
    <div>
      <Box py={2}>
        <Grid container spacing={6}>
          {/* Grid Item 1 */}
          <Grid item xs={12} sm={6} md={3}>
            chb{' '}
            <InputDesign
              placeholder="Input Days"
              name="PROMOTED BANNER: select how many Days +1BNB per day"
            />
          </Grid>

          {/* Grid Item 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              chb
              <CustomInfo />
              TWITTER+TG POST: Cost 0.5 BNB
            </Typography>
          </Grid>

          {/* Grid Item 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              chb
              <CustomInfo />
              AMA: Cost 0.5 BNB
            </Typography>
          </Grid>

          {/* Grid Item 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              About
            </Typography>
            <Typography className="typo-md">BASIC +1 BNB</Typography>
            <Typography className="typo-md">STANDARD +2 BNB</Typography>
            <Typography className="typo-md">PRO + 5 BNB</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

function SeventhChainTwo() {
  return (
    <div>
      <Box py={2}>
        <Grid container spacing={6}>
          {/* Grid Item 1 */}
          <Grid item xs={12} sm={6} md={3}>
            chb{' '}
            <Typography className="typo-md">
              SOCIALS PACKAGE: Cost 0.2 BNB
            </Typography>
          </Grid>

          {/* Grid Item 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">TWITTER</Typography>
            <CustonInput
              placeholder="Input Twitter Link"
              className="typo-lg "
            />
          </Grid>

          {/* Grid Item 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">TELEGRAM</Typography>
            <CustonInput
              placeholder="Input Telegram Link"
              className="typo-lg "
            />
          </Grid>

          {/* Grid Item 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">WEBSITE</Typography>
            <CustonInput
              placeholder="Input Website Link"
              className="typo-lg "
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

function SeventhChainThird() {
  return (
    <div>
      <Box py={2}>
        <Grid container spacing={6}>
          {/* Grid Item 1 */}
          <Grid item xs={12} sm={6} md={3}>
            chb <Typography className="typo-md">KYC: Cost 0.2 BNB</Typography>
          </Grid>

          {/* Grid Item 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo /> SPONSORED : Cost 0.2 BNB
            </Typography>
            home filter
          </Grid>

          {/* Grid Item 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <InputDesign placeholder="Input Upvotes" name="Upvotes: 0.1 BNB" />
          </Grid>

          {/* Grid Item 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Pool Image: 0.1 BNB
            </Typography>
            icons
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
