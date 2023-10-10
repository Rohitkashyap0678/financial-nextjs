import React from 'react'
interface MyComponentProps {
  placeholder?: string
}

function CustonInput({ placeholder }: MyComponentProps) {
  return (
    <div>
      <input placeholder={placeholder} className="custom-input" />
    </div>
  )
}

export default CustonInput
