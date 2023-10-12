import Box from '@mui/material/Box'
interface MyComponentProps {
  placeholder: string
  className?: string
}

function CustomInput({ placeholder, className }: MyComponentProps) {
  return (
    <Box py={1}>
      <input
        placeholder={placeholder}
        className={`custom-input ${className}`}
      />
    </Box>
  )
}

export default CustomInput
