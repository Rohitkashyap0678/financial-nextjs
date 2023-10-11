import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { CustomInfo } from '../../common'
import RadioButton from '../../common/RadioButton'
import GridLayout from '../../common/GridLayout'
import InputDesign from '../../common/Custom/InputDesign'
import CustonInput from '../../common/Custom/CustomInput'
export default function FifthChain() {
  return (
    <Box>
      <Typography className="typo-md">Fees On transfers</Typography>
      <FifthChainOne />
      <FifthChainTwo />
      <FifthChainThree />
    </Box>
  )
}

function FifthChainOne() {
  const data = [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
    { id: 4, label: 'Item 4' },
    { id: 5, label: 'Item 5' },
    { id: 6, label: 'Item 6' },
  ]

  return (
    <div>
      <Box py={2}>
        <Grid container spacing={2}>
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
            <Typography className="typo-md" textTransform={'uppercase'}>
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
            <Typography className="typo-md" textTransform={'uppercase'}>
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
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
    { id: 4, label: 'Item 4' },
    { id: 5, label: 'Item 5' },
    { id: 6, label: 'Item 6' },
  ]

  return (
    <div>
      <Box py={2}>
        <Grid container spacing={2}>
          {/* Grid Item 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md" textTransform={'uppercase'}>
              <CustomInfo />
              Set LP Receiver
              {/* tabuse */}
            </Typography>
            <RadioButton />
            <Typography className="typo-md" textTransform={'uppercase'}>
              <CustomInfo />
              Set LP Address
              <CustonInput />
            </Typography>
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
            <Typography className="typo-md" textTransform={'uppercase'}>
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

          {/* Grid Item 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md" textTransform={'uppercase'}>
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

function FifthChainThree() {
  return (
    <div>
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
            {/* width radio button */}
            <CustonInput placeholder="input address" />
            <CustonInput placeholder="input address" />
          </Grid>

          {/* Grid Item 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md" textTransform={'uppercase'}>
              <CustomInfo />
              Renounce Ownership Activate? +0.02 ETH
            </Typography>
            <RadioButton />
          </Grid>

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
      </Box>
    </div>
  )
}
