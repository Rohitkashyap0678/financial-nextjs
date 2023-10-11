import Button from '@mui/material/Button'

interface MyComponentProps {
  name?: string
}

function ChainButton({ name }: MyComponentProps) {
  return (
    <div>
      <Button className="chain-button">{name}</Button>
    </div>
  )
}

export default ChainButton
