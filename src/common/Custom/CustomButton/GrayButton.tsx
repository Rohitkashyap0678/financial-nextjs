import React from 'react'
import Button from '@mui/material/Button'

interface MyComponentProps {
  name?: string
  className?: string // Define a className prop
  onClick?: () => void // Add onClick property
}

function GrayButton({ name, className, onClick }: MyComponentProps) {
  return (
    <div>
      <Button onClick={onClick} className={`custom-button-two ${className}`}>
        {name}
      </Button>
    </div>
  )
}

export default GrayButton
