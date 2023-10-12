import React from 'react'
import { Box, Typography } from '@mui/material'

import InputWithoutInfo from '../../common/Custom/InputDesign/InputWithoutInfo'
import CustomInput from '../../common/Custom/CustomInput'
import pages from '../../img/pages.png'

export default function NinthChain() {
  return (
    <div>
      <Box py={2}>
        <Box>
          <Typography className="typo-md">
            You got a 10% coupon for your next order! CODE
          </Typography>
          <Box display={'flex'}>
            <CustomInput className="typo-lg" placeholder="COUPON CODE" />
            <img alt="pags" className="w-20px h-20px" src={pages.src} />
          </Box>
        </Box>
        <Box>
          <Typography className="typo-md">
            Referral <br /> Invite your friends to generate assets with our
            tool, you will earn 10% of the total amount they ll spend! INVITE
          </Typography>
          <Box display={'flex'}>
            <CustomInput className="typo-lg" placeholder="COUPON CODE" />
            <img alt="pags" className="w-20px h-20px" src={pages.src} />
          </Box>
        </Box>
        <InputWithoutInfo
          className="typo-lg "
          placeholder="Total Invited "
          name="Total Invited"
        />

        <InputWithoutInfo
          className="typo-lg"
          placeholder="Total Earn"
          name="Total Earn"
        />
      </Box>
    </div>
  )
}
