import Box from '@mui/material/Box'
interface MyComponentProps {
  placeholder?: string
}

function CustonInput({ placeholder }: MyComponentProps) {
  return (
    <Box py={1}>
      <input placeholder={placeholder} className="custom-input" />
    </Box>
  )
}

export default CustonInput
