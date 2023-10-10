import Box from '@mui/material/Box'

export default function EllipseIcon() {
  // Define an array of classes for the ellipses
  const ellipseClasses = ['ellipse-one', 'ellipse-two']

  return (
    <Box>
      {/* Use the map function to create ellipse elements */}
      {ellipseClasses.map((className, index) => (
        <Box key={index} className={className}></Box>
      ))}
    </Box>
  )
}
