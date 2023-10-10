import * as React from 'react'
import { Typography, Box } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

const data = [
  {
    id: 1,
    primaryColor: '--primary-color',
    secondaryColor: '--secondary-color',
    text1: '#1',
    text2: 'CAKE/BNB',
    text3: '$0.0000987',
    text4: 0.2, // Positive value for demonstration
  },
  {
    id: 2,
    primaryColor: '--primary-color',
    secondaryColor: '--primary-color',
    text1: '#2',
    text2: 'CAKE/BNB',
    text3: '$0.0000987',
    text4: -0.12, // Negative value for demonstration
  },
  {
    id: 3,
    primaryColor: '--primary-color',
    secondaryColor: '--secondary-color',
    text1: '#3',
    text2: 'CAKE/BNB',
    text3: '$0.0034987',
    text4: 0.2, // Positive value for demonstration
  },
  {
    id: 4,
    primaryColor: '--primary-color',
    secondaryColor: '--primary-color',
    text1: '#4',
    text2: 'CAKE/BNB',
    text3: '$0.0000987',
    text4: -0.2, // Negative value for demonstration
  },
]

interface TableViewTokensProps {
  TableHeaderName?: string
  className?: string
}

const TokensTableView: React.FC<TableViewTokensProps> = ({
  TableHeaderName,
  className,
}) => {
  return (
    <Box className="overflow-x-auto grid gap-4">
      <Typography variant="h6" className={className}>
        {TableHeaderName}
      </Typography>
      {data.map((item) => (
        <Box
          key={item.id}
          className="flex gap-6 items-center whitespace-nowrap justify-between"
        >
          <Typography
            variant="h6"
            color="initial"
            className={`${
              item.id === 1 ? 'bg-[--primary-color]' : ''
            } !p-2 h-8 items-center flex text-center rounded-md text-white border-none !text-sm font-semibold font-inter leading-normal`}
          >
            {item.text1}
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            className="items-center flex text-white border-none !text-sm font-semibold font-inter leading-normal"
          >
            <Typography
              className={`w-6 h-6 bg-[${item.primaryColor}] rounded-full mr-[6px]`}
            ></Typography>
            {item.text2}
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            className={`text-[${item.secondaryColor}] ml-4 border-none !text-sm font-semibold font-inter leading-normal`}
          >
            {item.text3}
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            className={`${
              item.text4 >= 0
                ? 'text-green-500' // Green color for positive values
                : 'text-red-500' // Red color for negative values
            } border-none !text-sm font-semibold font-inter leading-normal`}
          >
            {item.text4 >= 0 ? (
              <ArrowUpwardIcon className="font-semibold font-inter" />
            ) : (
              <ArrowDownwardIcon />
            )}
            {Math.abs(item.text4 * 100).toFixed(2) + '%'}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export default TokensTableView
