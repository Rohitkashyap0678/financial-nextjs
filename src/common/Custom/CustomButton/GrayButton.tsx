import React from 'react'
import Button from '@mui/material/Button'

interface MyComponentProps {
  name?: string
}

function GrayButton({ name }: MyComponentProps) {
  return (
    <div>
      <Button className="custom-button-two">{name}</Button>
    </div>
  )
}

export default GrayButton
