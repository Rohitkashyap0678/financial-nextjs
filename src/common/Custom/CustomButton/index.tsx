import { Button } from '@mui/material'
import React from 'react'

interface MyComponentProps {
  name?: string
}

function CustomButton({ name }: MyComponentProps) {
  return (
    <div>
      <Button className="rounded-[30px] text-white w-24 h-[35px] capitalize linear-gradient ">
        {name}
      </Button>
    </div>
  )
}

export default CustomButton
