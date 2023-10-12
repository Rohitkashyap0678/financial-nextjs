import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { CustomInfo } from '../../common'
import RadioButton from '../../common/RadioButton'
import GridLayout from '../../common/GridLayout'
import InputDesign from '../../common/Custom/InputDesign'
import CustonInput from '../../common/Custom/CustomInput'
export default function FifthChain() {
  return (
    <Box pt={2}>
      <Typography className="typo-md">Fees On transfers</Typography>
      <FifthChainOne />
      <FifthChainTwo />
      <FifthChainThree />
    </Box>
  )
}

function FifthChainOne() {
  const data = [
    { id: 1, label: 'Transfer' },
    { id: 2, label: 'buy' },
    { id: 3, label: 'sell' },
    { id: 4, label: '1%' },
    { id: 5, label: '1%' },
    { id: 6, label: '1%' },
  ]

  return (
    <div>
      <Box py={2}>
        <Grid container spacing={6}>
          {/* Grid Item 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Burn Fee Activate? +0.11 BNB
            </Typography>
            <RadioButton />
            <Typography className="typo-md">
              <CustomInfo />
              Set Burn Fee
            </Typography>

            <GridLayout data={data} />
          </Grid>

          {/* Grid Item 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              LP Fee Activate it? +0.12 BNB
            </Typography>
            <RadioButton />
            <Typography className="typo-md">
              <CustomInfo />
              Set LP Fee
            </Typography>

            <GridLayout data={data} />
          </Grid>

          {/* Grid Item 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Set LP Receiver
              {/* tabuse */}
            </Typography>
            <RadioButton />

            <InputDesign
              placeholder="Input Your LP Address"
              name="Set LP Address"
            />
          </Grid>

          {/* Grid Item 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Rewards to Holders Activate it? +0.012BNB
            </Typography>
            <RadioButton />
            <Typography className="typo-md">
              <CustomInfo />
              Set Reward Fees
            </Typography>

            <GridLayout data={data} />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

function FifthChainTwo() {
  const data = [
    { id: 1, label: 'Transfer' },
    { id: 2, label: 'buy' },
    { id: 3, label: 'sell' },
    { id: 4, label: '1%' },
    { id: 5, label: '1%' },
    { id: 6, label: '1%' },
  ]

  return (
    <div>
      <Box py={2}>
        <Grid container spacing={6}>
          {/* Grid Item 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Set Reward Token
              {/* tabuse */}
              tabuse
            </Typography>
          </Grid>

          {/* Grid Item 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Wallet Tax #1 Fee Activate?
            </Typography>
            <RadioButton />
            <Typography className="typo-md">
              <CustomInfo />
              Wallet Tax Fee #1
            </Typography>

            <GridLayout data={data} />
          </Grid>

          {/* Grid Item 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Wallet Tax #2 Fee Activate?
            </Typography>
            <RadioButton />
            <Typography className="typo-md">
              <CustomInfo />
              Wallet Tax Fee #2
            </Typography>

            <GridLayout data={data} />
          </Grid>

          {/* Grid Item 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Wallet Tax #3 Fee Activate?
            </Typography>
            <RadioButton />
            <Typography className="typo-md">
              <CustomInfo />
              Wallet Tax Fee #3
            </Typography>

            <GridLayout data={data} />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

function FifthChainThree() {
  return (
    <div>
      <Box py={2}>
        <Grid container spacing={6}>
          {/* Grid Item 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Set Swap Tokens at Amount
            </Typography>
            {/* width radio button */}

            <CustonInput placeholder="input address" />

            <CustonInput placeholder="input address" />
          </Grid>

          {/* Grid Item 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Function to disable/enable fees
            </Typography>
            <RadioButton />
          </Grid>

          {/* Grid Item 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Function to exclude/include from rewards
            </Typography>
            <RadioButton />
          </Grid>

          {/* Grid Item 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomInfo />
              Function to exclude/include from rewards
            </Typography>
            <RadioButton />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
