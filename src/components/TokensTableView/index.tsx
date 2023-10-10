import * as React from 'react'
import { Typography, Box } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

const data = [
  {
    id: 1,
    primaryColor: '#00f904', // Replace with your primary color
    secondaryColor: '#ca0000', // Replace with your secondary color
    text1: '#1',
    text2: 'CAKE/BNB',
    text3: '$0.0000987',
    text4: 0.2, // Positive value for demonstration
  },
  {
    id: 2,
    primaryColor: '#00f904',
    secondaryColor: '#00f904',
    text1: '#2',
    text2: 'CAKE/BNB',
    text3: '$0.0000987',
    text4: -0.12, // Negative value for demonstration
  },
  {
    id: 3,
    primaryColor: '#00f904',
    secondaryColor: '#ca0000',
    text1: '#3',
    text2: 'CAKE/BNB',
    text3: '$0.0034987',
    text4: 0.2, // Positive value for demonstration
  },
  {
    id: 4,
    primaryColor: '#00f904',
    secondaryColor: '#00f904',
    text1: '#4',
    text2: 'CAKE/BNB',
    text3: '$0.0000987',
    text4: -0.2, // Negative value for demonstration
  },
]

interface TableViewTokensProps {
  TableHeaderName?: string
  className?: string
  primaryColor?: string
  secondaryColor?: string
}

const TokensTableView: React.FC<TableViewTokensProps> = ({
  TableHeaderName,
  className,
  primaryColor = '#00f904', // Default values for primary and secondary colors
  secondaryColor = '#ca0000',
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
            style={{
              backgroundColor: item.id === 1 ? primaryColor : 'transparent',
            }}
            className="p-2 h-8 items-center flex text-center rounded-md text-white border-none !text-sm font-semibold font-inter leading-normal"
          >
            {item.text1}
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            className="items-center flex text-white border-none !text-sm font-semibold font-inter leading-normal"
          >
            <Typography
              style={{ backgroundColor: primaryColor }}
              className="w-6 h-6 rounded-full mr-[6px]"
            ></Typography>
            {item.text2}
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            style={{ color: secondaryColor }}
            className="ml-4 border-none !text-sm font-semibold font-inter leading-normal"
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
