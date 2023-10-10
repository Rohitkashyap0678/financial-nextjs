import { Button } from '@mui/material'
import React, { CSSProperties } from 'react'

interface MyComponentProps {
  name?: string
  classname?: string
  style?: CSSProperties // Use CSSProperties for the style prop
  onClick?: () => void // Add onClick property
}

export const CustomButton = ({
  name,
  classname,
  style,
  onClick,
}: MyComponentProps) => {
  return (
    <div>
      <Button
        onClick={onClick} // Pass the onClick prop to the Button component
        style={style}
        className={`rounded-[30px] !inherit text-white w-24 h-[35px] capitalize linear-gradient ${classname}`}
      >
        {name}
      </Button>
    </div>
  )
}
