import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const customCheckboxStyle = {
  color: '#00F902', // Replace with your desired custom color
}

export default function RadioButton() {
  return (
    <div>
      <Checkbox {...label} defaultChecked style={customCheckboxStyle} />
    </div>
  )
}
