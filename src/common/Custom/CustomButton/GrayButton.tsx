import React from 'react'
import Button from '@mui/material/Button'

interface MyComponentProps {
  name?: string
  className?: string // Define a className prop
}

function GrayButton({ name, className }: MyComponentProps) {
  return (
    <div>
      <Button className={`custom-button-two ${className}`}>{name}</Button>
    </div>
  )
}

export default GrayButton
