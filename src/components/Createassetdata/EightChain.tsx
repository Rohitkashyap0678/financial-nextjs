import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { CustomButton } from '../../common'
import InputDesign from '../../common/Custom/InputDesign'
import InputWithoutInfo from '../../common/Custom/InputDesign/InputWithoutInfo'

export default function EightChain() {
  interface GridItem {
    id: number
    text: string
    placeholder: string
  }

  const gridData: GridItem[] = [
    { id: 1, text: 'smart contract cost', placeholder: '1 BNB' },
    { id: 2, text: 'Smart Contract Deployment fees', placeholder: '0.7' },
    { id: 3, text: 'extra', placeholder: '0.7' },
    {
      id: 4,
      text: 'total coast',
      placeholder: 'Field to display total cost BNB',
    },
  ]
  return (
    <div>
      <Box py={2}>
        <Typography className="typo-md">Pay</Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={3}>
            <InputWithoutInfo placeholder="" name="Discount Code" />
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          {/* Grid Item 1 */}
          {gridData.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <InputDesign
                className="capitalize"
                placeholder={item.placeholder}
                name={item.text}
              />
            </Grid>
          ))}
          <CustomButton
            name="PAY AND DEPLOY NOW"
            classname="flex w-[284px] h-[33px]  rounded-xl  !"
          />
        </Grid>
        <Grid container pt={2} spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              Verify Smart-Contract: Cost +0.25 BNB
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="typo-md">
              <CustomButton
                name="PAY AND DEPLOY NOW"
                classname="flex w-[284px] h-[33px]  rounded-xl  !"
              />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
