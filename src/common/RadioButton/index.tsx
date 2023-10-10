import React, { useState } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

function RadioButton() {
  const [answer, setAnswer] = useState<string>('') // Initialize with an empty string

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value)
  }

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="answer"
        name="answer"
        value={answer}
        onChange={handleAnswerChange}
        row // Display radio buttons in a row
      >
        <FormControlLabel
          value="yes"
          control={<Radio className="radio-button" />}
          label="Yes"
        />
        <FormControlLabel
          value="no"
          control={<Radio className="radio-button" />}
          label="No"
        />
      </RadioGroup>
    </FormControl>
  )
}

export default RadioButton
