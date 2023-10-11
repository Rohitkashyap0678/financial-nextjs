import * as React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import { styled } from '@mui/system'

interface FormsInputTkdProps {
  Headername: string
  placeholder: string
  inputName: string
}

const CustomInput = styled(InputBase)({
  '& input::placeholder': {
    color: '#48494D',
    textAlign: 'center',
    fontWeight: '600',
    padding: '0px',
  },
  '& input': {
    textAlign: 'center',
    padding: '0px',
  },
})

export default function FormsInputTkd({
  Headername,
  placeholder,
  inputName,
}: FormsInputTkdProps) {
  return (
    <Box>
      <Typography
        py={1}
        textTransform="capitalize"
        className="typo-md !text-base !font-semibold"
      >
        {Headername}
      </Typography>
      <Box className="max-w-[284px] w-full bg-[#1F2023] !rounded-[10px] flex relative">
        <CustomInput
          placeholder={placeholder}
          className="custom-input !bg-[#1F2023] !text-base !font-semibold !rounded-[10px] !pr-12 !pl-2 !text-white"
        />
        <Typography className="bg-transparent min-w-[45px] bottom-[0px] !text-base !font-semibold !pr-1 !text-center justify-center items-center flex absolute right-0 rounded-[10px] h-[37px]">
          {inputName}
        </Typography>
      </Box>
    </Box>
  )
}
