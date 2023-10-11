import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

type SearchBarProps = {
  name?: string
  className?: string
  defaultValue?: string
  style?: React.CSSProperties // Define a style prop
}

export default function MaterialSearchBar({
  className,
  name,
  style,
  ...textFieldProps
}: SearchBarProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 0 },
      }}
    >
      <TextField
        {...textFieldProps}
        name={name}
        InputProps={{
          style: {
            backgroundColor: '#1F2023', // Background color
            borderRadius: '20px', // Rounded corners
            color: 'white', // Text color
            height: '40px',
            fontSize: '14px', // Font size
            fontWeight: 'bold', // Font weight
            ...style, // Merge with any additional styles passed in props
          },
        }}
        className={className}
      />
    </Box>
  )
}
