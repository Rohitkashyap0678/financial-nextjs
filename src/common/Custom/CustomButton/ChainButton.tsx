import Button from '@mui/material/Button'

interface MyComponentProps {
  name?: string
  className?: string
}

function ChainButton({ name, className }: MyComponentProps) {
  return (
    <div>
      <Button className={`chain-button ${className}`}>{name}</Button>
    </div>
  )
}

export default ChainButton
